# LIMELINK 部署紀錄與操作說明

更新日期：2026-10-27（Asia/Shanghai）

## 正式網站

- 網址：<https://limelink.live>
- 原始碼倉庫：<https://github.com/cdstar007/limelinklive>
- 技術：Nuxt 3 / Vue 3 / Nitro。
- 使用者於本次對話確認，剛才發布的網站為 `limelink.live`。

## 本次線上檢查

檢查時間：2026-10-26 23:04:40（Asia/Shanghai）。

以 HTTPS GET 讀取正式網站，取得以下結果：

| 項目 | 結果 |
| --- | --- |
| HTTP 狀態 | `200` |
| 頁面標題 | `LIMELINK \| Cloud Video Service Agent & Technology Integrator` |
| `content-type` | `text/html;charset=utf-8` |
| `x-powered-by` | `Nuxt` |
| `server` | `cloudflare` |
| `cf-ray` | `a50a5ad16d311686-SJC` |

結論：網站在本次檢查時可正常訪問，頁面識別資訊與本專案一致，流量經過 Cloudflare。

`server: cloudflare` 只能證明流量經過 Cloudflare，無法單憑此標頭判定來源是 Cloudflare Pages、Workers 或由 Cloudflare 代理的 VPS。本次未取得 Cloudflare 後台的 deployment ID、發布時間、對應 commit 或自訂網域綁定紀錄，因此尚未核實剛才發布的版本與實際託管位置。

## Cloudflare Workers 部署設定

2026-10-27 在 Cloudflare 後台確認正式網域綁定 Workers 的 `limelinklive`，並連接 GitHub `cdstar007/limelinklive`、production 分支 `main`。建置命令為 `npm run build`、部署命令為 `npx wrangler deploy`、根目錄 `/`。

本次整合遠端 `42dbac1` 已有的 Workers 設定：`nuxt.config.ts` 預設使用 `cloudflare_module`，並啟用 `cloudflare.deployConfig`；`wrangler.toml` 的 Worker 名稱為 `limelinklive`，啟用 named Preview。Nitro 建置產生 `.output/server/wrangler.json`、Worker 入口與 ASSETS 綁定。舊的 Pages 專案名稱 `limelinkstreaming` 不適用於此正式站。

```bash
npm ci
npm run build
# 更新 named staging Preview，不改變正式流量
npx wrangler preview --name staging
# 更新正式 Worker；推送 main 也會觸發後台 Git 整合
npx wrangler deploy
```

- 正式站：<https://limelink.live>
- 測試 Preview：<https://staging-limelinklive.ljq98.workers.dev>
- 後台也列有 `staging.limelink.live` 路由；應以實際 HTTP 回應核對它的 Preview 對應。
- staging 預覽必須維持 `X-Robots-Tag: noindex`。
- 每次發布後記錄 commit、Preview URL、部署 ID 與線上驗證結果。不得只根據建置成功宣稱發布成功。

## 倉庫中的 VPS 自動部署流程

設定檔：`.github/workflows/deploy.yml`。

- Workflow 名稱：`Deploy to VPS`。
- 觸發方式：推送至 `main`，或在 GitHub Actions 手動觸發。
- 執行環境：`self-hosted` runner。
- VPS 專案目錄：`/home/ubuntu/limelinklive`。
- README 記載的 runner 目錄：`/home/ubuntu/actions-runner-limelinklive`。

現有 workflow 執行以下命令：

```bash
set -e
cd /home/ubuntu/limelinklive
git fetch origin
git reset --hard origin/main
npm ci
npm run build:server
pm2 startOrReload ecosystem.config.cjs --only limelinklive
pm2 save
```

其中 `git reset --hard origin/main` 會覆蓋 VPS checkout 中已追蹤檔案的本地修改。這段內容是現有流程的紀錄，本次未執行。

`npm run build:server` 使用 `NITRO_PRESET=node-server`，產生 `.output/server/index.mjs`。

PM2 設定檔為 `ecosystem.config.cjs`：

| 項目 | 設定 |
| --- | --- |
| 應用名稱 | `limelinklive` |
| 入口 | `.output/server/index.mjs` |
| 執行模式 | `fork`，1 個 instance |
| 預設環境 | `NODE_ENV=production` |
| 預設監聽位址 | `127.0.0.1:3010` |
| 環境變數檔 | 專案根目錄的 `.env.production` |

`.env.production` 的值會覆寫 PM2 設定中的預設環境值。VPS 反向代理設定與 Cloudflare 到來源站的路由未在本次核實。

## 執行環境設定

README 列出的執行環境變數：

- `FEISHU_WEBHOOK_URL`
- `FEISHU_WEBHOOK_SECRET`（啟用飛書簽章驗證時）
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

實際讀取方式以 `server/` 與 `nuxt.config.ts` 為準；Nuxt runtime config 另有對應的 `NUXT_*` 覆寫機制。密鑰應保存在部署平台或伺服器環境中，不記錄於此文件。`.env.*` 已由 `.gitignore` 排除。

## 2026-10-27 聯絡表單故障

正式站及本機預覽的 `/api/inquiry` 均回傳 `500`，訊息為 `Feishu webhook is not configured`。Cloudflare 後台確認 `limelinklive` 的「執行期變數和密鑰 → 生產」清單為空，建置環境也沒有變數或密鑰。後端在送出通知前即因缺少 webhook 停止，這次錯誤不表示詢價已送達。

修復方式：

1. 在 Cloudflare **Workers 和 Pages → limelinklive → 設定 → 執行期變數和密鑰 → 生產** 新增 **Secret** `FEISHU_WEBHOOK_URL`，值為指定收件群組的飛書自訂機器人 webhook。
2. 若機器人啟用簽章驗證，也新增 **Secret** `FEISHU_WEBHOOK_SECRET`。不可將 webhook 或簽章密鑰放進 `public` runtime config、Git 或此文件。
3. 依後台提示儲存並部署設定，確認新版本生效。只設定建置變數不足以取代執行期設定；預覽環境須另行設定。
4. 使用下列空白請求檢查設定是否已被 API 讀到。程式會在發送前拒絕空內容，因此不會發送通知。預期由 `500 / Feishu webhook is not configured` 變成 `400 / Inquiry payload is empty`：

   ```bash
   curl -i https://limelink.live/api/inquiry \
     -H 'Content-Type: application/json' \
     --data '{}'
   ```

5. 最後使用明確標示的測試詢價，確認飛書群組實際收到通知。第 4 步只證明設定已讀取，不能證明收件成功。

本次僅完成根因確認；尚未取得 webhook，沒有新增 Secret、重新部署或發送測試詢價。本機預覽也需自行設定環境變數後重新啟動，正式站的 Secret 不會自動同步到本機。

## 發布後核對

讀取正式站回應與首頁：

```bash
curl -sS -L -D /tmp/limelink-live-headers.txt \
  https://limelink.live -o /tmp/limelink-live.html
cat /tmp/limelink-live-headers.txt
```

核對首頁、中文頁 `/zh`、主要導覽及靜態資源。表單送出會產生實際詢問紀錄，應在需要端到端驗證時使用可識別的測試資料。

若需確認「剛才發布的版本」，還需取得發布平台的成功紀錄、發布時間、對應 commit，以及正式網域指向的 production deployment。HTTP 200 與 Cloudflare 標頭不能替代這些發布證據。

## 本次變更範圍

2026-10-26 的初次紀錄僅整理文件。2026-10-27 使用者另行授權推送 Git 並更新測試／正式環境；實際完成狀態以後續發布紀錄為準。

## 2026-10-27 發布紀錄

- 應用程式 commit：`3fdb5a820c224c15722c75c86f97d2bfcb1a1686`，已推送 `origin/main`；整合遠端 `42dbac1` 的 Workers 與 staging 設定。
- 驗證：完整測試 29/29 通過；`npm run build:server` 與 `npm run build` 成功，`git diff --check` 通過。
- staging：`wrangler preview --name staging --tag 3fdb5a8` 成功。固定測試網址 <https://staging.staging.limelink.live>，本次不可變網址 <https://6d74ec14.staging.limelink.live>；對應 workers.dev URL 為 <https://staging-limelinklive.ljq98.workers.dev>。
- 正式：手動部署版本 `594375b1-cacf-4520-ab00-287e94d2ea22`，tag `3fdb5a8`；Cloudflare Git 整合隨後發布版本 `8e0c4057-7e89-4d41-9a86-c7871d30313f`。正式網址 <https://limelink.live>。
- VPS 自動部署亦成功：[GitHub Actions 40365515544](https://github.com/cdstar007/limelinklive/actions/runs/40365515544)，對應同一個應用程式 commit。
- staging 與正式均實際確認：三語首頁 WebP、三語 `/about` 回傳 200、九個服務頁各 1 個 H1／9 個 H2／6 個 FAQ 與正確 canonical、sitemap 共 42 個 URL、robots 僅宣告一份 sitemap。staging 回傳 `X-Robots-Tag: noindex`。
- **聯絡表單仍待設定**：兩環境的空白探測均回傳 `500 / Feishu webhook is not configured`。本次未取得 webhook，因此沒有恢復實際收件，也未發送任何測試詢價；處理步驟見前述故障章節。
- 本紀錄為應用程式發布後追加的文件，文件 commit 不改變網站建置內容。

## 2026-10-27 飛書拒收判斷修正

補上 Secret 後，正式 API 曾回傳 `200 / ok: true`，但使用者確認群組未收到。調查發現舊程式未檢查飛書回應本文的業務錯誤碼；HTTP 200 不能視為訊息接受成功。

修正 `server/api/inquiry.post.ts`：只接受數值 `code: 0`（或舊版 `StatusCode: 0`）；拒收、非預期回應、連線或簽章錯誤均回傳 502 並解除本次冷卻，允許重試。回應僅提供數字 `data.providerCode` 供排查，不輸出 webhook、密鑰、原始錯誤本文或表單內容。關閉自動重試，設定 15 秒通知請求逾時。

六項新增 handler 回歸測試涵蓋新舊成功碼、HTTP 200 拒收、異常回應、網路失敗與簽章失敗；完整測試 35/35 通過，Node 建置成功。實際飛書拒收原因須以修正後線上回應確認，不能預先推定是簽章、關鍵字或 IP 設定。

線上診斷結果：修正已推送 `09d06c0` 並部署正式版本 `a70243f1-2043-4031-83f0-8f759d69c7fd`，staging 亦已更新。測試詢價回傳 `502`，`data.providerCode: 19021`；依飛書官方機器人文件，此碼為簽章驗證失敗。檢查當時正式環境僅有 webhook URL，沒有簽章密鑰，因此需由使用者將同一機器人「安全設定 → 簽章校驗」的密鑰存入生產環境 Secret `FEISHU_WEBHOOK_SECRET` 並部署，再測試。不得以關閉驗證作為修復。

官方依據：<https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot>。`wrangler.toml` 已設定 `keep_vars = true`，避免後台管理的執行期變數被 Git/CLI 發布覆蓋；Secret 值不記錄於版本庫。
