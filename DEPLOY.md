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

## 倉庫中的 Cloudflare Pages 設定

**2026-10-27 後台補查：** 正式網域實際綁定 Cloudflare Workers 的 `limelinklive`，並連接 GitHub `cdstar007/limelinklive`、production 分支 `main`。後台顯示建置命令為 `npm run build`、部署命令為 `npx wrangler deploy`、根目錄 `/`。因此以下本機 Pages 設定不能直接當成正式站的發布設定；本次沒有修改它或觸發部署。尚未核對 production deployment 的 commit。

設定檔：`wrangler.toml`。

```toml
name = "limelinkstreaming"
pages_build_output_dir = "dist"
compatibility_date = "2026-05-15"
compatibility_flags = ["nodejs_compat"]
```

`nuxt.config.ts` 預設使用 `cloudflare_pages` Nitro preset；可透過 `NITRO_PRESET` 覆寫。Cloudflare 版本的建置命令如下：

```bash
npm ci
npm run build
```

預期發布目錄為 `dist`，與 `wrangler.toml` 一致。此設定代表專案具備 Cloudflare Pages 建置設定，不代表本次已執行發布。

倉庫沒有 Cloudflare 自動發布 workflow 或 npm 發布指令；後台另有上述 Workers Git 整合。再次發布前，須先核對本機 Pages 設定與正式 Workers 建置產物的差異，避免發布到錯誤專案。

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

本次僅整理部署文件，沒有重新發布網站、修改 DNS、觸發 GitHub Actions 或變更伺服器設定。
