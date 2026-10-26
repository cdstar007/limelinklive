# 服務頁內容擴充紀錄

更新：2026-10-27（Asia/Shanghai）。本地內容變更，尚未部署。

## 範圍與實際正文篇幅

| 服務 | 英文單字 | 台灣繁體漢字 | 簡體漢字 | 每頁 H2 | 每頁 FAQ |
| --- | ---: | ---: | ---: | ---: | ---: |
| Tencent Cloud CSS | 1,352 | 2,037 | 2,040 | 9 | 6 |
| BytePlus MediaLive | 1,342 | 2,021 | 2,028 | 9 | 6 |
| Agora RTC | 1,405 | 2,103 | 2,096 | 9 | 6 |

篇幅由本地正式 Node 建置的 HTML 量測，只計 `<main>` 正文；英文按單字計數，中文按漢字計數，不含全站導覽、頁尾或 JSON-LD。

## 編輯與實作原則

- 各頁包含產品功能、適用情境、採購比較、導入流程、情境範例及常見問題，並提供原廠參考連結與站內詢價入口。
- 使用者選擇先採用導入情境範例；頁面明確標示並非真實客戶專案，也沒有編造節省比例、完成天數、客戶名稱或推薦語。
- 公開價格維持適用官網計費項 8 折，區分標價折扣與既有合約實際節省。用量、地區、帳號、附加服務與交付範圍需逐項核對。
- 移除舊服務頁中沒有情境限定的延遲、傳輸品質與全包支援宣稱，改以代表性測試與書面範圍說明。
- 九份文案存於 `data/service-guides/`；頁面共用 `ServiceLanding.vue`，但每家供應商的功能、計費重點與導入步驟分別撰寫。
- FAQPage 使用同一份可見 FAQ 資料，包含正確語言、頁面 URL 及 `#faq` 識別。FAQ 展開後可閱讀完整答案，不使用只有搜尋引擎看得到的額外答案。
- 三個服務頁、三種語言的 `lastmod` 更新為本次實際修訂日期，其他頁面日期不變。

## 查核來源

- [Tencent Cloud CSS](https://www.tencentcloud.com/products/css)
- [LVB 計費](https://www.tencentcloud.com/document/product/267/2818)
- [LEB 概覽](https://www.tencentcloud.com/document/product/267/42141)
- [BytePlus MediaLive](https://www.byteplus.com/en/product/medialive)
- [MediaLive 入門流程](https://docs.byteplus.com/en/docs/byteplus-media-live/docs-getting-started)
- [MediaLive 計費總覽](https://docs.byteplus.com/en/docs/byteplus-media-live/docs-overview-1)
- [Agora Video Calling](https://www.agora.io/en/products/video-call/)
- [Agora RTC Quickstart](https://docs.agora.io/en/realtime-media/rtc/get-started-sdk)
- [Agora RTC Pricing](https://docs.agora.io/en/realtime-media/rtc/reference/pricing)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Google 更新紀錄](https://developers.google.com/search/updates)：FAQ 特殊搜尋樣式自 2026-05-07 起不再顯示；依使用者要求保留語意標記，不承諾特殊搜尋外觀。

## 驗證

- 本地九個服務頁均 HTTP 200，三種語言與 self-canonical 正確。
- 每頁一個 H1、九個 H2，六則 FAQ 與 JSON-LD 完全一致。
- 詢價 CTA 保留語言並指向 `/pricing#cost-review`。
- 內容及 schema 測試涵蓋九份文案、公開定價、假設案例標示與安全序列化；另保留既有語言、計算器與 sitemap 測試。
