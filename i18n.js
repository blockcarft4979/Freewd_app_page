/*!
 * Freewd 社区官网 · 国际化（i18n）模块
 * 依赖：页面中的 [data-i18n] / [data-i18n-html] / [data-i18n-alt] 标记
 * 入口：页面底部引入 <script src="i18n.js"></script> 即可自动初始化
 * 暴露：window.FreewdI18n.setLang(lang) / getLang() / detect()
 */
(function (global) {
  'use strict';

  /* ============ 1. 文案字典 ============ */
  var I18N = {
    zh: {
      'meta.title': 'Freewd 社区 · Compose 重构版',
      'meta.description': 'Freewd 社区 Compose 重构版 —— 基于 Jetpack Compose + Material 3 重构，单 Activity 架构，支持纯黑主题与多语言，由 BLOCKCARFT 个人开发与运营。',
      'og.title': 'Freewd 社区 · Compose 重构版',
      'og.description': '基于 Jetpack Compose + Material 3 重构，支持纯黑主题与多语言，由 BLOCKCARFT 个人开发与运营。',

      'hero.title': 'Freewd 社区',
      'hero.iconAlt': 'Freewd 社区 Icon',
      'hero.sub': '一款由个人开发与运营的社区类 Android 应用，使用 Jetpack Compose 完全从零重构。干净、流畅、没有花里胡哨的广告，也没有多余弹窗。',
      'hero.note': 'Freewd 于 2025 年 8 月 13 日开始运营，由 BLOCKCARFT（BCK）一人开发维护。这是一个纯粹“用爱发电”的个人项目：没有团队，没有融资，也没有买量推广。',
      'hero.btn.features': '功能特性',
      'hero.btn.download': '下载',

      'features.title': '功能特性',
      'features.subtitle': '基于 Jetpack Compose + Material 3，更现代、更流畅',
      'features.feed.title': '社区信息流',
      'features.feed.desc': '卡片式 Feed 流，支持下拉刷新与上拉加载更多，图片自适应展示，懒加载与内存复用经过细致打磨。',
      'features.drawer.title': '侧滑导航抽屉',
      'features.drawer.desc': '手势侧滑打开菜单，主界面平滑平移，几乎复刻主流 App 的侧滑交互体验。',
      'features.preview.title': '全屏图片预览',
      'features.preview.desc': '点击 Feed 图片进入沉浸式全屏预览，支持双击缩放、双指缩放、拖动平移，自动隐藏状态栏与导航栏。',

      'version.title': '最新版本亮点',
      'version.p1': '<strong>版本已在GitHub发布</strong>。新增<strong>纯黑主题</strong>，完美适配 OLED 屏幕，搭配 Material You 动态取色，丝滑又省电。',
      'version.p2': '同时支持<strong>简体中文、繁体中文（台湾）、英语、日语、韩语</strong>多语言，正式走向国际。',

      'stack.title': '技术栈',
      'stack.lang': '语言',
      'stack.ui': 'UI 框架',
      'stack.arch': '架构',
      'stack.min': '最低版本',

      'notice.title': '基岩版服务器已停止运营',
      'notice.desc': 'Freewd 的 Minecraft 基岩版服务器已正式关服，寒假开放。',

      'disclaimer.title': '免责声明',
      'disclaimer.subtitle': '请认准唯一官方渠道，谨防虚假信息',
      'disclaimer.item1': '<strong>本应用为个人非商业项目</strong>，由 BLOCKCARFT（BCK）独立开发与维护，不含任何付费内容、充值入口或账号交易服务。',
      'disclaimer.item2': '<strong>唯一官方发布渠道为 GitHub Releases</strong>：<a href="https://apk.freewd.top/apk/latest.apk" target="_blank" rel="noopener noreferrer">点击下载</a>。请勿从任何第三方下载站获取安装包。',
      'disclaimer.item3': '<strong>第三方下载站的一切描述与本项目无关。</strong>部分站点上的版本号、截图、功能介绍可能存在虚假宣传、夸大描述、捆绑安装或恶意篡改，开发者无法对其安全性负责。',
      'disclaimer.item4': '<strong>谨防诈骗。</strong>本项目从未以任何形式收费、代充、售卖账号或招募代理，凡以“Freewd 官方”名义索要钱财的行为均为假冒。',
      'disclaimer.item5': '<strong>如有疑问或发现假冒渠道</strong>，欢迎通过 QQ 群 <strong>1104207891</strong> 联系，或在 GitHub 仓库提交 Issue 反馈。',

      'anniversary': '<strong>Freewd 社区</strong> · 因爱而生',

      'footer.brand': 'Freewd 社区',
      'footer.desc': 'Compose 重构版 · 开放交流<br>QQ 群：1104207891',
      'footer.github': 'GitHub',
      'footer.download': '下载',
      'footer.copyright': '2024-2026 Freewd Studio | BLOCKCARFT'
    },

    'zh-TW': {
      'meta.title': 'Freewd 社群 · Compose 重構版',
      'meta.description': 'Freewd 社群 Compose 重構版 —— 基於 Jetpack Compose + Material 3 重構，單 Activity 架構，支援純黑主題與多語言，由 BLOCKCARFT 個人開發與維運。',
      'og.title': 'Freewd 社群 · Compose 重構版',
      'og.description': '基於 Jetpack Compose + Material 3 重構，支援純黑主題與多語言，由 BLOCKCARFT 個人開發與維運。',

      'hero.title': 'Freewd 社群',
      'hero.iconAlt': 'Freewd 社群 Icon',
      'hero.sub': '一款由個人開發與維運的社群類 Android 應用程式，使用 Jetpack Compose 完全從零重構。乾淨、流暢，沒有花俏的廣告，也沒有多餘的彈出視窗。',
      'hero.note': 'Freewd 於 2025 年 8 月 13 日開始營運，由 BLOCKCARFT（BCK）一人開發維護。這是一個純粹「用愛發電」的個人專案：沒有團隊，沒有募資，也沒有買量推廣。',
      'hero.btn.features': '功能特色',
      'hero.btn.download': '下載',

      'features.title': '功能特色',
      'features.subtitle': '基於 Jetpack Compose + Material 3，更現代、更流暢',
      'features.feed.title': '社群動態牆',
      'features.feed.desc': '卡片式動態牆，支援下拉重新整理與上拉載入更多，圖片自動調整呈現，延遲載入與記憶體重複利用皆經過細緻調校。',
      'features.drawer.title': '側滑導覽抽屜',
      'features.drawer.desc': '手勢側滑開啟選單，主畫面平順位移，幾乎重現主流 App 的側滑互動體驗。',
      'features.preview.title': '全螢幕圖片預覽',
      'features.preview.desc': '點擊動態牆圖片進入沉浸式全螢幕預覽，支援點兩下縮放、雙指縮放、拖曳平移，並自動隱藏狀態列與導覽列。',

      'version.title': '最新版本亮點',
      'version.p1': '<strong>版本已在GitHub发布</strong>。新增<strong>纯黑主题</strong>，完美适配 OLED 屏幕，搭配 Material You 动态取色，丝滑又省电。',
      'version.p2': '同时支援<strong>简体中文、繁体中文（台湾）、英文、日文、韩文</strong>多语言，正式走向国际。',

      'stack.title': '技術堆疊',
      'stack.lang': '語言',
      'stack.ui': 'UI 框架',
      'stack.arch': '架構',
      'stack.min': '最低版本',

      'notice.title': '基岩版伺服器已停止營運',
      'notice.desc': 'Freewd 的 Minecraft 基岩版伺服器已正式關閉，寒假開放。',

      'disclaimer.title': '免責聲明',
      'disclaimer.subtitle': '請認明唯一官方管道，慎防不實資訊',
      'disclaimer.item1': '<strong>本應用程式為個人非商業專案</strong>，由 BLOCKCARFT（BCK）獨立開發與維護，不含任何付費內容、儲值入口或帳號交易服務。',
      'disclaimer.item2': '<strong>唯一官方發布管道為 GitHub Releases</strong>：<a href="https://apk.freewd.top/apk/latest.apk" target="_blank" rel="noopener noreferrer">點擊下載</a>。請勿從任何第三方下載站取得安裝檔。',
      'disclaimer.item3': '<strong>第三方下載站的一切描述與本專案無關。</strong>部分網站上的版本號、截圖、功能介紹可能存在不實宣傳、誇大描述、夾帶安裝或惡意竄改，開發者無法對其安全性負責。',
      'disclaimer.item4': '<strong>慎防詐騙。</strong>本專案從未以任何形式收費、代儲、販售帳號或招募代理，凡以「Freewd 官方」名義索取金錢的行為均為假冒。',
      'disclaimer.item5': '<strong>如有疑問或發現假冒管道</strong>，歡迎透過 QQ 群 <strong>1104207891</strong> 聯絡，或在 GitHub 儲存庫提交 Issue 回報。',

      'anniversary': '<strong>Freewd 社群</strong> · 因愛而生',

      'footer.brand': 'Freewd 社群',
      'footer.desc': 'Compose 重構版 · 開放交流<br>QQ 群：1104207891',
      'footer.github': 'GitHub',
      'footer.download': '下載',
      'footer.copyright': '2024-2026 Freewd Studio | BLOCKCARFT'
    },

    en: {
      'meta.title': 'Freewd Community · Compose Rewrite',
      'meta.description': 'Freewd Community, rebuilt from scratch with Jetpack Compose + Material 3. Single-Activity architecture, pure black theme and multi-language support. Developed and operated by BLOCKCARFT.',
      'og.title': 'Freewd Community · Compose Rewrite',
      'og.description': 'Rebuilt with Jetpack Compose + Material 3, with a pure black theme and multi-language support. Developed and operated by BLOCKCARFT.',

      'hero.title': 'Freewd Community',
      'hero.iconAlt': 'Freewd Community Icon',
      'hero.sub': 'A community Android app developed and run by a single person, rebuilt entirely from scratch with Jetpack Compose. Clean and smooth — no flashy ads, no annoying pop-ups.',
      'hero.note': 'Freewd has been online since August 13, 2025, developed and maintained solely by BLOCKCARFT (BCK). It is a pure passion project: no team, no funding, no paid promotion.',
      'hero.btn.features': 'Features',
      'hero.btn.download': 'Download',

      'features.title': 'Features',
      'features.subtitle': 'Built on Jetpack Compose + Material 3 — more modern, more fluid',
      'features.feed.title': 'Community Feed',
      'features.feed.desc': 'A card-based feed with pull-to-refresh and infinite scroll, adaptive image layouts, and carefully tuned lazy loading and memory reuse.',
      'features.drawer.title': 'Swipe-out Navigation Drawer',
      'features.drawer.desc': 'Open the menu with an edge swipe while the main screen slides along — closely matching the drawer interaction of mainstream apps.',
      'features.preview.title': 'Full-screen Image Viewer',
      'features.preview.desc': 'Tap a feed image for an immersive full-screen view with double-tap zoom, pinch zoom and panning, plus auto-hidden status and navigation bars.',

      'version.title': 'What\'s New',
      'version.p1': '<strong>v3.10.7</strong> is now available on GitHub. It adds a <strong>pure black theme</strong> that is perfect for OLED screens, paired with Material You dynamic color — smooth and battery-friendly.',
      'version.p2': 'It also supports <strong>Simplified Chinese, Traditional Chinese (Taiwan), English, Japanese and Korean</strong>, taking the project international.',

      'stack.title': 'Tech Stack',
      'stack.lang': 'Language',
      'stack.ui': 'UI Framework',
      'stack.arch': 'Architecture',
      'stack.min': 'Min Version',

      'notice.title': 'Bedrock Server Has Been Shut Down',
      'notice.desc': 'Freewd\'s Minecraft Bedrock server has officially closed. It will reopen during the winter break.',

      'disclaimer.title': 'Disclaimer',
      'disclaimer.subtitle': 'Please use only the official channels and beware of false information',
      'disclaimer.item1': '<strong>This app is a personal, non-commercial project</strong> independently developed and maintained by BLOCKCARFT (BCK). It contains no paid content, top-up options or account trading services.',
      'disclaimer.item2': '<strong>The only official release channel is GitHub Releases</strong>: <a href="https://apk.freewd.top/apk/latest.apk" target="_blank" rel="noopener noreferrer">download here</a>. Please do not obtain the APK from any third-party download site.',
      'disclaimer.item3': '<strong>Any description on third-party download sites has nothing to do with this project.</strong> Version numbers, screenshots and feature descriptions on such sites may involve false advertising, exaggeration, bundled installers or malicious tampering, and the developer cannot be held responsible for their safety.',
      'disclaimer.item4': '<strong>Beware of scams.</strong> This project has never charged fees, offered top-ups, sold accounts or recruited agents in any form. Anyone asking for money in the name of "Freewd Official" is an impostor.',
      'disclaimer.item5': '<strong>If you have questions or spot an impostor channel</strong>, feel free to reach us via the QQ group <strong>1104207891</strong>, or open an Issue on the GitHub repository.',

      'anniversary': '<strong>Freewd Community</strong> · Born out of love',

      'footer.brand': 'Freewd Community',
      'footer.desc': 'Compose Rewrite · Open community<br>QQ Group: 1104207891',
      'footer.github': 'GitHub',
      'footer.download': 'Download',
      'footer.copyright': '2024-2026 Freewd Studio | BLOCKCARFT'
    },

    ja: {
      'meta.title': 'Freewd コミュニティ · Compose リファクタリング版',
      'meta.description': 'Freewd コミュニティ Compose リファクタリング版 —— Jetpack Compose + Material 3 で全面的に作り直し。単一 Activity アーキテクチャ、純黒テーマと多言語に対応。BLOCKCARFT が個人で開発・運営しています。',
      'og.title': 'Freewd コミュニティ · Compose リファクタリング版',
      'og.description': 'Jetpack Compose + Material 3 で作り直し、純黒テーマと多言語に対応。BLOCKCARFT が個人で開発・運営しています。',

      'hero.title': 'Freewd コミュニティ',
      'hero.iconAlt': 'Freewd コミュニティ アイコン',
      'hero.sub': '個人が開発・運営するコミュニティ系 Android アプリ。Jetpack Compose でゼロから作り直しました。広告も余計なポップアップもない、クリーンで滑らかな体験を。',
      'hero.note': 'Freewd は 2025 年 8 月 13 日に運営を開始し、BLOCKCARFT（BCK）が一人で開発・保守しています。チームも資金も広告宣伝もない、純粋な「愛で動く」個人プロジェクトです。',
      'hero.btn.features': '機能',
      'hero.btn.download': 'ダウンロード',

      'features.title': '機能',
      'features.subtitle': 'Jetpack Compose + Material 3 による、よりモダンで滑らかな設計',
      'features.feed.title': 'コミュニティフィード',
      'features.feed.desc': 'カード型のフィード。引っ張って更新、下までスクロールで追加読み込みに対応し、画像は自動でレイアウト。遅延読み込みとメモリ再利用も丁寧に調整しています。',
      'features.drawer.title': 'スワイプ式ナビゲーションドロワー',
      'features.drawer.desc': '画面端のスワイプでメニューを開き、メイン画面が滑らかにスライド。主要アプリのドロワー操作感をほぼ再現しています。',
      'features.preview.title': '全画面画像ビューア',
      'features.preview.desc': 'フィードの画像をタップすると没入型の全画面プレビューに。ダブルタップ拡大、ピンチズーム、ドラッグ移動に対応し、ステータスバーとナビゲーションバーは自動で非表示になります。',

      'version.title': '最新バージョンのハイライト',
      'version.p1': '<strong>v3.10.7</strong> を GitHub で公開しました。<strong>純黒テーマ</strong>を新たに追加し、OLED ディスプレイに最適化。Material You のダイナミックカラーと合わせて、滑らかかつ省電力です。',
      'version.p2': '<strong>簡体字中国語・繁体字中国語（台湾）・英語・日本語・韓国語</strong>に対応し、本格的にグローバル展開します。',

      'stack.title': '技術スタック',
      'stack.lang': '言語',
      'stack.ui': 'UI フレームワーク',
      'stack.arch': 'アーキテクチャ',
      'stack.min': '最低バージョン',

      'notice.title': 'Bedrock 版サーバーは運営を終了しました',
      'notice.desc': 'Freewd の Minecraft Bedrock 版サーバーは正式に閉鎖しました。冬休みに再開予定です。',

      'disclaimer.title': '免責事項',
      'disclaimer.subtitle': '公式チャネルのみをご利用ください。偽情報にご注意を',
      'disclaimer.item1': '<strong>本アプリは個人による非商業プロジェクトです。</strong>BLOCKCARFT（BCK）が単独で開発・保守しており、有料コンテンツ、課金導線、アカウント売買サービスは一切ありません。',
      'disclaimer.item2': '<strong>唯一の公式配布チャネルは GitHub Releases です</strong>：<a href="https://apk.freewd.top/apk/latest.apk" target="_blank" rel="noopener noreferrer">こちらからダウンロード</a>。第三者配布サイトから APK を入手しないでください。',
      'disclaimer.item3': '<strong>第三者ダウンロードサイトの記載は本プロジェクトとは一切関係ありません。</strong>バージョン番号、スクリーンショット、機能説明に虚偽の宣伝、誇張、バンドルインストール、悪意ある改ざんが含まれる可能性があり、開発者はその安全性について責任を負いかねます。',
      'disclaimer.item4': '<strong>詐欺にご注意ください。</strong>本プロジェクトはこれまでいかなる形でも課金、代理チャージ、アカウント販売、代理店募集を行ったことはありません。「Freewd 公式」を名乗って金銭を要求する行為はすべて偽物です。',
      'disclaimer.item5': '<strong>ご不明な点や偽チャネルを発見した場合</strong>は、QQ グループ <strong>1104207891</strong> までご連絡いただくか、GitHub リポジトリで Issue を作成してください。',

      'anniversary': '<strong>Freewd コミュニティ</strong> · 愛から生まれた',

      'footer.brand': 'Freewd コミュニティ',
      'footer.desc': 'Compose リファクタリング版 · オープンな交流<br>QQ グループ：1104207891',
      'footer.github': 'GitHub',
      'footer.download': 'ダウンロード',
      'footer.copyright': '2024-2026 Freewd Studio | BLOCKCARFT'
    },

    ko: {
      'meta.title': 'Freewd 커뮤니티 · Compose 리팩터링 버전',
      'meta.description': 'Freewd 커뮤니티 Compose 리팩터링 버전 — Jetpack Compose + Material 3로 전면 재작성. 단일 Activity 아키텍처, 순수 블랙 테마와 다국어 지원. BLOCKCARFT가 개인이 개발·운영합니다.',
      'og.title': 'Freewd 커뮤니티 · Compose 리팩터링 버전',
      'og.description': 'Jetpack Compose + Material 3로 재작성, 순수 블랙 테마와 다국어 지원. BLOCKCARFT가 개인이 개발·운영합니다.',

      'hero.title': 'Freewd 커뮤니티',
      'hero.iconAlt': 'Freewd 커뮤니티 아이콘',
      'hero.sub': '개인이 개발하고 운영하는 커뮤니티형 Android 앱으로, Jetpack Compose로 처음부터 완전히 새로 만들었습니다. 광고도, 거슬리는 팝업도 없는 깔끔하고 부드러운 경험.',
      'hero.note': 'Freewd는 2025년 8월 13일에 운영을 시작했으며, BLOCKCARFT(BCK)가 혼자 개발하고 유지보수합니다. 팀도, 투자도, 유료 마케팅도 없는 순수한 "애정으로 만드는" 개인 프로젝트입니다.',
      'hero.btn.features': '기능',
      'hero.btn.download': '다운로드',

      'features.title': '기능',
      'features.subtitle': 'Jetpack Compose + Material 3 기반, 더 현대적이고 더 부드럽게',
      'features.feed.title': '커뮤니티 피드',
      'features.feed.desc': '카드형 피드로, 당겨서 새로고침과 아래로 스크롤해 더 불러오기를 지원합니다. 이미지는 화면에 맞게 표시되며 지연 로딩과 메모리 재사용을 세심하게 다듬었습니다.',
      'features.drawer.title': '스와이프 내비게이션 드로어',
      'features.drawer.desc': '화면 가장자리를 스와이프해 메뉴를 열면 메인 화면이 부드럽게 이동합니다. 주요 앱의 드로어 인터랙션을 거의 그대로 재현했습니다.',
      'features.preview.title': '전체 화면 이미지 뷰어',
      'features.preview.desc': '피드 이미지를 탭하면 몰입형 전체 화면 미리보기로 전환됩니다. 더블 탭 확대, 핀치 줌, 드래그 이동을 지원하고 상태 표시줄과 내비게이션 바는 자동으로 숨겨집니다.',

      'version.title': '최신 버전 하이라이트',
      'version.p1': '<strong>v3.10.7</strong>이 GitHub에 공개되었습니다. <strong>순수 블랙 테마</strong>가 추가되어 OLED 화면에 완벽히 어울리며, Material You 다이내믹 컬러와 함께 부드럽고 전력 효율적입니다.',
      'version.p2': '<strong>중국어 간체, 중국어 번체(대만), 영어, 일본어, 한국어</strong>를 지원하며 본격적으로 글로벌 무대에 나섭니다.',

      'stack.title': '기술 스택',
      'stack.lang': '언어',
      'stack.ui': 'UI 프레임워크',
      'stack.arch': '아키텍처',
      'stack.min': '최소 버전',

      'notice.title': '베드락 서버 운영이 종료되었습니다',
      'notice.desc': 'Freewd의 Minecraft 베드락 서버가 공식적으로 종료되었습니다. 겨울 방학에 다시 열릴 예정입니다.',

      'disclaimer.title': '면책 조항',
      'disclaimer.subtitle': '공식 채널만 이용하시고 허위 정보에 주의하세요',
      'disclaimer.item1': '<strong>본 앱은 개인 비상업 프로젝트입니다.</strong> BLOCKCARFT(BCK)가 단독으로 개발·유지보수하며, 유료 콘텐츠, 충전 기능, 계정 거래 서비스는 일절 없습니다.',
      'disclaimer.item2': '<strong>유일한 공식 배포 채널은 GitHub Releases입니다</strong>: <a href="https://apk.freewd.top/apk/latest.apk" target="_blank" rel="noopener noreferrer">여기에서 다운로드</a>. 제3자 다운로드 사이트에서 APK를 받지 마세요.',
      'disclaimer.item3': '<strong>제3자 다운로드 사이트의 모든 설명은 본 프로젝트와 무관합니다.</strong> 일부 사이트의 버전 번호, 스크린샷, 기능 소개에는 허위 광고, 과장, 번들 설치, 악의적 변조가 포함될 수 있으며, 개발자는 그 안전성에 대해 책임지지 않습니다.',
      'disclaimer.item4': '<strong>사기에 주의하세요.</strong> 본 프로젝트는 어떤 형태로도 유료 결제, 대리 충전, 계정 판매, 총판 모집을 한 적이 없습니다. "Freewd 공식"이라는 이름으로 금전을 요구하는 행위는 모두 사칭입니다.',
      'disclaimer.item5': '<strong>문의 사항이 있거나 사칭 채널을 발견하셨다면</strong> QQ 그룹 <strong>1104207891</strong>로 연락하시거나 GitHub 저장소에 Issue를 남겨 주세요.',

      'anniversary': '<strong>Freewd 커뮤니티</strong> · 사랑으로 태어나다',

      'footer.brand': 'Freewd 커뮤니티',
      'footer.desc': 'Compose 리팩터링 버전 · 열린 소통<br>QQ 그룹: 1104207891',
      'footer.github': 'GitHub',
      'footer.download': '다운로드',
      'footer.copyright': '2024-2026 Freewd Studio | BLOCKCARFT'
    }
  };

  /* ============ 2. 语言元信息 ============ */
  var HTML_LANG = { 'zh': 'zh-CN', 'zh-TW': 'zh-Hant-TW', 'en': 'en', 'ja': 'ja', 'ko': 'ko' };
  var OG_LOCALE = { 'zh': 'zh_CN', 'zh-TW': 'zh_TW', 'en': 'en_US', 'ja': 'ja_JP', 'ko': 'ko_KR' };
  var DEFAULT_LANG = 'zh';
  var STORAGE_KEY = 'freewd-lang';

  var currentLang = DEFAULT_LANG;

  /* ============ 3. 语言识别 ============ */
  function normalizeLang(raw) {
    if (!raw) return null;
    var l = String(raw).toLowerCase().replace('_', '-');
    if (l.indexOf('zh') === 0) {
      return /(tw|hk|mo|hant)/.test(l) ? 'zh-TW' : 'zh';
    }
    if (l.indexOf('en') === 0) return 'en';
    if (l.indexOf('ja') === 0) return 'ja';
    if (l.indexOf('ko') === 0) return 'ko';
    return null;
  }

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function writeStored(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 隐私模式忽略 */ }
  }

  function detectLang() {
    // 1) URL ?lang=
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      var fromQuery = normalizeLang(q);
      if (fromQuery) return fromQuery;
    } catch (e) { /* 老浏览器忽略 */ }

    // 2) localStorage
    var stored = normalizeLang(readStored());
    if (stored) return stored;

    // 3) 浏览器语言
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (var i = 0; i < list.length; i++) {
      var hit = normalizeLang(list[i]);
      if (hit) return hit;
    }

    return DEFAULT_LANG;
  }

  /* ============ 4. 应用语言 ============ */
  function setMeta(attr, name, content) {
    if (content == null) return;
    var selector = 'meta[' + attr + '="' + name + '"]';
    var el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    var dict = I18N[lang];

    // 纯文本节点
    var textEls = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textEls.length; i++) {
      var key = textEls[i].getAttribute('data-i18n');
      if (dict[key] != null) textEls[i].textContent = dict[key];
    }

    // 含标签的节点（字符串由本文件硬编码，无用户输入）
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hkey = htmlEls[j].getAttribute('data-i18n-html');
      if (dict[hkey] != null) htmlEls[j].innerHTML = dict[hkey];
    }

    // alt 属性
    var altEls = document.querySelectorAll('[data-i18n-alt]');
    for (var a = 0; a < altEls.length; a++) {
      var akey = altEls[a].getAttribute('data-i18n-alt');
      if (dict[akey] != null) altEls[a].setAttribute('alt', dict[akey]);
    }

    // 文档标题与分享元信息
    if (dict['meta.title']) document.title = dict['meta.title'];
    setMeta('name', 'description', dict['meta.description']);
    setMeta('property', 'og:title', dict['og.title']);
    setMeta('property', 'og:description', dict['og.description']);
    setMeta('property', 'og:locale', OG_LOCALE[lang]);

    // <html lang>
    document.documentElement.setAttribute('lang', HTML_LANG[lang] || lang);

    // 切换器状态
    var btns = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < btns.length; k++) {
      var isActive = btns[k].getAttribute('data-lang') === lang;
      btns[k].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }

    currentLang = lang;
    writeStored(lang);
  }

  /* ============ 5. 初始化 ============ */
  function init() {
    // 绑定切换器
    var langBtns = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < langBtns.length; b++) {
      langBtns[b].addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang && lang !== currentLang) applyLang(lang);
      });
    }

    // 首次应用语言
    applyLang(detectLang());
  }

  /* ============ 6. 对外 API ============ */
  global.FreewdI18n = {
    setLang: applyLang,
    getLang: function () { return currentLang; },
    detect: detectLang,
    languages: Object.keys(I18N)
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);