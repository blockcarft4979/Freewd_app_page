/*!
 * agreement_i18n.js
 * Freewd 社区 / 社群 —— 用户协议与隐私政策 多语言渲染器
 *
 * 支持语言：zh-CN（简体中文）、zh-TW（繁體中文・台灣）、en（English）、ja（日本語）、ko（한국어）
 *
 */
(function (global) {
  'use strict';

  /* =========================================================================
   * 0. 常量
   * ========================================================================= */

  var DEFAULT_LOCALE = 'zh-CN';
  var STORAGE_KEY = 'freewd.agreement.locale';
  var SUPPORTED_LOCALES = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'];

  /* =========================================================================
   * 1. 文案数据
   *    块类型：h1 / h2 / h3 / p / hr / ul / ol / table / footer
   *    列表项：字符串，或 { x: 主文本, sub: [子项…] }
   *    表格：  { head: [...], rows: [[...], ...] }
   * ========================================================================= */

  var messages = {

    /* ---------------------------------------------------------------------
     * 简体中文
     * ------------------------------------------------------------------- */
    'zh-CN': {
      htmlLang: 'zh-CN',
      label: '简体中文',
      title: 'Freewd 社区 - 用户协议与隐私政策',
      description: 'Freewd 社区用户协议与隐私政策。Freewd 是由个人高中生开发的非营利公益交流社区，与 Mojang Studios 及微软无任何关联，不提供任何MC联机或模组下载功能。',
      blocks: [
        { t: 'h1', x: 'Freewd 社区用户协议' },
        { t: 'p', x: '<strong>最后更新日期：2026年10月05日</strong>' },

        { t: 'h2', x: '导言' },
        { t: 'p', x: '欢迎加入 Freewd 社区！' },
        { t: 'p', x: 'Freewd 社区（以下简称“本社区”或“我们”）是一个由个人（高中生）出于兴趣爱好运营的、《我的世界》玩家公益交流平台。本社区与 Mojang Studios 及微软公司无任何直接关联。' },
        { t: 'p', x: '本协议是您（以下称“用户”）与本社区运营者之间关于注册、使用本社区服务的法律约定。请您务必认真阅读、充分理解本协议各条款，特别是免除或限制责任的条款。<strong>一旦您完成注册或开始使用本服务，即视为您已阅读、理解并同意接受本协议的全部约束。</strong>' },
        { t: 'p', x: '如果您不同意本协议的任何内容，请立即停止注册或使用本社区。' },
        { t: 'hr' },

        { t: 'h2', x: '一、账户注册与安全' },
        {
          t: 'ol',
          items: [
            '<strong>信息真实性</strong>：您注册时需提供有效的电子邮箱地址和用户名，并保证所提供的信息真实、准确、完整。如信息发生变化，请及时更新。',
            '<strong>账户责任</strong>：您应妥善保管账户名及密码，不得将账户转让、出借或授权给他人使用。您对通过该账户进行的一切行为（包括发布内容、评论等）承担全部法律责任。如发现账户被盗用，请立即通过本协议末尾的联系方式通知我们。',
            {
              x: '<strong>年龄限制与监护人同意</strong>：',
              sub: [
                '您确认注册时已年满<strong>13周岁</strong>。',
                '<strong>若您未满18周岁</strong>，请在监护人的同意与指导下使用本服务，并由监护人承担相应责任。',
                '<strong>若您未满14周岁</strong>，我们仅在获得您监护人的<strong>明确同意</strong>后，方可为您提供完整的社区服务。请让您的监护人通过注册时登记的电子邮箱，向 blockcarft114@foxmail.com 发送一封标题为“【监护人同意】+您注册的用户名”的邮件，并在邮件正文中声明其已知悉并同意《用户协议》和《隐私政策》。我们将在收到并确认后激活您的发帖、评论等权限。<strong>在未收到确认前，您的账户将处于受限状态（仅可浏览）。</strong>'
              ]
            },
            '<strong>同意方式</strong>：在注册页面，您需主动勾选确认“我已阅读并同意《用户协议》与《隐私政策》”，方可完成注册。该主动勾选行为视为您已充分阅读、理解并同意本协议。'
          ]
        },

        { t: 'h2', x: '二、用户行为规范' },
        { t: 'p', x: '为了维护良好的社区环境，您承诺在使用本社区时不进行以下行为：' },
        {
          t: 'ol',
          items: [
            {
              x: '<strong>违法违规内容</strong>：发布、传播任何违反中华人民共和国法律法规（包括《网络安全法》《未成年人保护法》等）及公序良俗的内容，例如：',
              sub: [
                '煽动分裂国家、破坏民族团结、宣扬恐怖主义或极端主义；',
                '散布淫秽、色情、赌博、暴力、凶杀、恐怖或教唆犯罪的信息；',
                '侮辱、诽谤、歧视他人，侵害他人合法权益。'
              ]
            },
            '<strong>侵犯权益</strong>：未经他人许可，发布侵犯他人知识产权（如盗用《我的世界》模组、皮肤、建筑作品）、隐私权、名誉权等合法权益的内容。',
            {
              x: '<strong>恶意行为</strong>：',
              sub: [
                '传播病毒、木马、恶意软件或实施破坏网络安全的行为（如DDoS攻击、撞库等）；',
                '非法访问或干扰他人账户及社区系统；',
                '批量注册账户、发布垃圾信息或进行刷屏。'
              ]
            },
            '<strong>冒充与误导</strong>：冒充他人、机构或《我的世界》官方人员进行误导性行为。',
            '<strong>其他不当行为</strong>：利用本社区进行商业广告、传销、诈骗等非公益目的的活动。'
          ]
        },
        { t: 'p', x: '<strong>违规处理</strong>：如您违反上述规范，我们有权在不事先通知的情况下，采取删除内容、限制功能、封禁账户乃至永久禁止访问等措施。' },

        { t: 'h2', x: '三、内容权利与责任' },
        {
          t: 'ol',
          items: [
            '<strong>知识产权归属</strong>：您在本社区发布的原创内容（包括但不限于文字、图片、视频、建筑存档等），其著作权及其他知识产权仍归您本人所有。',
            '<strong>授权许可</strong>：为使本社区能够正常展示和传播您的内容，您授予本社区一项<strong>非独占的、可向为本社区提供基础技术设施（如CDN、图床等）的第三方进行必要转授权的、可在中华人民共和国（含港澳台）地域内行使的</strong>使用许可，许可范围仅限于<strong>在本社区平台内部</strong>进行存储、展示和以非商业方式推广本社区。当您主动删除内容或注销账户后，本许可自动终止，我们将在合理期限内（例如30天）彻底删除或匿名化相关内容，但技术备份可能保留至多90天。',
            '<strong>用户责任</strong>：您对自己发布的所有内容的合法性、真实性、准确性及不侵犯第三方权益承担全部法律责任。本社区仅为信息存储空间服务提供者，不对用户发布的内容进行事前审查，但在接到符合法定要求的侵权通知后，将依法采取删除、屏蔽等措施。',
            '<strong>侵权处理</strong>：如您认为您的作品被他人侵权，请通过下方联系邮箱提交权属证明及侵权链接，我们将在核实后于<strong>15个工作日内</strong>处理。'
          ]
        },

        { t: 'h2', x: '四、免责声明与责任限制' },
        {
          t: 'ol',
          items: [
            '<strong>服务“按现状”提供</strong>：本社区为免费公益项目，我们尽最大努力保障服务稳定，但不作任何明示或默示的保证，包括但不限于服务不间断、无错误、安全可靠。',
            '<strong>不可抗力与第三方原因</strong>：因自然灾害、政策调整、网络攻击、运营商故障等不可抗力或第三方原因导致服务中断、数据丢失，我们不承担法律责任。',
            '<strong>损失范围</strong>：在适用法律允许的最大范围内，我们不对任何间接损失（如数据丢失、利润损失、机会损失）承担责任。<strong>但本免责声明不适用于因我们的故意或重大过失造成的损害。</strong>',
            '<strong>用户内容风险</strong>：用户之间的线下交易、私下约定或观点纠纷，与本社区无关，请自行谨慎判断。'
          ]
        },

        { t: 'h2', x: '五、隐私保护' },
        { t: 'p', x: '我们将按照《Freewd 社区隐私政策》（作为本协议不可分割的一部分）处理您的个人信息。请务必阅读并理解该政策。' },

        { t: 'h2', x: '六、服务变更与终止' },
        {
          t: 'ol',
          items: [
            '<strong>变更权利</strong>：我们有权根据运营需要（如服务器成本、技术迭代）调整或暂停部分服务，会尽可能提前通过社区公告通知。',
            '<strong>终止服务</strong>：如果用户严重违反本协议，我们有权立即暂停或终止其账户，并删除其发布的内容。用户也可自行注销账户。',
            '<strong>公益项目声明</strong>：本社区为个人公益项目，运营者保留在无力继续维护时<strong>完全关闭社区</strong>的权利，届时会提前30天公告并允许用户备份数据。'
          ]
        },

        { t: 'h2', x: '七、协议更新' },
        { t: 'p', x: '我们可能根据法律法规或社区运营需要更新本协议。更新后的协议将在此页面公布，并注明新的“最后更新日期”。如涉及重大变更（如数据出境规则调整），我们将通过邮箱或站内信通知您。<strong>继续使用服务即视为接受更新内容。</strong>' },

        { t: 'h2', x: '八、法律适用与争议解决' },
        {
          t: 'ol',
          items: [
            '<strong>适用法律</strong>：本协议的订立、解释、履行及争议解决均适用<strong>中华人民共和国大陆地区法律</strong>。',
            '<strong>争议解决</strong>：因本协议产生的任何争议，双方应首先友好协商解决；协商不成的，任何一方均有权将争议提交至<strong>运营者住所地</strong>有管辖权的人民法院诉讼解决。鉴于本社区为个人非商业公益项目，双方同意优先通过友好协商解决，尽量避免诉讼。',
            '<strong>条款效力</strong>：若本协议任何条款被认定为无效或不可执行，不影响其余条款的效力。'
          ]
        },

        { t: 'h2', x: '九、联系我们' },
        { t: 'p', x: '如您对本协议有任何疑问、建议或需要投诉举报，请通过以下方式联系：' },
        { t: 'p', x: '<strong>电子邮箱</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '（运营者为一名高中生，可能无法立即回复，但会在3个工作日内响应）' },

        { t: 'hr' },

        { t: 'h2', cls: 'doc-title', x: 'Freewd 社区隐私政策' },
        { t: 'p', x: '<strong>最后更新日期：2026年10月05日</strong>' },
        { t: 'p', x: 'Freewd 社区（以下简称“本社区”或“我们”）非常重视您的个人信息与隐私保护。本政策将说明我们在您使用社区服务过程中，如何收集、使用、存储和保护您的个人信息。本政策依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》以及《未成年人保护法》制定。' },
        { t: 'p', x: '<strong>请您仔细阅读本政策。</strong> 如果您不同意本政策的任何内容，请立即停止使用本社区服务。' },

        { t: 'hr' },

        { t: 'h2', x: '一、我们收集的信息' },
        { t: 'p', x: '在您使用本社区服务时，我们仅收集为实现<strong>公益交流平台基本功能</strong>所必需的信息，分为“您主动提供”和“我们自动收集”两类。' },

        { t: 'h3', x: '（一）您主动提供的信息' },
        {
          t: 'table',
          head: ['信息类型', '收集目的'],
          rows: [
            ['用户名', '在社区中展示您的身份，用于发帖、评论的署名。'],
            ['邮箱地址', '用于账户注册、登录验证、找回密码、接收重要系统通知（如协议更新）。'],
            ['发帖内容（包括帖子、回复、私信）', '用于社区内容展示、交流互动。']
          ]
        },

        { t: 'h3', x: '（二）我们自动收集的信息' },
        { t: 'p', x: '当您访问或使用本社区时，服务器日志会自动记录以下技术信息：' },
        {
          t: 'table',
          head: ['信息类型', '收集目的'],
          rows: [
            ['IP地址', '用于区分不同用户、防范恶意攻击（如DDoS）、生成匿名访问统计。'],
            ['浏览器类型及版本', '用于优化页面兼容性，提升您的访问体验。'],
            ['操作系统', '同浏览器类型，用于技术适配。'],
            ['访问时间及点击流', '用于分析社区热门内容，改善服务。']
          ]
        },

        { t: 'h2', x: '二、我们如何使用这些信息' },
        { t: 'p', x: '我们仅在实现上述目的所必需的范围内使用您的信息，具体如下：' },
        {
          t: 'table',
          head: ['信息', '使用方式'],
          rows: [
            ['用户名', '展示身份，搜索用户。'],
            ['邮箱地址', '发送验证邮件、找回密码、发送系统公告。'],
            ['发帖内容', '在社区内公开展示，供其他用户浏览、回复。'],
            ['IP地址、日志信息', '分析安全风险、统计访问量、排查技术故障。']
          ]
        },
        { t: 'p', x: '<strong>我们不会将您的信息用于任何商业目的</strong>（例如广告投放、数据出售、用户画像盈利等）。' },

        { t: 'h2', x: '三、信息的存储与保护' },
        { t: 'h3', x: '（一）存储位置' },
        { t: 'p', x: '<strong>本社区的全部服务器位于中华人民共和国香港特别行政区。</strong> 这意味着您在注册和使用本服务时提供的个人信息（包括用户名、邮箱、发帖内容、IP地址等）将被传输并存储于香港。' },
        { t: 'h3', x: '（二）存储期限' },
        {
          t: 'ul',
          items: [
            '您的账户信息将一直保存，直至您主动注销账户或要求删除。',
            '您发布的公开内容（帖子、回复）原则上永久保存，除非您主动删除或违反协议被删除。',
            '<strong>站内通知数据</strong>在您账户存续期间保留，用于展示互动与系统消息；当您主动注销账户时，站内通知数据将同步物理删除。',
            '技术日志（IP地址、访问记录）保存<strong>不超过180天</strong>，用于安全分析和统计后自动匿名化处理。'
          ]
        },
        { t: 'h3', x: '（三）安全措施' },
        { t: 'p', x: '我们采取以下措施保护您的信息安全：' },
        {
          t: 'ul',
          items: [
            '<strong>加密传输</strong>：全站启用HTTPS协议，防止数据在传输中被窃听。',
            '<strong>密码保护</strong>：您的账户密码不以明文形式存储，而是经过安全哈希（如bcrypt）处理后保存。',
            '<strong>访问控制</strong>：仅运营者本人可访问服务器后台，且通过强密码和双重验证保护。',
            '<strong>定期备份</strong>：每天自动备份数据库，备份文件加密存储于独立位置。'
          ]
        },
        { t: 'p', x: '<strong>尽管如此，请您理解：互联网环境并非绝对安全。我们无法承诺100%的数据安全，但会尽全力保护。</strong>' },

        { t: 'h2', x: '四、第三方服务说明' },
        { t: 'p', x: '为保障社区稳定运行，我们使用了以下第三方基础服务。这些服务仅用于技术目的，不会主动获取您的个人信息用于其他用途。' },
        {
          t: 'table',
          head: ['服务类型', '提供商', '可能接触的信息', '用途'],
          rows: [
            ['CDN及安全防护', 'Cloudflare', 'IP地址、请求时间、访问域名', '加速内容分发，防御DDoS攻击'],
            ['图床服务', 'Telegram', '图片文件及访问元数据', '存储用户上传的图片，用于社区展示']
          ]
        },
        { t: 'p', x: '我们不会向任何其他第三方出售、出租或共享您的个人信息，除非得到您的单独同意或法律强制要求（如公安机关依法调取）。' },

        { t: 'h2', x: '五、个人信息跨境传输的特别提示与承诺' },
        { t: 'p', x: '如前所述，本社区的服务器位于<strong>中国香港</strong>。根据《中华人民共和国个人信息保护法》，向香港特别行政区提供个人信息构成<strong>数据出境</strong>。' },
        {
          t: 'ol',
          items: [
            '<strong>明确告知</strong>：您明确知晓并同意，为维持本社区作为个人公益项目的运营，您的个人信息将被传输至位于<strong>中华人民共和国香港特别行政区</strong>的服务器进行存储和处理。同时，您发布内容中附带的图片文件，将通过 Cloudflare Worker 传输至 Telegram 服务器进行存储。',
            '<strong>合规承诺</strong>：作为运营者，本人承诺按照《中华人民共和国个人信息保护法》及相关规定，为您的个人信息提供与内地同等标准的保护。本人正积极学习和准备，并将在法律要求的时点前，尽力完成向国家网信部门进行个人信息保护影响报告的报送或满足其他适用的合规条件。',
            '<strong>风险自担</strong>：如果您对当前数据出境的安全保障存在疑虑，请您<strong>不要注册或使用本社区</strong>。您继续使用，即表示您已充分理解此风险并自愿承担可能的不利后果。',
            '<strong>境外接收方</strong>：数据接收方为运营者本人（一名中国大陆高中生），其联系方式见本政策末尾。'
          ]
        },

        { t: 'h2', x: '六、您的权利' },
        { t: 'p', x: '根据相关法律法规，您对自己的个人信息享有以下权利。您可以通过本政策末尾的邮箱联系我们行使这些权利，我们将在<strong>15个工作日内</strong>回复。' },
        {
          t: 'ol',
          items: [
            '<strong>查询</strong>：要求告知我们是否保存您的个人信息，以及保存了哪些信息。',
            '<strong>更正</strong>：如发现信息有误（如邮箱拼写错误），您可以要求更正。',
            '<strong>删除</strong>：您可以要求删除您的账户及所有相关数据。删除后，我们将在技术上可行的范围内<strong>彻底清除</strong>您的发帖内容。对于因系统架构、安全备份等原因无法立刻彻底删除的内容，我们将立即进行<strong>不可逆的匿名化处理</strong>，使其无法关联至您的身份（但请注意，已公开发布的帖子可能被他人截图或转载，我们无法控制）。',
            '<strong>注销账户</strong>：您可随时发送邮件申请注销账户，无需任何理由。',
            '<strong>撤回同意</strong>：您可以通过停止使用本社区并注销账户的方式，撤回对本政策的同意。'
          ]
        },

        { t: 'h2', x: '七、未成年人保护' },
        { t: 'p', x: '我们非常重视未成年人的个人信息保护。' },
        {
          t: 'ul',
          items: [
            '<strong>一般原则</strong>：如果您未满18周岁，请在监护人的同意与指导下使用本服务。',
            '<strong>14周岁以下儿童</strong>：如果您未满14周岁，请务必让您的监护人阅读本政策，并按照《用户协议》第一条第三款的要求，通过监护人邮箱发送声明以取得<strong>明确的书面同意</strong>。在收到并确认该同意前，我们不会收集您的任何超出基本浏览所需的信息，也不会为您提供发帖、评论等交互功能。',
            '<strong>监护人权利</strong>：如您是监护人，发现我们未经您同意收集了您监护下的儿童的个人信息，请立即联系我们删除。'
          ]
        },

        { t: 'h2', x: '八、政策更新' },
        { t: 'p', x: '我们可能根据法律法规或运营需要更新本隐私政策。更新后的政策将在此页面公布，并更新“最后更新日期”。如涉及重大变更（例如改变数据存储位置、增加第三方共享），我们将通过邮箱或站内信通知您。' },

        { t: 'h2', x: '九、联系我们' },
        { t: 'p', x: '如您对本隐私政策有任何疑问、需要行使个人信息权利或进行投诉举报，请联系：' },
        { t: 'p', x: '<strong>电子邮箱</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '<strong>响应时间</strong>：我们会在3个工作日内确认收到，并在15个工作日内给出实质性答复。' },

        { t: 'hr' },

        {
          t: 'footer',
          items: [
            '<strong>Freewd Studio</strong><br>',
            '© 2025-2026 Freewd 社区 | 保留部分权利'
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------------
     * 繁體中文（台灣）
     * ------------------------------------------------------------------- */
    'zh-TW': {
      htmlLang: 'zh-Hant-TW',
      label: '繁體中文',
      title: 'Freewd 社群 - 使用者協議與隱私權政策',
      description: 'Freewd 社群使用者協議與隱私權政策。Freewd 是由個人高中生經營的非營利公益交流社群，與 Mojang Studios 及微軟無任何關聯，不提供任何 Minecraft 連線或模組下載功能。',
      blocks: [
        { t: 'h1', x: 'Freewd 社群使用者協議' },
        { t: 'p', x: '<strong>最後更新日期：2026年10月05日</strong>' },

        { t: 'h2', x: '前言' },
        { t: 'p', x: '歡迎加入 Freewd 社群！' },
        { t: 'p', x: 'Freewd 社群（以下簡稱「本社群」或「我們」）是由個人（高中生）基於興趣經營的、《Minecraft》玩家公益交流平台。本社群與 Mojang Studios 及微軟公司無任何直接關聯。' },
        { t: 'p', x: '本協議是您（以下稱「使用者」）與本社群經營者之間，關於註冊與使用本社群服務的法律約定。請您務必仔細閱讀、充分理解本協議各條款，特別是免除或限制責任的條款。<strong>一旦您完成註冊或開始使用本服務，即視為您已閱讀、理解並同意接受本協議之全部約束。</strong>' },
        { t: 'p', x: '若您不同意本協議之任何內容，請立即停止註冊或使用本社群。' },
        { t: 'hr' },

        { t: 'h2', x: '一、帳號註冊與安全' },
        {
          t: 'ol',
          items: [
            '<strong>資訊真實性</strong>：您註冊時需提供有效的電子郵件地址與使用者名稱，並保證所提供之資訊真實、準確、完整。若資訊有所變更，請及時更新。',
            '<strong>帳號責任</strong>：您應妥善保管帳號名稱及密碼，不得將帳號轉讓、出借或授權他人使用。您對透過該帳號所進行之一切行為（包括發布內容、留言等）承擔全部法律責任。若發現帳號遭盜用，請立即透過本協議末尾的聯絡方式通知我們。',
            {
              x: '<strong>年齡限制與監護人同意</strong>：',
              sub: [
                '您確認註冊時已年滿<strong>13 歲</strong>。',
                '<strong>若您未滿 18 歲</strong>，請在監護人的同意與指導下使用本服務，並由監護人承擔相應責任。',
                '<strong>若您未滿 14 歲</strong>，我們僅在取得您監護人的<strong>明確同意</strong>後，方得為您提供完整的社群服務。請您的監護人以註冊時登記的電子郵件信箱，向 blockcarft114@foxmail.com 寄送一封主旨為「【監護人同意】+ 您註冊的使用者名稱」的郵件，並於郵件本文中聲明其已知悉並同意《使用者協議》與《隱私權政策》。我們將於收到並確認後開通您的發文、留言等權限。<strong>在收到確認前，您的帳號將處於受限狀態（僅可瀏覽）。</strong>'
              ]
            },
            '<strong>同意方式</strong>：於註冊頁面，您需主動勾選確認「我已閱讀並同意《使用者協議》與《隱私權政策》」，方可完成註冊。該主動勾選行為視為您已充分閱讀、理解並同意本協議。'
          ]
        },

        { t: 'h2', x: '二、使用者行為規範' },
        { t: 'p', x: '為維護良好的社群環境，您承諾於使用本社群時不進行以下行為：' },
        {
          t: 'ol',
          items: [
            {
              x: '<strong>違法違規內容</strong>：發布、傳播任何違反中華人民共和國法令規章（包括《網路安全法》《未成年人保護法》等）及公序良俗之內容，例如：',
              sub: [
                '煽動分裂國家、破壞民族團結、宣揚恐怖主義或極端主義；',
                '散布猥褻、色情、賭博、暴力、凶殺、恐怖或教唆犯罪之資訊；',
                '侮辱、誹謗、歧視他人，侵害他人合法權益。'
              ]
            },
            '<strong>侵害權益</strong>：未經他人許可，發布侵害他人智慧財產權（如盜用《Minecraft》模組、外觀造型、建築作品）、隱私權、名譽權等合法權益之內容。',
            {
              x: '<strong>惡意行為</strong>：',
              sub: [
                '傳播病毒、木馬、惡意軟體，或實施破壞網路安全之行為（如 DDoS 攻擊、撞庫等）；',
                '非法存取或干擾他人帳號及社群系統；',
                '大量註冊帳號、發布垃圾訊息或洗版。'
              ]
            },
            '<strong>冒充與誤導</strong>：冒充他人、機構或《Minecraft》官方人員，進行誤導性行為。',
            '<strong>其他不當行為</strong>：利用本社群進行商業廣告、多層次傳銷、詐騙等非公益目的之活動。'
          ]
        },
        { t: 'p', x: '<strong>違規處理</strong>：若您違反上述規範，我們有權在未事先通知的情況下，採取刪除內容、限制功能、停權帳號乃至永久禁止存取等措施。' },

        { t: 'h2', x: '三、內容權利與責任' },
        {
          t: 'ol',
          items: [
            '<strong>智慧財產權歸屬</strong>：您於本社群發布之原創內容（包括但不限於文字、圖片、影片、建築存檔等），其著作權及其他智慧財產權仍歸您本人所有。',
            '<strong>授權許可</strong>：為使本社群能正常展示及傳播您的內容，您授予本社群一項<strong>非專屬、得向為本社群提供基礎技術設施（如 CDN、圖床等）之第三方為必要再授權、並得於中華人民共和國（含港澳台）地域內行使的</strong>使用許可，許可範圍僅限於<strong>在本社群平台內部</strong>進行儲存、展示，以及以非商業方式推廣本社群。當您主動刪除內容或註銷帳號後，本許可自動終止，我們將於合理期限內（例如 30 天）徹底刪除或匿名化相關內容，但技術備份可能保留至多 90 天。',
            '<strong>使用者責任</strong>：您對自己發布之所有內容的合法性、真實性、準確性及不侵害第三方權益承擔全部法律責任。本社群僅為資訊儲存空間服務提供者，不對使用者發布之內容進行事前審查，但於接獲符合法定要求之侵權通知後，將依法採取刪除、遮蔽等措施。',
            '<strong>侵權處理</strong>：若您認為您的作品遭他人侵害，請透過下方聯絡信箱提交權屬證明及侵權連結，我們將於查證後於<strong>15 個工作天內</strong>處理。'
          ]
        },

        { t: 'h2', x: '四、免責聲明與責任限制' },
        {
          t: 'ol',
          items: [
            '<strong>服務「按現狀」提供</strong>：本社群為免費公益專案，我們盡最大努力保障服務穩定，但不作任何明示或默示之保證，包括但不限於服務不中斷、無錯誤、安全可靠。',
            '<strong>不可抗力與第三方因素</strong>：因天然災害、政策調整、網路攻擊、電信業者故障等不可抗力或第三方因素導致服務中斷、資料遺失，我們不承擔法律責任。',
            '<strong>損失範圍</strong>：於適用法律允許之最大範圍內，我們不對任何間接損失（如資料遺失、利潤損失、機會損失）負責。<strong>惟本免責聲明不適用於因我們的故意或重大過失所造成之損害。</strong>',
            '<strong>使用者內容風險</strong>：使用者之間的線下交易、私下約定或觀點糾紛，與本社群無關，請自行審慎判斷。'
          ]
        },

        { t: 'h2', x: '五、隱私保護' },
        { t: 'p', x: '我們將依《Freewd 社群隱私權政策》（作為本協議不可分割之一部分）處理您的個人資料。請務必閱讀並理解該政策。' },

        { t: 'h2', x: '六、服務變更與終止' },
        {
          t: 'ol',
          items: [
            '<strong>變更權利</strong>：我們有權依營運需要（如伺服器成本、技術迭代）調整或暫停部分服務，並將儘可能提前透過社群公告通知。',
            '<strong>終止服務</strong>：若使用者嚴重違反本協議，我們有權立即暫停或終止其帳號，並刪除其發布之內容。使用者亦可自行註銷帳號。',
            '<strong>公益專案聲明</strong>：本社群為個人公益專案，經營者保留於無力繼續維護時<strong>完全關閉社群</strong>之權利，屆時將提前 30 天公告並允許使用者備份資料。'
          ]
        },

        { t: 'h2', x: '七、協議更新' },
        { t: 'p', x: '我們可能依法律法規或社群營運需要更新本協議。更新後之協議將於本頁面公布，並註明新的「最後更新日期」。若涉及重大變更（如資料跨境規則調整），我們將透過電子郵件或站內訊息通知您。<strong>繼續使用服務即視為接受更新內容。</strong>' },

        { t: 'h2', x: '八、準據法與爭議解決' },
        {
          t: 'ol',
          items: [
            '<strong>準據法</strong>：本協議之訂立、解釋、履行及爭議解決，均適用<strong>中華人民共和國大陸地區法律</strong>。',
            '<strong>爭議解決</strong>：因本協議產生之任何爭議，雙方應先友好協商解決；協商不成時，任何一方均有權將爭議提交至<strong>經營者住所地</strong>有管轄權之人民法院以訴訟解決。鑑於本社群為個人非商業公益專案，雙方同意優先透過友好協商解決，儘量避免訴訟。',
            '<strong>條款效力</strong>：若本協議任何條款被認定為無效或不可執行，不影響其餘條款之效力。'
          ]
        },

        { t: 'h2', x: '九、聯絡我們' },
        { t: 'p', x: '若您對本協議有任何疑問、建議或需要投訴檢舉，請透過以下方式聯絡：' },
        { t: 'p', x: '<strong>電子郵件</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '（經營者為一名高中生，可能無法立即回覆，但會在 3 個工作天內回應）' },

        { t: 'hr' },

        { t: 'h2', cls: 'doc-title', x: 'Freewd 社群隱私權政策' },
        { t: 'p', x: '<strong>最後更新日期：2026年10月05日</strong>' },
        { t: 'p', x: 'Freewd 社群（以下簡稱「本社群」或「我們」）非常重視您的個人資料與隱私保護。本政策將說明我們於您使用社群服務過程中，如何蒐集、使用、儲存及保護您的個人資料。本政策係依《中華人民共和國個人資訊保護法》《中華人民共和國網路安全法》以及《未成年人保護法》訂定。' },
        { t: 'p', x: '<strong>請您仔細閱讀本政策。</strong>若您不同意本政策之任何內容，請立即停止使用本社群服務。' },

        { t: 'hr' },

        { t: 'h2', x: '一、我們蒐集的資訊' },
        { t: 'p', x: '於您使用本社群服務時，我們僅蒐集為實現<strong>公益交流平台基本功能</strong>所必需之資訊，分為「您主動提供」與「我們自動蒐集」兩類。' },

        { t: 'h3', x: '（一）您主動提供的資訊' },
        {
          t: 'table',
          head: ['資訊類型', '蒐集目的'],
          rows: [
            ['使用者名稱', '於社群中顯示您的身分，用於發文、留言之署名。'],
            ['電子郵件地址', '用於帳號註冊、登入驗證、找回密碼、接收重要系統通知（如協議更新）。'],
            ['發文內容（包括貼文、回覆、私訊）', '用於社群內容展示與交流互動。']
          ]
        },

        { t: 'h3', x: '（二）我們自動蒐集的資訊' },
        { t: 'p', x: '當您造訪或使用本社群時，伺服器日誌會自動記錄以下技術資訊：' },
        {
          t: 'table',
          head: ['資訊類型', '蒐集目的'],
          rows: [
            ['IP 位址', '用於區分不同使用者、防範惡意攻擊（如 DDoS）、產生匿名造訪統計。'],
            ['瀏覽器類型及版本', '用於最佳化頁面相容性，提升您的造訪體驗。'],
            ['作業系統', '同瀏覽器類型，用於技術適配。'],
            ['造訪時間及點擊流', '用於分析社群熱門內容，改善服務。']
          ]
        },

        { t: 'h2', x: '二、我們如何使用這些資訊' },
        { t: 'p', x: '我們僅於實現上述目的所必要之範圍內使用您的資訊，具體如下：' },
        {
          t: 'table',
          head: ['資訊', '使用方式'],
          rows: [
            ['使用者名稱', '顯示身分、搜尋使用者。'],
            ['電子郵件地址', '寄送驗證郵件、找回密碼、寄送系統公告。'],
            ['發文內容', '於社群內公開展示，供其他使用者瀏覽、回覆。'],
            ['IP 位址、日誌資訊', '分析安全風險、統計造訪量、排查技術故障。']
          ]
        },
        { t: 'p', x: '<strong>我們不會將您的資訊用於任何商業目的</strong>（例如廣告投放、資料出售、使用者輪廓獲利等）。' },

        { t: 'h2', x: '三、資訊的儲存與保護' },
        { t: 'h3', x: '（一）儲存位置' },
        { t: 'p', x: '<strong>本社群的全部伺服器位於中華人民共和國香港特別行政區。</strong>這表示您於註冊及使用本服務時提供之個人資料（包括使用者名稱、電子郵件、發文內容、IP 位址等）將被傳輸並儲存於香港。' },
        { t: 'h3', x: '（二）儲存期限' },
        {
          t: 'ul',
          items: [
            '您的帳號資訊將一直保存，直至您主動註銷帳號或要求刪除。',
            '您發布之公開內容（貼文、回覆）原則上永久保存，除非您主動刪除或違反協議而遭刪除。',
            '<strong>站內通知資料</strong>於您帳號存續期間保留，用於顯示互動與系統訊息；當您主動註銷帳號時，站內通知資料將同步實體刪除。',
            '技術日誌（IP 位址、造訪紀錄）保存<strong>不超過 180 天</strong>，用於安全分析與統計後自動匿名化處理。'
          ]
        },
        { t: 'h3', x: '（三）安全措施' },
        { t: 'p', x: '我們採取以下措施保護您的資訊安全：' },
        {
          t: 'ul',
          items: [
            '<strong>加密傳輸</strong>：全站啟用 HTTPS 協定，防止資料於傳輸過程中被竊聽。',
            '<strong>密碼保護</strong>：您的帳號密碼不以明文形式儲存，而是經安全雜湊（如 bcrypt）處理後保存。',
            '<strong>存取控制</strong>：僅經營者本人可存取伺服器後台，並以強密碼與雙重驗證保護。',
            '<strong>定期備份</strong>：每日自動備份資料庫，備份檔案加密儲存於獨立位置。'
          ]
        },
        { t: 'p', x: '<strong>儘管如此，請您理解：網際網路環境並非絕對安全。我們無法承諾 100% 的資料安全，但會盡全力保護。</strong>' },

        { t: 'h2', x: '四、第三方服務說明' },
        { t: 'p', x: '為保障社群穩定運作，我們使用以下第三方基礎服務。這些服務僅用於技術目的，不會主動取得您的個人資料用於其他用途。' },
        {
          t: 'table',
          head: ['服務類型', '提供商', '可能接觸的資訊', '用途'],
          rows: [
            ['CDN 及安全防護', 'Cloudflare', 'IP 位址、請求時間、造訪網域', '加速內容傳遞，防禦 DDoS 攻擊'],
            ['圖床服務', 'Telegram', '圖片檔案及存取中繼資料', '儲存使用者上傳之圖片，用於社群展示']
          ]
        },
        { t: 'p', x: '我們不會向任何其他第三方出售、出租或分享您的個人資料，除非取得您的個別同意或法律強制要求（如司法機關依法調取）。' },

        { t: 'h2', x: '五、個人資料跨境傳輸的特別提示與承諾' },
        { t: 'p', x: '如前所述，本社群之伺服器位於<strong>中國香港</strong>。依《中華人民共和國個人資訊保護法》，向香港特別行政區提供個人資料構成<strong>資料出境</strong>。' },
        {
          t: 'ol',
          items: [
            '<strong>明確告知</strong>：您明確知悉並同意，為維持本社群作為個人公益專案之營運，您的個人資料將被傳輸至位於<strong>中華人民共和國香港特別行政區</strong>之伺服器進行儲存與處理。同時，您發布內容中所附之圖片檔案，將透過 Cloudflare Worker 傳輸至 Telegram 伺服器儲存。',
            '<strong>合規承諾</strong>：作為經營者，本人承諾依《中華人民共和國個人資訊保護法》及相關規定，為您的個人資料提供與內地同等標準之保護。本人正積極學習與準備，並將於法律要求之時點前，盡力完成向國家網信部門進行個人資訊保護影響報告之報送，或滿足其他適用之合規條件。',
            '<strong>風險自擔</strong>：若您對目前資料出境之安全保障存有疑慮，請您<strong>不要註冊或使用本社群</strong>。您繼續使用，即表示您已充分理解此風險並自願承擔可能之不利後果。',
            '<strong>境外接收方</strong>：資料接收方為經營者本人（一名中國大陸高中生），其聯絡方式見本政策末尾。'
          ]
        },

        { t: 'h2', x: '六、您的權利' },
        { t: 'p', x: '依相關法律法規，您對自己的個人資料享有以下權利。您可透過本政策末尾之信箱聯絡我們行使這些權利，我們將於<strong>15 個工作天內</strong>回覆。' },
        {
          t: 'ol',
          items: [
            '<strong>查詢</strong>：要求告知我們是否保存您的個人資料，以及保存了哪些資料。',
            '<strong>更正</strong>：若發現資料有誤（如電子郵件拼寫錯誤），您可要求更正。',
            '<strong>刪除</strong>：您可要求刪除您的帳號及所有相關資料。刪除後，我們將於技術可行之範圍內<strong>徹底清除</strong>您的發文內容。對於因系統架構、安全備份等因素無法立即徹底刪除之內容，我們將立即進行<strong>不可逆的匿名化處理</strong>，使其無法關聯至您的身分（但請注意，已公開發布之貼文可能遭他人截圖或轉載，我們無法控制）。',
            '<strong>註銷帳號</strong>：您可隨時寄送郵件申請註銷帳號，無需任何理由。',
            '<strong>撤回同意</strong>：您可透過停止使用本社群並註銷帳號之方式，撤回對本政策之同意。'
          ]
        },

        { t: 'h2', x: '七、未成年人保護' },
        { t: 'p', x: '我們非常重視未成年人之個人資料保護。' },
        {
          t: 'ul',
          items: [
            '<strong>一般原則</strong>：若您未滿 18 歲，請在監護人的同意與指導下使用本服務。',
            '<strong>14 歲以下兒童</strong>：若您未滿 14 歲，請務必讓您的監護人閱讀本政策，並依《使用者協議》第一條第三款之要求，透過監護人信箱寄送聲明以取得<strong>明確的書面同意</strong>。於收到並確認該同意前，我們不會蒐集您任何超出基本瀏覽所需之資訊，亦不會為您提供發文、留言等互動功能。',
            '<strong>監護人權利</strong>：若您是監護人，發現我們未經您同意蒐集了您監護下兒童之個人資料，請立即聯絡我們刪除。'
          ]
        },

        { t: 'h2', x: '八、政策更新' },
        { t: 'p', x: '我們可能依法律法規或營運需要更新本隱私權政策。更新後之政策將於本頁面公布，並更新「最後更新日期」。若涉及重大變更（例如變更資料儲存位置、增加第三方分享），我們將透過電子郵件或站內訊息通知您。' },

        { t: 'h2', x: '九、聯絡我們' },
        { t: 'p', x: '若您對本隱私權政策有任何疑問、需行使個人資料權利或進行投訴檢舉，請聯絡：' },
        { t: 'p', x: '<strong>電子郵件</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '<strong>回應時間</strong>：我們會在 3 個工作天內確認收到，並於 15 個工作天內提供實質性答覆。' },

        { t: 'hr' },

        {
          t: 'footer',
          items: [
            '<strong>Freewd Studio<br>',
            '© 2025-2026 Freewd 社群 | 保留部分權利'
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------------
     * English
     * ------------------------------------------------------------------- */
    'en': {
      htmlLang: 'en',
      label: 'English',
      title: 'Freewd Community — User Agreement and Privacy Policy',
      description: 'Freewd Community User Agreement and Privacy Policy. Freewd is a non-profit community run by an individual high-school student. It is not affiliated with Mojang Studios or Microsoft and offers no Minecraft multiplayer or mod-download services.',
      blocks: [
        { t: 'h1', x: 'Freewd Community User Agreement' },
        { t: 'p', x: '<strong>Last updated: October 5, 2026</strong>' },

        { t: 'h2', x: 'Introduction' },
        { t: 'p', x: 'Welcome to Freewd Community!' },
        { t: 'p', x: 'Freewd Community (the “Community” or “we”) is a non-profit, community-interest forum for Minecraft players, run by an individual — a high-school student — purely as a hobby. The Community has no affiliation whatsoever with Mojang Studios or Microsoft Corporation.' },
        { t: 'p', x: 'This Agreement is a legal contract between you (the “User”) and the operator of the Community regarding registration for and use of the Community’s services. Please read every clause carefully and make sure you understand it, especially those concerning disclaimers and limitations of liability. <strong>By completing registration or by beginning to use the service, you are deemed to have read, understood and accepted all of the terms of this Agreement.</strong>' },
        { t: 'p', x: 'If you do not agree with any part of this Agreement, please stop registering for or using the Community immediately.' },
        { t: 'hr' },

        { t: 'h2', x: '1. Account Registration and Security' },
        {
          t: 'ol',
          items: [
            '<strong>Accuracy of information.</strong> When registering, you must provide a valid email address and a username, and you warrant that the information you provide is true, accurate and complete. If any of it changes, please update it promptly.',
            '<strong>Account responsibility.</strong> You must keep your username and password safe, and you may not transfer, lend or authorise anyone else to use your account. You bear full legal responsibility for all activity carried out through your account, including posting content and leaving comments. If you discover that your account has been misused, please notify us immediately using the contact details at the end of this Agreement.',
            {
              x: '<strong>Age limits and guardian consent.</strong>',
              sub: [
                'You confirm that you are at least <strong>13 years old</strong> at the time of registration.',
                '<strong>If you are under 18</strong>, please use the service only with the consent and guidance of your parent or guardian, who will bear the corresponding responsibility.',
                '<strong>If you are under 14</strong>, we will only provide the full range of community services after obtaining the <strong>explicit consent</strong> of your parent or guardian. Please ask your guardian to send an email from the address registered to your account to blockcarft114@foxmail.com, with the subject “【Guardian Consent】+ your username”, stating in the body that they have read and agree to the User Agreement and the Privacy Policy. We will enable your posting and commenting permissions once we have received and verified this. <strong>Until that confirmation is received, your account will be restricted to read-only browsing.</strong>'
              ]
            },
            '<strong>How to agree.</strong> On the registration page you must actively tick the box confirming “I have read and agree to the User Agreement and the Privacy Policy” before you can complete registration. That act of ticking is deemed to mean that you have fully read, understood and agreed to this Agreement.'
          ]
        },

        { t: 'h2', x: '2. User Conduct Rules' },
        { t: 'p', x: 'To keep the Community a pleasant place, you agree that you will not do any of the following while using it:' },
        {
          t: 'ol',
          items: [
            {
              x: '<strong>Unlawful or prohibited content.</strong> Posting or disseminating anything that violates the laws and regulations of the People’s Republic of China (including the Cybersecurity Law and the Law on the Protection of Minors) or public order and good morals, for example:',
              sub: [
                'inciting secession, undermining ethnic unity, or advocating terrorism or extremism;',
                'distributing obscene, pornographic, gambling, violent, homicidal or terrorist material, or material that incites crime;',
                'insulting, defaming or discriminating against others, or infringing the lawful rights of others.'
              ]
            },
            '<strong>Infringement of rights.</strong> Posting content that infringes the intellectual property (for example, stolen Minecraft mods, skins or builds), privacy, reputation or other lawful rights of others without their permission.',
            {
              x: '<strong>Malicious behaviour.</strong>',
              sub: [
                'distributing viruses, trojans or malware, or carrying out attacks on network security (such as DDoS attacks or credential stuffing);',
                'accessing or interfering with another person’s account or with the Community’s systems without authorisation;',
                'mass-registering accounts, posting spam, or flooding the Community with repetitive posts.'
              ]
            },
            '<strong>Impersonation and misleading conduct.</strong> Impersonating any person, organisation or official Minecraft representative in a misleading way.',
            '<strong>Other improper conduct.</strong> Using the Community for commercial advertising, pyramid schemes, fraud or any other purpose that is not of a community-interest nature.'
          ]
        },
        { t: 'p', x: '<strong>Enforcement.</strong> If you breach the rules above, we may — without prior notice — remove content, restrict features, suspend your account or permanently ban you from access.' },

        { t: 'h2', x: '3. Content Rights and Responsibilities' },
        {
          t: 'ol',
          items: [
            '<strong>Ownership.</strong> The copyright and other intellectual property rights in original content you post in the Community (including but not limited to text, images, videos and build save files) remain with you.',
            '<strong>Licence.</strong> So that the Community can display and distribute your content, you grant the Community a <strong>non-exclusive licence, which may be sub-licensed as necessary to third parties providing the Community with basic technical infrastructure (such as CDNs and image hosting), and which may be exercised within the territory of the People’s Republic of China (including Hong Kong, Macao and Taiwan)</strong>, to use that content solely for <strong>storage and display within the Community platform</strong> and for the non-commercial promotion of the Community. This licence terminates automatically when you delete the content or close your account; we will then delete or anonymise the relevant content within a reasonable period (for example, 30 days), although technical backups may be retained for up to 90 days.',
            '<strong>User responsibility.</strong> You bear full legal responsibility for the lawfulness, truthfulness and accuracy of everything you post, and for ensuring it does not infringe any third party’s rights. The Community acts only as a provider of information storage space and does not pre-screen user content; however, upon receiving a compliant infringement notice that meets statutory requirements, we will delete, block or otherwise act on the content in accordance with the law.',
            '<strong>Handling infringement.</strong> If you believe your work has been infringed, please send proof of ownership and the infringing link to the contact email below. We will act within <strong>15 business days</strong> of verification.'
          ]
        },

        { t: 'h2', x: '4. Disclaimers and Limitation of Liability' },
        {
          t: 'ol',
          items: [
            '<strong>Service provided “as is”.</strong> The Community is a free, non-profit project. We make our best efforts to keep the service stable, but we give no express or implied warranties, including as to uninterrupted, error-free, secure or reliable operation.',
            '<strong>Force majeure and third-party causes.</strong> We are not liable for service interruptions or data loss caused by natural disasters, policy changes, network attacks, carrier outages, other force majeure events or third-party causes.',
            '<strong>Scope of loss.</strong> To the fullest extent permitted by applicable law, we are not liable for any indirect loss (such as loss of data, loss of profit or loss of opportunity). <strong>This disclaimer does not apply to damage caused by our intentional misconduct or gross negligence.</strong>',
            '<strong>Risks of user content.</strong> Offline transactions, private arrangements or disputes of opinion between users are unconnected with the Community; please exercise your own judgement.'
          ]
        },

        { t: 'h2', x: '5. Privacy' },
        { t: 'p', x: 'We handle your personal information in accordance with the Freewd Community Privacy Policy, which forms an integral part of this Agreement. Please be sure to read and understand it.' },

        { t: 'h2', x: '6. Changes to and Termination of the Service' },
        {
          t: 'ol',
          items: [
            '<strong>Right to change.</strong> We may adjust or suspend parts of the service as operational needs require (for example, server costs or technical upgrades), giving notice through Community announcements wherever possible.',
            '<strong>Termination.</strong> If a user seriously breaches this Agreement, we may immediately suspend or terminate that account and delete the content it has posted. Users may also close their own accounts.',
            '<strong>Non-profit project statement.</strong> The Community is an individual, non-profit project. The operator reserves the right to <strong>shut the Community down entirely</strong> if it can no longer be maintained, in which case we will announce it 30 days in advance and allow users to back up their data.'
          ]
        },

        { t: 'h2', x: '7. Changes to this Agreement' },
        { t: 'p', x: 'We may update this Agreement in response to legal requirements or the operational needs of the Community. The updated Agreement will be published on this page together with a new “Last updated” date. If there are material changes (for example, changes to the rules on cross-border data transfers), we will notify you by email or in-site message. <strong>Continued use of the service constitutes acceptance of the updated terms.</strong>' },

        { t: 'h2', x: '8. Governing Law and Dispute Resolution' },
        {
          t: 'ol',
          items: [
            '<strong>Governing law.</strong> The formation, interpretation and performance of this Agreement, and the resolution of any dispute under it, are governed by the <strong>laws of the mainland region of the People’s Republic of China</strong>.',
            '<strong>Dispute resolution.</strong> Any dispute arising out of this Agreement shall first be resolved through friendly negotiation. If negotiation fails, either party may bring the dispute before the competent people’s court at <strong>the operator’s place of domicile</strong>. As the Community is an individual, non-commercial, non-profit project, both parties agree to prioritise friendly negotiation and to avoid litigation wherever possible.',
            '<strong>Severability.</strong> If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force.'
          ]
        },

        { t: 'h2', x: '9. Contact Us' },
        { t: 'p', x: 'If you have any questions or suggestions about this Agreement, or wish to make a complaint, please contact us:' },
        { t: 'p', x: '<strong>Email</strong>: blockcarft114@foxmail.com' },
        { t: 'p', x: '(The operator is a high-school student and may not reply immediately, but will respond within 3 business days.)' },

        { t: 'hr' },

        { t: 'h2', cls: 'doc-title', x: 'Freewd Community Privacy Policy' },
        { t: 'p', x: '<strong>Last updated: October 5, 2026</strong>' },
        { t: 'p', x: 'Freewd Community (the “Community” or “we”) takes the protection of your personal information and privacy very seriously. This Policy explains how we collect, use, store and protect your personal information when you use the Community’s services. It is drawn up in accordance with the Personal Information Protection Law of the People’s Republic of China, the Cybersecurity Law of the People’s Republic of China and the Law on the Protection of Minors.' },
        { t: 'p', x: '<strong>Please read this Policy carefully.</strong> If you do not agree with any part of it, please stop using the Community’s services immediately.' },

        { t: 'hr' },

        { t: 'h2', x: '1. Information We Collect' },
        { t: 'p', x: 'When you use the Community’s services, we collect only the information necessary for the <strong>basic functions of a community-interest forum</strong>. This falls into two categories: information you provide, and information we collect automatically.' },

        { t: 'h3', x: '(a) Information you provide' },
        {
          t: 'table',
          head: ['Type of information', 'Purpose of collection'],
          rows: [
            ['Username', 'To display your identity in the Community and to attribute posts and comments to you.'],
            ['Email address', 'For account registration, login verification, password recovery and important system notices (such as updates to this Agreement).'],
            ['Posted content (posts, replies, private messages)', 'For displaying content and enabling interaction within the Community.']
          ]
        },

        { t: 'h3', x: '(b) Information we collect automatically' },
        { t: 'p', x: 'When you visit or use the Community, our server logs automatically record the following technical information:' },
        {
          t: 'table',
          head: ['Type of information', 'Purpose of collection'],
          rows: [
            ['IP address', 'To distinguish between users, prevent malicious attacks (such as DDoS), and generate anonymous access statistics.'],
            ['Browser type and version', 'To optimise page compatibility and improve your experience.'],
            ['Operating system', 'As with browser type, for technical adaptation.'],
            ['Access times and clickstream', 'To analyse popular content and improve the service.']
          ]
        },

        { t: 'h2', x: '2. How We Use This Information' },
        { t: 'p', x: 'We use your information only to the extent necessary for the purposes described above, as follows:' },
        {
          t: 'table',
          head: ['Information', 'How it is used'],
          rows: [
            ['Username', 'Displaying identity and searching for users.'],
            ['Email address', 'Sending verification emails, password recovery emails and system announcements.'],
            ['Posted content', 'Displayed publicly in the Community for other users to view and reply to.'],
            ['IP address and log data', 'Analysing security risks, compiling traffic statistics and troubleshooting technical faults.']
          ]
        },
        { t: 'p', x: '<strong>We will not use your information for any commercial purpose</strong> (for example, advertising, selling data or profiting from user profiling).' },

        { t: 'h2', x: '3. Storage and Protection of Information' },
        { t: 'h3', x: '(a) Location' },
        { t: 'p', x: '<strong>All servers of the Community are located in the Hong Kong Special Administrative Region of the People’s Republic of China.</strong> This means that the personal information you provide when registering and using the service (including your username, email address, posted content and IP address) will be transferred to and stored in Hong Kong.' },
        { t: 'h3', x: '(b) Retention periods' },
        {
          t: 'ul',
          items: [
            'Your account information is retained until you close your account or ask us to delete it.',
            'Public content you post (threads and replies) is in principle retained permanently, unless you delete it or it is removed for breaching this Agreement.',
            '<strong>In-site notification data</strong> is retained for as long as your account exists, in order to display interactions and system messages; when you close your account, that notification data is physically deleted at the same time.',
            'Technical logs (IP addresses and access records) are retained for <strong>no longer than 180 days</strong> and are automatically anonymised after security analysis and statistical use.'
          ]
        },
        { t: 'h3', x: '(c) Security measures' },
        { t: 'p', x: 'We take the following measures to protect your information:' },
        {
          t: 'ul',
          items: [
            '<strong>Encrypted transmission</strong>: HTTPS is enabled across the site to prevent data being intercepted in transit.',
            '<strong>Password protection</strong>: your account password is never stored in plain text; it is stored after secure hashing (such as bcrypt).',
            '<strong>Access control</strong>: only the operator can access the server back end, protected by a strong password and two-factor authentication.',
            '<strong>Regular backups</strong>: the database is backed up automatically every day, and backups are stored encrypted in a separate location.'
          ]
        },
        { t: 'p', x: '<strong>Even so, please understand that the internet is never completely secure. We cannot promise 100% data security, but we will do our utmost to protect it.</strong>' },

        { t: 'h2', x: '4. Third-Party Services' },
        { t: 'p', x: 'To keep the Community running reliably, we use the following third-party infrastructure services. They are used for technical purposes only and do not actively obtain your personal information for other uses.' },
        {
          t: 'table',
          head: ['Service type', 'Provider', 'Information it may receive', 'Purpose'],
          rows: [
            ['CDN and security protection', 'Cloudflare', 'IP address, request time, accessed domain', 'Accelerating content delivery and defending against DDoS attacks'],
            ['Image hosting', 'Telegram', 'Image files and access metadata', 'Storing images uploaded by users for display in the Community']
          ]
        },
        { t: 'p', x: 'We will not sell, rent or share your personal information with any other third party unless we have your separate consent or are required to do so by law (for example, a lawful request from a public security authority).' },

        { t: 'h2', x: '5. Cross-Border Transfer of Personal Information: Notice and Undertakings' },
        { t: 'p', x: 'As explained above, the Community’s servers are located in <strong>Hong Kong, China</strong>. Under the Personal Information Protection Law of the People’s Republic of China, providing personal information to the Hong Kong Special Administrative Region constitutes a <strong>cross-border transfer of data</strong>.' },
        {
          t: 'ol',
          items: [
            '<strong>Clear notice.</strong> You expressly understand and agree that, in order to keep the Community running as an individual non-profit project, your personal information will be transferred to servers located in the <strong>Hong Kong Special Administrative Region of the People’s Republic of China</strong> for storage and processing. In addition, image files attached to your posts will be transferred via Cloudflare Workers to Telegram servers for storage.',
            '<strong>Compliance undertaking.</strong> As the operator, I undertake to provide protection for your personal information at the same standard as that applicable in the mainland, in accordance with the Personal Information Protection Law of the People’s Republic of China and related regulations. I am actively studying and preparing, and will, before the point required by law, do my best to file a personal information protection impact report with the Cyberspace Administration of China or otherwise satisfy the applicable compliance conditions.',
            '<strong>Assumption of risk.</strong> If you have concerns about the current safeguards for cross-border transfers, please <strong>do not register for or use the Community</strong>. Continued use means that you fully understand this risk and voluntarily accept any adverse consequences that may follow.',
            '<strong>Overseas recipient.</strong> The recipient of the data is the operator personally (a high-school student in mainland China), whose contact details appear at the end of this Policy.'
          ]
        },

        { t: 'h2', x: '6. Your Rights' },
        { t: 'p', x: 'Under the relevant laws and regulations you have the following rights in relation to your personal information. You may exercise them by contacting us at the email address at the end of this Policy; we will respond within <strong>15 business days</strong>.' },
        {
          t: 'ol',
          items: [
            '<strong>Access</strong>: to be told whether we hold your personal information and what we hold.',
            '<strong>Correction</strong>: if you find that the information is wrong (for example, a misspelled email address), you may ask us to correct it.',
            '<strong>Deletion</strong>: you may ask us to delete your account and all related data. After deletion we will <strong>thoroughly erase</strong> your posted content to the extent technically feasible. Where content cannot be deleted immediately because of system architecture or security backups, we will immediately apply <strong>irreversible anonymisation</strong> so that it can no longer be linked to you (please note, however, that publicly posted threads may be screenshotted or reposted by others, which we cannot control).',
            '<strong>Account closure</strong>: you may request closure of your account by email at any time, for any reason or none.',
            '<strong>Withdrawal of consent</strong>: you may withdraw your consent to this Policy by ceasing to use the Community and closing your account.'
          ]
        },

        { t: 'h2', x: '7. Protection of Minors' },
        { t: 'p', x: 'We attach great importance to the protection of minors’ personal information.' },
        {
          t: 'ul',
          items: [
            '<strong>General principle</strong>: if you are under 18, please use the service with the consent and guidance of your parent or guardian.',
            '<strong>Children under 14</strong>: if you are under 14, please make sure your parent or guardian reads this Policy and, in accordance with Article 1(3) of the User Agreement, sends a statement from their email address so that we obtain their <strong>explicit written consent</strong>. Until that consent is received and verified, we will not collect any information about you beyond what is needed for basic browsing, and we will not enable posting, commenting or other interactive features for you.',
            '<strong>Guardians’ rights</strong>: if you are a parent or guardian and discover that we have collected a child in your care’s personal information without your consent, please contact us immediately so that we can delete it.'
          ]
        },

        { t: 'h2', x: '8. Changes to this Policy' },
        { t: 'p', x: 'We may update this Privacy Policy in response to legal requirements or operational needs. The updated Policy will be published on this page with a new “Last updated” date. If there are material changes (for example, a change in where data is stored, or additional third-party sharing), we will notify you by email or in-site message.' },

        { t: 'h2', x: '9. Contact Us' },
        { t: 'p', x: 'If you have any questions about this Privacy Policy, wish to exercise your personal information rights, or wish to make a complaint, please contact:' },
        { t: 'p', x: '<strong>Email</strong>: blockcarft114@foxmail.com' },
        { t: 'p', x: '<strong>Response time</strong>: we will acknowledge receipt within 3 business days and give a substantive reply within 15 business days.' },

        { t: 'hr' },

        {
          t: 'footer',
          items: [
            '<strong>Freewd Studio</strong><br>',
            '© 2025-2026 Freewd Community | Some rights reserved'
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------------
     * 日本語
     * ------------------------------------------------------------------- */
    'ja': {
      htmlLang: 'ja',
      label: '日本語',
      title: 'Freewd コミュニティ - 利用規約およびプライバシーポリシー',
      description: 'Freewd コミュニティの利用規約およびプライバシーポリシーです。Freewd は個人（高校生）が運営する非営利の公益交流コミュニティであり、Mojang Studios および Microsoft とは一切関係がありません。マインクラフトのマルチプレイや MOD のダウンロード機能は提供していません。',
      blocks: [
        { t: 'h1', x: 'Freewd コミュニティ利用規約' },
        { t: 'p', x: '<strong>最終更新日：2026年10月05日</strong>' },

        { t: 'h2', x: 'はじめに' },
        { t: 'p', x: 'Freewd コミュニティへようこそ！' },
        { t: 'p', x: 'Freewd コミュニティ（以下「本コミュニティ」または「当方」）は、個人（高校生）が趣味で運営する、『Minecraft』プレイヤー向けの非営利・公益交流プラットフォームです。本コミュニティは、Mojang Studios および Microsoft Corporation と一切関係がありません。' },
        { t: 'p', x: '本規約は、お客様（以下「ユーザー」）と本コミュニティ運営者との間の、本コミュニティサービスへの登録および利用に関する法的な合意です。本規約の各条項、とりわけ免責または責任制限に関する条項を必ずよくお読みいただき、十分にご理解ください。<strong>登録を完了した時点、または本サービスの利用を開始した時点で、お客様は本規約をすべて読み、理解し、そのすべてに拘束されることに同意したものとみなされます。</strong>' },
        { t: 'p', x: '本規約のいずれかの内容に同意いただけない場合は、直ちに登録または本コミュニティの利用を中止してください。' },
        { t: 'hr' },

        { t: 'h2', x: '一、アカウント登録と安全' },
        {
          t: 'ol',
          items: [
            '<strong>情報の正確性</strong>：登録時には、有効なメールアドレスとユーザー名を提供し、提供する情報が真実・正確かつ完全であることを保証してください。情報に変更があった場合は、速やかに更新してください。',
            '<strong>アカウントの責任</strong>：アカウント名とパスワードは適切に管理し、アカウントを譲渡・貸与し、または第三者に使用を許諾してはなりません。当該アカウントを通じて行われる一切の行為（コンテンツの投稿、コメント等を含みます）について、お客様がすべての法的責任を負います。アカウントが不正利用されていることに気づいた場合は、直ちに本規約末尾の連絡先までお知らせください。',
            {
              x: '<strong>年齢制限と保護者の同意</strong>：',
              sub: [
                '登録時に<strong>13歳以上</strong>であることを確認してください。',
                '<strong>18歳未満の方</strong>は、保護者の同意と指導のもとで本サービスをご利用いただき、保護者が相応の責任を負うものとします。',
                '<strong>14歳未満の方</strong>については、保護者の<strong>明確な同意</strong>を得た場合に限り、完全なコミュニティサービスを提供します。保護者の方から、登録時のメールアドレスを用いて blockcarft114@foxmail.com 宛てに、件名を「【保護者同意】+ 登録したユーザー名」とし、本文に「利用規約」および「プライバシーポリシー」を理解し同意した旨を記載したメールをお送りください。確認が取れ次第、投稿・コメント等の権限を有効化します。<strong>確認が取れるまで、お客様のアカウントは制限状態（閲覧のみ）となります。</strong>'
              ]
            },
            '<strong>同意の方法</strong>：登録ページで「利用規約およびプライバシーポリシーを読み、同意します」にご自身でチェックを入れることで登録が完了します。このチェック行為をもって、本規約を十分に読み、理解し、同意したものとみなします。'
          ]
        },

        { t: 'h2', x: '二、ユーザーの行為規範' },
        { t: 'p', x: '良好なコミュニティ環境を維持するため、お客様は本コミュニティの利用にあたり、以下の行為を行わないことを約束します。' },
        {
          t: 'ol',
          items: [
            {
              x: '<strong>違法・違反コンテンツ</strong>：中華人民共和国の法令（「サイバーセキュリティ法」「未成年者保護法」等を含みます）および公序良俗に違反する内容を投稿・拡散すること。例えば：',
              sub: [
                '国家の分裂を扇動し、民族の団結を損ない、テロリズムまたは過激主義を宣伝するもの；',
                'わいせつ、ポルノ、賭博、暴力、殺人、テロまたは犯罪を教唆する情報を流布するもの；',
                '他人を侮辱・誹謗・差別し、他人の合法的権益を侵害するもの。'
              ]
            },
            '<strong>権利の侵害</strong>：他人の許諾なく、他人の知的財産権（『Minecraft』の MOD、スキン、建築作品の盗用など）、プライバシー権、名誉権その他の合法的権益を侵害する内容を投稿すること。',
            {
              x: '<strong>悪意ある行為</strong>：',
              sub: [
                'ウイルス、トロイの木馬、マルウェアを拡散し、またはネットワークセキュリティを破壊する行為（DDoS 攻撃、クレデンシャルスタッフィング等）を行うこと；',
                '他人のアカウントやコミュニティシステムに不正にアクセスし、またはこれを妨害すること；',
                'アカウントを大量に登録し、スパムを投稿し、または書き込みを連投すること。'
              ]
            },
            '<strong>なりすましと誤導</strong>：他人、団体、または『Minecraft』公式関係者になりすまして誤解を招く行為を行うこと。',
            '<strong>その他不適切な行為</strong>：本コミュニティを商業広告、マルチ商法、詐欺その他公益目的以外の活動に利用すること。'
          ]
        },
        { t: 'p', x: '<strong>違反への対応</strong>：上記の規範に違反した場合、当方は事前の通知なく、コンテンツの削除、機能の制限、アカウントの停止、さらには恒久的なアクセス禁止等の措置を講じることができます。' },

        { t: 'h2', x: '三、コンテンツの権利と責任' },
        {
          t: 'ol',
          items: [
            '<strong>知的財産権の帰属</strong>：お客様が本コミュニティに投稿したオリジナルコンテンツ（文章、画像、動画、建築データ等を含みますがこれらに限りません）の著作権その他の知的財産権は、引き続きお客様に帰属します。',
            '<strong>利用許諾</strong>：本コミュニティがお客様のコンテンツを正常に表示・配信できるよう、お客様は本コミュニティに対し、<strong>非独占的で、本コミュニティに基盤技術（CDN、画像ホスティング等）を提供する第三者への必要な再許諾が可能であり、中華人民共和国（香港・マカオ・台湾を含む）の領域内で行使できる</strong>利用許諾を付与します。許諾の範囲は、<strong>本コミュニティのプラットフォーム内部</strong>での保存・表示、および非商業的な方法による本コミュニティの宣伝に限られます。お客様が自らコンテンツを削除し、またはアカウントを注销した場合、本許諾は自動的に終了し、当方は合理的な期間内（例：30日）に関連コンテンツを完全に削除または匿名化します。ただし、技術的バックアップは最長90日間保持される場合があります。',
            '<strong>ユーザーの責任</strong>：お客様は、自ら投稿するすべてのコンテンツの合法性、真実性、正確性、および第三者の権益を侵害しないことについて、すべての法的責任を負います。本コミュニティは情報保管スペースの提供者にすぎず、ユーザーが投稿するコンテンツの事前審査は行いませんが、法定の要件を満たす権利侵害の通知を受けた後は、法令に従い削除・遮断等の措置を講じます。',
            '<strong>権利侵害への対応</strong>：ご自身の作品が侵害されたとお考えの場合は、下記の連絡先メール宛てに権利の証明および侵害リンクをお送りください。確認後、<strong>15営業日以内</strong>に対応します。'
          ]
        },

        { t: 'h2', x: '四、免責事項と責任の制限' },
        {
          t: 'ol',
          items: [
            '<strong>「現状有姿」での提供</strong>：本コミュニティは無料の公益プロジェクトです。当方はサービスの安定性の確保に最大限努めますが、明示・黙示を問わずいかなる保証も行いません。これには、サービスの中断がないこと、誤りがないこと、安全かつ信頼できること等が含まれますが、これらに限りません。',
            '<strong>不可抗力および第三者に起因する事由</strong>：自然災害、政策の変更、ネットワーク攻撃、通信事業者の障害等の不可抗力または第三者に起因する事由によりサービスが中断し、またはデータが失われた場合、当方は法的責任を負いません。',
            '<strong>損害の範囲</strong>：適用法令が認める最大限の範囲において、当方は間接損害（データの喪失、逸失利益、機会の喪失等）について責任を負いません。<strong>ただし、本免責事項は、当方の故意または重大な過失による損害には適用されません。</strong>',
            '<strong>ユーザーコンテンツのリスク</strong>：ユーザー間のオフラインでの取引、私的な取り決め、意見の相違等は本コミュニティとは無関係です。ご自身の判断で慎重に対応してください。'
          ]
        },

        { t: 'h2', x: '五、プライバシーの保護' },
        { t: 'p', x: '当方は、本規約の不可分の一部である「Freewd コミュニティプライバシーポリシー」に従ってお客様の個人情報を取り扱います。必ず同ポリシーをお読みいただき、ご理解ください。' },

        { t: 'h2', x: '六、サービスの変更と終了' },
        {
          t: 'ol',
          items: [
            '<strong>変更の権利</strong>：当方は、運営上の必要（サーバー費用、技術の更新等）に応じて、サービスの一部を調整または停止することができます。その際は、可能な限り事前にコミュニティのお知らせで通知します。',
            '<strong>サービスの終了</strong>：ユーザーが本規約に重大に違反した場合、当方は直ちにそのアカウントを停止または終了し、投稿されたコンテンツを削除することができます。ユーザー自身がアカウントを注销することもできます。',
            '<strong>公益プロジェクトに関する声明</strong>：本コミュニティは個人による公益プロジェクトです。運営者は、維持が困難になった場合に<strong>コミュニティを完全に閉鎖する</strong>権利を留保します。その際は30日前に告知し、ユーザーがデータをバックアップできるようにします。'
          ]
        },

        { t: 'h2', x: '七、規約の更新' },
        { t: 'p', x: '当方は、法令またはコミュニティの運営上の必要に応じて本規約を更新することがあります。更新後の規約は本ページに掲載し、新たな「最終更新日」を明記します。重大な変更（データの越境移転に関するルールの変更等）がある場合は、メールまたはサイト内メッセージでお知らせします。<strong>サービスの利用を継続した場合、更新後の内容に同意したものとみなされます。</strong>' },

        { t: 'h2', x: '八、準拠法と紛争解決' },
        {
          t: 'ol',
          items: [
            '<strong>準拠法</strong>：本規約の成立、解釈、履行および紛争解決には、<strong>中華人民共和国大陸地区の法</strong>を適用します。',
            '<strong>紛争解決</strong>：本規約に起因する紛争については、まず双方が友好的な協議によって解決を図るものとします。協議が調わない場合、いずれの当事者も、<strong>運営者の住所地</strong>を管轄する人民法院に訴えを提起することができます。本コミュニティが個人による非商業的な公益プロジェクトであることに鑑み、双方は友好的な協議による解決を優先し、訴訟は可能な限り避けることに同意します。',
            '<strong>条項の効力</strong>：本規約のいずれかの条項が無効または執行不能と判断された場合でも、その他の条項の効力には影響しません。'
          ]
        },

        { t: 'h2', x: '九、お問い合わせ' },
        { t: 'p', x: '本規約についてご不明な点、ご意見、または通報・苦情がある場合は、以下の方法でご連絡ください。' },
        { t: 'p', x: '<strong>メールアドレス</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '（運営者は高校生のため、すぐに返信できない場合がありますが、3営業日以内に対応します）' },

        { t: 'hr' },

        { t: 'h2', cls: 'doc-title', x: 'Freewd コミュニティプライバシーポリシー' },
        { t: 'p', x: '<strong>最終更新日：2026年10月05日</strong>' },
        { t: 'p', x: 'Freewd コミュニティ（以下「本コミュニティ」または「当方」）は、お客様の個人情報とプライバシーの保護を非常に重視しています。本ポリシーは、お客様がコミュニティサービスを利用される過程で、当方がいかにして個人情報を収集、利用、保存および保護するかを説明するものです。本ポリシーは、「中華人民共和国個人情報保護法」「中華人民共和国サイバーセキュリティ法」および「未成年者保護法」に基づいて定められています。' },
        { t: 'p', x: '<strong>本ポリシーをよくお読みください。</strong>本ポリシーのいずれかの内容に同意いただけない場合は、直ちに本コミュニティサービスの利用を中止してください。' },

        { t: 'hr' },

        { t: 'h2', x: '一、当方が収集する情報' },
        { t: 'p', x: 'お客様が本コミュニティサービスを利用される際、当方は<strong>公益交流プラットフォームの基本機能</strong>を実現するために必要な情報のみを収集します。これは「お客様が自ら提供する情報」と「当方が自動的に収集する情報」の二種類に分かれます。' },

        { t: 'h3', x: '（一）お客様が自ら提供する情報' },
        {
          t: 'table',
          head: ['情報の種類', '収集の目的'],
          rows: [
            ['ユーザー名', 'コミュニティ内でお客様の身元を表示し、投稿やコメントの署名に使用します。'],
            ['メールアドレス', 'アカウント登録、ログイン認証、パスワードの再設定、重要なシステム通知（規約の更新等）の受信に使用します。'],
            ['投稿内容（スレッド、返信、ダイレクトメッセージ）', 'コミュニティ内でのコンテンツ表示および交流に使用します。']
          ]
        },

        { t: 'h3', x: '（二）当方が自動的に収集する情報' },
        { t: 'p', x: 'お客様が本コミュニティにアクセスし、または利用すると、サーバーログに以下の技術情報が自動的に記録されます。' },
        {
          t: 'table',
          head: ['情報の種類', '収集の目的'],
          rows: [
            ['IPアドレス', 'ユーザーの識別、悪意ある攻撃（DDoS 等）の防止、匿名アクセス統計の作成に使用します。'],
            ['ブラウザの種類およびバージョン', 'ページの互換性を最適化し、閲覧体験を向上させるために使用します。'],
            ['オペレーティングシステム', 'ブラウザの種類と同様、技術的な適合作業に使用します。'],
            ['アクセス時刻およびクリックストリーム', '人気コンテンツの分析およびサービスの改善に使用します。']
          ]
        },

        { t: 'h2', x: '二、これらの情報の利用方法' },
        { t: 'p', x: '当方は、上記の目的を達成するために必要な範囲でのみ、お客様の情報を利用します。具体的には以下のとおりです。' },
        {
          t: 'table',
          head: ['情報', '利用方法'],
          rows: [
            ['ユーザー名', '身元の表示、ユーザーの検索。'],
            ['メールアドレス', '認証メールの送信、パスワード再設定、システム告知の送信。'],
            ['投稿内容', 'コミュニティ内で公開表示し、他のユーザーが閲覧・返信できるようにします。'],
            ['IPアドレス、ログ情報', 'セキュリティリスクの分析、アクセス数の統計、技術的な障害の調査。']
          ]
        },
        { t: 'p', x: '<strong>当方は、お客様の情報をいかなる商業目的にも利用しません</strong>（広告配信、データの販売、プロファイリングによる収益化等）。' },

        { t: 'h2', x: '三、情報の保存と保護' },
        { t: 'h3', x: '（一）保存場所' },
        { t: 'p', x: '<strong>本コミュニティのすべてのサーバーは、中華人民共和国香港特別行政区に所在します。</strong>これは、お客様が登録および本サービスの利用にあたって提供した個人情報（ユーザー名、メールアドレス、投稿内容、IPアドレス等）が香港に転送され、保存されることを意味します。' },
        { t: 'h3', x: '（二）保存期間' },
        {
          t: 'ul',
          items: [
            'お客様のアカウント情報は、お客様が自らアカウントを注销し、または削除を求めるまで保存されます。',
            'お客様が投稿した公開コンテンツ（スレッド、返信）は、原則として永久に保存されます。ただし、お客様が自ら削除した場合、または規約違反により削除された場合はこの限りではありません。',
            '<strong>サイト内通知データ</strong>は、お客様のアカウントが存続する間、やり取りやシステムメッセージを表示するために保持されます。お客様が自らアカウントを注销した場合、サイト内通知データも同時に物理的に削除されます。',
            '技術ログ（IPアドレス、アクセス記録）は<strong>180日を超えない期間</strong>保存され、セキュリティ分析および統計処理の後、自動的に匿名化されます。'
          ]
        },
        { t: 'h3', x: '（三）安全対策' },
        { t: 'p', x: '当方は、お客様の情報の安全を守るため、以下の措置を講じています。' },
        {
          t: 'ul',
          items: [
            '<strong>暗号化通信</strong>：サイト全体で HTTPS を有効化し、通信中のデータの盗聴を防ぎます。',
            '<strong>パスワード保護</strong>：アカウントのパスワードは平文で保存せず、安全なハッシュ処理（bcrypt 等）を経て保存します。',
            '<strong>アクセス制御</strong>：サーバーの管理画面にアクセスできるのは運営者本人のみで、強力なパスワードと二段階認証で保護されています。',
            '<strong>定期的なバックアップ</strong>：データベースを毎日自動でバックアップし、バックアップファイルは暗号化して別の場所に保存します。'
          ]
        },
        { t: 'p', x: '<strong>ただし、ご理解ください。インターネット環境は絶対に安全なものではありません。当方は100%のデータの安全を約束することはできませんが、全力で保護にあたります。</strong>' },

        { t: 'h2', x: '四、第三者サービスについて' },
        { t: 'p', x: 'コミュニティの安定した運営を確保するため、当方は以下の第三者の基盤サービスを利用しています。これらのサービスは技術的な目的にのみ使用され、お客様の個人情報を他の用途のために積極的に取得することはありません。' },
        {
          t: 'table',
          head: ['サービスの種類', '提供事業者', '接触する可能性のある情報', '用途'],
          rows: [
            ['CDN およびセキュリティ保護', 'Cloudflare', 'IPアドレス、リクエスト時刻、アクセスしたドメイン', 'コンテンツ配信の高速化、DDoS 攻撃の防御'],
            ['画像ホスティング', 'Telegram', '画像ファイルおよびアクセスメタデータ', 'ユーザーがアップロードした画像を保存し、コミュニティ内で表示']
          ]
        },
        { t: 'p', x: '当方は、お客様の個別の同意がある場合、または法令により強制される場合（公安機関による法に基づく照会等）を除き、お客様の個人情報を他のいかなる第三者にも販売、貸与または共有しません。' },

        { t: 'h2', x: '五、個人情報の越境移転に関する特別な告知と約束' },
        { t: 'p', x: '前述のとおり、本コミュニティのサーバーは<strong>中国香港</strong>に所在します。「中華人民共和国個人情報保護法」に基づき、香港特別行政区に個人情報を提供することは<strong>データの越境移転</strong>に該当します。' },
        {
          t: 'ol',
          items: [
            '<strong>明確な告知</strong>：お客様は、本コミュニティを個人の公益プロジェクトとして運営し続けるために、お客様の個人情報が<strong>中華人民共和国香港特別行政区</strong>に所在するサーバーに転送され、保存および処理されることを明確に認識し、同意します。また、お客様が投稿するコンテンツに添付された画像ファイルは、Cloudflare Worker を経由して Telegram のサーバーに転送され保存されます。',
            '<strong>コンプライアンスの約束</strong>：運営者である本人は、「中華人民共和国個人情報保護法」および関連規定に従い、お客様の個人情報に対して中国大陸と同等の水準の保護を提供することを約束します。本人は現在積極的に学習と準備を進めており、法令が求める時点までに、国家インターネット情報弁公室への個人情報保護影響評価報告の提出、またはその他の適用されるコンプライアンス要件の充足に全力で努めます。',
            '<strong>リスクの負担</strong>：現在のデータ越境移転の安全性に懸念がある場合は、<strong>本コミュニティに登録したり利用したりしないでください</strong>。利用を継続した場合、お客様はこのリスクを十分に理解し、生じ得る不利益を自ら負担することに同意したものとみなされます。',
            '<strong>国外の受領者</strong>：データの受領者は運営者本人（中国大陸の高校生）であり、その連絡先は本ポリシーの末尾に記載されています。'
          ]
        },

        { t: 'h2', x: '六、お客様の権利' },
        { t: 'p', x: '関連法令に基づき、お客様はご自身の個人情報について以下の権利を有します。本ポリシー末尾のメールアドレスから当方にご連絡いただくことで権利を行使できます。当方は<strong>15営業日以内</strong>に回答します。' },
        {
          t: 'ol',
          items: [
            '<strong>照会</strong>：当方がお客様の個人情報を保有しているかどうか、またどのような情報を保有しているかの告知を求めることができます。',
            '<strong>訂正</strong>：情報に誤り（メールアドレスの綴り間違い等）がある場合、訂正を求めることができます。',
            '<strong>削除</strong>：アカウントおよびすべての関連データの削除を求めることができます。削除後、当方は技術的に可能な範囲でお客様の投稿内容を<strong>完全に消去</strong>します。システム構成やセキュリティバックアップ等の理由により直ちに完全削除できないコンテンツについては、直ちに<strong>不可逆な匿名化処理</strong>を行い、お客様の身元と結びつかないようにします（ただし、公開済みの投稿は第三者によってスクリーンショットや転載が行われる可能性があり、当方ではそれを制御できない点にご注意ください）。',
            '<strong>アカウントの注销</strong>：理由を問わず、いつでもメールでアカウントの注销を申請できます。',
            '<strong>同意の撤回</strong>：本コミュニティの利用を中止しアカウントを注销することにより、本ポリシーへの同意を撤回できます。'
          ]
        },

        { t: 'h2', x: '七、未成年者の保護' },
        { t: 'p', x: '当方は、未成年者の個人情報の保護を非常に重視しています。' },
        {
          t: 'ul',
          items: [
            '<strong>一般原則</strong>：18歳未満の方は、保護者の同意と指導のもとで本サービスをご利用ください。',
            '<strong>14歳未満のお子様</strong>：14歳未満の方は、必ず保護者に本ポリシーをお読みいただき、利用規約第一条第三項の定めに従って保護者のメールアドレスから声明を送信し、<strong>明確な書面による同意</strong>を取得してください。当方が当該同意を受領・確認するまでは、基本的な閲覧に必要な情報を超えてお客様の情報を収集することはなく、投稿・コメント等のインタラクティブ機能も提供しません。',
            '<strong>保護者の権利</strong>：保護者の方が、当方が同意なくお客様の監護下にあるお子様の個人情報を収集していることを発見された場合は、直ちに当方にご連絡いただき削除いたします。'
          ]
        },

        { t: 'h2', x: '八、ポリシーの更新' },
        { t: 'p', x: '当方は、法令または運営上の必要に応じて本プライバシーポリシーを更新することがあります。更新後のポリシーは本ページに掲載し、「最終更新日」を更新します。重大な変更（データの保存場所の変更、第三者との共有の追加等）がある場合は、メールまたはサイト内メッセージでお知らせします。' },

        { t: 'h2', x: '九、お問い合わせ' },
        { t: 'p', x: '本プライバシーポリシーについてご不明な点、個人情報に関する権利の行使、または通報・苦情がある場合は、以下までご連絡ください。' },
        { t: 'p', x: '<strong>メールアドレス</strong>：blockcarft114@foxmail.com' },
        { t: 'p', x: '<strong>対応時間</strong>：3営業日以内に受領の確認を行い、15営業日以内に実質的な回答を行います。' },

        { t: 'hr' },

        {
          t: 'footer',
          items: [
            '<strong>Freewd Studio</strong><br>',
            '© 2025-2026 Freewd コミュニティ | 一部の権利を留保します'
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------------
     * 한국어
     * ------------------------------------------------------------------- */
    'ko': {
      htmlLang: 'ko',
      label: '한국어',
      title: 'Freewd 커뮤니티 - 이용약관 및 개인정보 처리방침',
      description: 'Freewd 커뮤니티 이용약관 및 개인정보 처리방침입니다. Freewd는 개인(고등학생)이 운영하는 비영리 공익 교류 커뮤니티이며, Mojang Studios 및 Microsoft와 아무런 관련이 없습니다. 마인크래프트 멀티플레이 또는 모드 다운로드 기능은 제공하지 않습니다.',
      blocks: [
        { t: 'h1', x: 'Freewd 커뮤니티 이용약관' },
        { t: 'p', x: '<strong>최종 업데이트: 2026년 10월 05일</strong>' },

        { t: 'h2', x: '머리말' },
        { t: 'p', x: 'Freewd 커뮤니티에 오신 것을 환영합니다!' },
        { t: 'p', x: 'Freewd 커뮤니티(이하 "본 커뮤니티" 또는 "당사")는 개인(고등학생)이 취미로 운영하는 『Minecraft』 플레이어를 위한 비영리·공익 교류 플랫폼입니다. 본 커뮤니티는 Mojang Studios 및 Microsoft Corporation과 어떠한 직접적인 관련도 없습니다.' },
        { t: 'p', x: '본 약관은 귀하(이하 "이용자")와 본 커뮤니티 운영자 간의 본 커뮤니티 서비스 가입 및 이용에 관한 법적 약정입니다. 본 약관의 각 조항, 특히 면책 또는 책임 제한에 관한 조항을 반드시 주의 깊게 읽고 충분히 이해하시기 바랍니다. <strong>가입을 완료한 때 또는 본 서비스를 이용하기 시작한 때부터 귀하는 본 약관을 모두 읽고 이해하였으며 그 전부에 동의한 것으로 간주됩니다.</strong>' },
        { t: 'p', x: '본 약관의 내용에 동의하지 않으시는 경우, 즉시 가입 또는 본 커뮤니티 이용을 중단해 주시기 바랍니다.' },
        { t: 'hr' },

        { t: 'h2', x: '1. 계정 가입 및 보안' },
        {
          t: 'ol',
          items: [
            '<strong>정보의 진실성</strong>: 가입 시 유효한 이메일 주소와 사용자 이름을 제공해야 하며, 제공한 정보가 진실하고 정확하며 완전함을 보증해야 합니다. 정보가 변경된 경우 즉시 업데이트해 주세요.',
            '<strong>계정 책임</strong>: 계정 이름과 비밀번호를 안전하게 보관해야 하며, 계정을 양도·대여하거나 타인에게 사용을 허가해서는 안 됩니다. 해당 계정을 통해 이루어진 모든 행위(게시물 작성, 댓글 등 포함)에 대해 귀하가 모든 법적 책임을 집니다. 계정이 도용된 사실을 발견한 경우 즉시 본 약관 말미의 연락처로 알려 주시기 바랍니다.',
            {
              x: '<strong>연령 제한 및 보호자 동의</strong>:',
              sub: [
                '가입 시 만 <strong>13세 이상</strong>임을 확인합니다.',
                '<strong>만 18세 미만인 경우</strong> 보호자의 동의와 지도 아래 본 서비스를 이용해야 하며, 보호자가 그에 상응하는 책임을 집니다.',
                '<strong>만 14세 미만인 경우</strong>, 보호자의 <strong>명확한 동의</strong>를 받은 경우에만 완전한 커뮤니티 서비스를 제공합니다. 보호자가 가입 시 등록한 이메일 주소로 blockcarft114@foxmail.com 에 제목을 "【보호자 동의】+ 가입한 사용자 이름"으로 하여, 본문에 「이용약관」 및 「개인정보 처리방침」을 숙지하고 동의한다는 내용을 기재한 메일을 보내도록 해 주세요. 확인이 완료되는 대로 게시물 작성, 댓글 등의 권한을 활성화합니다. <strong>확인 전까지 귀하의 계정은 제한 상태(열람만 가능)가 됩니다.</strong>'
              ]
            },
            '<strong>동의 방법</strong>: 가입 페이지에서 "이용약관과 개인정보 처리방침을 읽고 동의합니다"를 직접 체크해야 가입이 완료됩니다. 해당 체크 행위는 본 약관을 충분히 읽고 이해하며 동의한 것으로 간주됩니다.'
          ]
        },

        { t: 'h2', x: '2. 이용자 행위 규범' },
        { t: 'p', x: '건전한 커뮤니티 환경을 유지하기 위해, 귀하는 본 커뮤니티를 이용할 때 다음 행위를 하지 않을 것을 약속합니다.' },
        {
          t: 'ol',
          items: [
            {
              x: '<strong>위법·규정 위반 콘텐츠</strong>: 중화인민공화국 법령(「사이버안전법」, 「미성년자보호법」 등 포함) 및 공서양속에 위반되는 내용을 게시·유포하는 행위. 예:',
              sub: [
                '국가 분열을 선동하고 민족 단결을 훼손하며 테러리즘 또는 극단주의를 선전하는 내용;',
                '음란, 포르노, 도박, 폭력, 살인, 테러 또는 범죄 교사 정보를 유포하는 내용;',
                '타인을 모욕·비방·차별하거나 타인의 합법적 권익을 침해하는 내용.'
              ]
            },
            '<strong>권익 침해</strong>: 타인의 허락 없이 타인의 지식재산권(예: 『Minecraft』 모드, 스킨, 건축 작품 도용), 프라이버시권, 명예권 등 합법적 권익을 침해하는 내용을 게시하는 행위.',
            {
              x: '<strong>악의적 행위</strong>:',
              sub: [
                '바이러스, 트로이 목마, 악성 소프트웨어를 유포하거나 네트워크 보안을 파괴하는 행위(예: DDoS 공격, 크리덴셜 스터핑 등);',
                '타인의 계정 또는 커뮤니티 시스템에 불법으로 접근하거나 이를 방해하는 행위;',
                '대량으로 계정을 생성하거나 스팸을 게시하거나 도배하는 행위.'
              ]
            },
            '<strong>사칭 및 오도</strong>: 타인, 기관 또는 『Minecraft』 공식 관계자를 사칭하여 오해를 유발하는 행위.',
            '<strong>기타 부적절한 행위</strong>: 본 커뮤니티를 상업 광고, 다단계 판매, 사기 등 공익 목적이 아닌 활동에 이용하는 행위.'
          ]
        },
        { t: 'p', x: '<strong>위반 처리</strong>: 귀하가 위 규범을 위반한 경우, 당사는 사전 통지 없이 콘텐츠 삭제, 기능 제한, 계정 정지 나아가 영구 접근 금지 등의 조치를 취할 수 있습니다.' },

        { t: 'h2', x: '3. 콘텐츠 권리와 책임' },
        {
          t: 'ol',
          items: [
            '<strong>지식재산권 귀속</strong>: 귀하가 본 커뮤니티에 게시한 창작 콘텐츠(문자, 이미지, 영상, 건축 세이브 파일 등을 포함하되 이에 국한되지 않음)의 저작권 및 기타 지식재산권은 계속 귀하에게 귀속됩니다.',
            '<strong>이용 허락</strong>: 본 커뮤니티가 귀하의 콘텐츠를 정상적으로 표시하고 전달할 수 있도록, 귀하는 본 커뮤니티에 <strong>비독점적이며, 본 커뮤니티에 기반 기술 설비(CDN, 이미지 호스팅 등)를 제공하는 제3자에게 필요한 재허락이 가능하고, 중화인민공화국(홍콩·마카오·대만 포함) 영역 내에서 행사할 수 있는</strong> 이용 허락을 부여합니다. 허락 범위는 <strong>본 커뮤니티 플랫폼 내부</strong>에서의 저장·표시 및 비상업적 방식의 본 커뮤니티 홍보에 한정됩니다. 귀하가 직접 콘텐츠를 삭제하거나 계정을 탈퇴하면 본 허락은 자동으로 종료되며, 당사는 합리적인 기간(예: 30일) 내에 관련 콘텐츠를 완전히 삭제하거나 익명화합니다. 다만 기술적 백업은 최대 90일간 보관될 수 있습니다.',
            '<strong>이용자 책임</strong>: 귀하는 자신이 게시하는 모든 콘텐츠의 합법성, 진실성, 정확성 및 제3자의 권익을 침해하지 않을 것에 대해 모든 법적 책임을 집니다. 본 커뮤니티는 정보 저장 공간 제공자일 뿐이며 이용자가 게시하는 콘텐츠를 사전 심사하지 않으나, 법정 요건을 충족하는 권리 침해 통지를 받은 후에는 법에 따라 삭제·차단 등의 조치를 취합니다.',
            '<strong>권리 침해 처리</strong>: 귀하의 작품이 침해되었다고 판단되는 경우, 아래 연락처 이메일로 권리 증명 및 침해 링크를 제출해 주시기 바랍니다. 확인 후 <strong>15영업일 이내</strong>에 처리합니다.'
          ]
        },

        { t: 'h2', x: '4. 면책 및 책임 제한' },
        {
          t: 'ol',
          items: [
            '<strong>"현상 그대로" 제공</strong>: 본 커뮤니티는 무료 공익 프로젝트입니다. 당사는 서비스의 안정성을 확보하기 위해 최대한 노력하지만, 명시적이든 묵시적이든 어떠한 보증도 하지 않습니다. 여기에는 서비스의 중단 없음, 오류 없음, 안전성 및 신뢰성 등이 포함되나 이에 국한되지 않습니다.',
            '<strong>불가항력 및 제3자 사유</strong>: 자연재해, 정책 변경, 네트워크 공격, 통신사 장애 등 불가항력 또는 제3자 사유로 서비스가 중단되거나 데이터가 유실된 경우, 당사는 법적 책임을 지지 않습니다.',
            '<strong>손해의 범위</strong>: 적용 법률이 허용하는 최대 범위 내에서, 당사는 간접 손해(데이터 손실, 이익 손실, 기회 손실 등)에 대해 책임을 지지 않습니다. <strong>다만 본 면책 조항은 당사의 고의 또는 중대한 과실로 인한 손해에는 적용되지 않습니다.</strong>',
            '<strong>이용자 콘텐츠의 위험</strong>: 이용자 간의 오프라인 거래, 사적 약속 또는 의견 분쟁은 본 커뮤니티와 무관하며, 스스로 신중하게 판단하시기 바랍니다.'
          ]
        },

        { t: 'h2', x: '5. 개인정보 보호' },
        { t: 'p', x: '당사는 본 약관의 불가분의 일부인 「Freewd 커뮤니티 개인정보 처리방침」에 따라 귀하의 개인정보를 처리합니다. 반드시 해당 방침을 읽고 이해하시기 바랍니다.' },

        { t: 'h2', x: '6. 서비스 변경 및 종료' },
        {
          t: 'ol',
          items: [
            '<strong>변경 권리</strong>: 당사는 운영상 필요(서버 비용, 기술 업데이트 등)에 따라 서비스의 일부를 조정하거나 일시 중단할 수 있으며, 가능한 한 사전에 커뮤니티 공지를 통해 알립니다.',
            '<strong>서비스 종료</strong>: 이용자가 본 약관을 중대하게 위반한 경우, 당사는 즉시 해당 계정을 정지 또는 종료하고 게시된 콘텐츠를 삭제할 수 있습니다. 이용자도 스스로 계정을 탈퇴할 수 있습니다.',
            '<strong>공익 프로젝트 성명</strong>: 본 커뮤니티는 개인 공익 프로젝트로, 운영자는 유지가 어려워질 경우 <strong>커뮤니티를 완전히 폐쇄할</strong> 권리를 보유합니다. 이 경우 30일 전에 공지하고 이용자가 데이터를 백업할 수 있도록 합니다.'
          ]
        },

        { t: 'h2', x: '7. 약관의 업데이트' },
        { t: 'p', x: '당사는 법령 또는 커뮤니티 운영상 필요에 따라 본 약관을 업데이트할 수 있습니다. 업데이트된 약관은 본 페이지에 게시되며 새로운 "최종 업데이트" 날짜가 명시됩니다. 중대한 변경(데이터 국외 이전 규칙 조정 등)이 있는 경우 이메일 또는 사이트 내 메시지로 알려 드립니다. <strong>서비스를 계속 이용하면 업데이트된 내용에 동의한 것으로 간주됩니다.</strong>' },

        { t: 'h2', x: '8. 준거법 및 분쟁 해결' },
        {
          t: 'ol',
          items: [
            '<strong>준거법</strong>: 본 약관의 체결, 해석, 이행 및 분쟁 해결에는 <strong>중화인민공화국 대륙 지역의 법률</strong>이 적용됩니다.',
            '<strong>분쟁 해결</strong>: 본 약관으로 인해 발생하는 모든 분쟁은 먼저 양측이 우호적인 협상을 통해 해결합니다. 협상이 성립하지 않을 경우, 어느 일방이든 <strong>운영자의 주소지</strong>를 관할하는 인민법원에 소송을 제기할 수 있습니다. 본 커뮤니티가 개인 비상업 공익 프로젝트임을 감안하여, 양측은 우호적 협상을 우선하고 소송을 최대한 피하는 데 동의합니다.',
            '<strong>조항의 효력</strong>: 본 약관의 어느 조항이 무효 또는 집행 불가능한 것으로 판단되더라도 나머지 조항의 효력에는 영향을 미치지 않습니다.'
          ]
        },

        { t: 'h2', x: '9. 문의하기' },
        { t: 'p', x: '본 약관에 대해 궁금한 점, 제안 또는 신고·민원이 있으시면 다음 방법으로 연락해 주시기 바랍니다.' },
        { t: 'p', x: '<strong>이메일</strong>: blockcarft114@foxmail.com' },
        { t: 'p', x: '(운영자가 고등학생이므로 즉시 답변하지 못할 수 있으나, 3영업일 이내에 응답합니다)' },

        { t: 'hr' },

        { t: 'h2', cls: 'doc-title', x: 'Freewd 커뮤니티 개인정보 처리방침' },
        { t: 'p', x: '<strong>최종 업데이트: 2026년 10월 05일</strong>' },
        { t: 'p', x: 'Freewd 커뮤니티(이하 "본 커뮤니티" 또는 "당사")는 귀하의 개인정보와 프라이버시 보호를 매우 중요하게 생각합니다. 본 방침은 귀하가 커뮤니티 서비스를 이용하는 과정에서 당사가 어떻게 개인정보를 수집·이용·저장·보호하는지를 설명합니다. 본 방침은 「중화인민공화국 개인정보보호법」, 「중화인민공화국 사이버안전법」 및 「미성년자보호법」에 근거하여 제정되었습니다.' },
        { t: 'p', x: '<strong>본 방침을 주의 깊게 읽어 주시기 바랍니다.</strong> 본 방침의 내용에 동의하지 않으시는 경우, 즉시 본 커뮤니티 서비스 이용을 중단해 주시기 바랍니다.' },

        { t: 'hr' },

        { t: 'h2', x: '1. 당사가 수집하는 정보' },
        { t: 'p', x: '귀하가 본 커뮤니티 서비스를 이용할 때, 당사는 <strong>공익 교류 플랫폼의 기본 기능</strong>을 구현하기 위해 필요한 정보만을 수집합니다. 이는 "귀하가 직접 제공하는 정보"와 "당사가 자동으로 수집하는 정보" 두 가지로 나뉩니다.' },

        { t: 'h3', x: '(1) 귀하가 직접 제공하는 정보' },
        {
          t: 'table',
          head: ['정보 유형', '수집 목적'],
          rows: [
            ['사용자 이름', '커뮤니티 내에서 귀하의 신원을 표시하고, 게시물·댓글 작성자로 표기하기 위해 사용합니다.'],
            ['이메일 주소', '계정 가입, 로그인 인증, 비밀번호 재설정, 중요 시스템 공지(약관 업데이트 등) 수신에 사용합니다.'],
            ['게시 내용(게시물, 답글, 쪽지)', '커뮤니티 콘텐츠 표시 및 교류를 위해 사용합니다.']
          ]
        },

        { t: 'h3', x: '(2) 당사가 자동으로 수집하는 정보' },
        { t: 'p', x: '귀하가 본 커뮤니티에 접속하거나 이용할 때, 서버 로그에 다음과 같은 기술 정보가 자동으로 기록됩니다.' },
        {
          t: 'table',
          head: ['정보 유형', '수집 목적'],
          rows: [
            ['IP 주소', '이용자 구분, 악의적 공격(예: DDoS) 방지, 익명 접속 통계 생성에 사용합니다.'],
            ['브라우저 유형 및 버전', '페이지 호환성을 최적화하고 귀하의 이용 경험을 향상하기 위해 사용합니다.'],
            ['운영체제', '브라우저 유형과 마찬가지로 기술적 적응을 위해 사용합니다.'],
            ['접속 시각 및 클릭스트림', '인기 콘텐츠를 분석하고 서비스를 개선하기 위해 사용합니다.']
          ]
        },

        { t: 'h2', x: '2. 정보의 이용 방법' },
        { t: 'p', x: '당사는 위 목적을 달성하기 위해 필요한 범위 내에서만 귀하의 정보를 이용합니다. 구체적으로는 다음과 같습니다.' },
        {
          t: 'table',
          head: ['정보', '이용 방법'],
          rows: [
            ['사용자 이름', '신원 표시, 이용자 검색.'],
            ['이메일 주소', '인증 메일 발송, 비밀번호 재설정, 시스템 공지 발송.'],
            ['게시 내용', '커뮤니티 내에 공개 표시하여 다른 이용자가 열람·답글할 수 있도록 합니다.'],
            ['IP 주소, 로그 정보', '보안 위험 분석, 접속량 통계, 기술 장애 점검.']
          ]
        },
        { t: 'p', x: '<strong>당사는 귀하의 정보를 어떠한 상업적 목적으로도 이용하지 않습니다</strong>(광고 게재, 데이터 판매, 프로파일링 수익화 등).' },

        { t: 'h2', x: '3. 정보의 저장과 보호' },
        { t: 'h3', x: '(1) 저장 위치' },
        { t: 'p', x: '<strong>본 커뮤니티의 모든 서버는 중화인민공화국 홍콩특별행정구에 위치해 있습니다.</strong> 이는 귀하가 가입 및 본 서비스 이용 시 제공한 개인정보(사용자 이름, 이메일, 게시 내용, IP 주소 등)가 홍콩으로 전송되어 저장됨을 의미합니다.' },
        { t: 'h3', x: '(2) 보존 기간' },
        {
          t: 'ul',
          items: [
            '귀하의 계정 정보는 귀하가 직접 탈퇴하거나 삭제를 요청할 때까지 보관됩니다.',
            '귀하가 게시한 공개 콘텐츠(게시물, 답글)는 원칙적으로 영구 보존됩니다. 다만 귀하가 직접 삭제하거나 약관 위반으로 삭제된 경우는 예외입니다.',
            '<strong>사이트 내 알림 데이터</strong>는 계정이 존속하는 동안 상호작용 및 시스템 메시지를 표시하기 위해 보관됩니다. 귀하가 직접 탈퇴하면 사이트 내 알림 데이터도 함께 물리적으로 삭제됩니다.',
            '기술 로그(IP 주소, 접속 기록)는 <strong>180일을 초과하지 않는 기간</strong> 동안 보관되며, 보안 분석 및 통계 처리 후 자동으로 익명화됩니다.'
          ]
        },
        { t: 'h3', x: '(3) 보안 조치' },
        { t: 'p', x: '당사는 귀하의 정보를 보호하기 위해 다음과 같은 조치를 취하고 있습니다.' },
        {
          t: 'ul',
          items: [
            '<strong>암호화 전송</strong>: 사이트 전체에 HTTPS를 적용하여 전송 중 데이터 도청을 방지합니다.',
            '<strong>비밀번호 보호</strong>: 계정 비밀번호는 평문으로 저장하지 않고, 안전한 해시(bcrypt 등) 처리 후 저장합니다.',
            '<strong>접근 통제</strong>: 서버 백엔드에는 운영자 본인만 접근할 수 있으며, 강력한 비밀번호와 2단계 인증으로 보호됩니다.',
            '<strong>정기 백업</strong>: 매일 자동으로 데이터베이스를 백업하고, 백업 파일은 암호화하여 별도 위치에 보관합니다.'
          ]
        },
        { t: 'p', x: '<strong>다만, 이해해 주시기 바랍니다. 인터넷 환경은 절대적으로 안전하지 않습니다. 당사는 100%의 데이터 안전을 약속할 수 없으나, 최선을 다해 보호하겠습니다.</strong>' },

        { t: 'h2', x: '4. 제3자 서비스 안내' },
        { t: 'p', x: '커뮤니티의 안정적 운영을 위해 당사는 다음과 같은 제3자 기반 서비스를 이용합니다. 이 서비스들은 기술적 목적으로만 사용되며, 귀하의 개인정보를 다른 용도로 적극적으로 취득하지 않습니다.' },
        {
          t: 'table',
          head: ['서비스 유형', '제공자', '접촉 가능한 정보', '용도'],
          rows: [
            ['CDN 및 보안 보호', 'Cloudflare', 'IP 주소, 요청 시각, 접속 도메인', '콘텐츠 배포 가속화, DDoS 공격 방어'],
            ['이미지 호스팅', 'Telegram', '이미지 파일 및 접속 메타데이터', '이용자가 업로드한 이미지를 저장하여 커뮤니티에 표시']
          ]
        },
        { t: 'p', x: '당사는 귀하의 별도 동의를 받거나 법률이 강제하는 경우(예: 공안기관의 적법한 요청)를 제외하고, 귀하의 개인정보를 다른 어떠한 제3자에게도 판매·대여·공유하지 않습니다.' },

        { t: 'h2', x: '5. 개인정보의 국외 이전에 관한 특별 안내 및 약속' },
        { t: 'p', x: '앞서 설명한 바와 같이, 본 커뮤니티의 서버는 <strong>중국 홍콩</strong>에 위치해 있습니다. 「중화인민공화국 개인정보보호법」에 따라 홍콩특별행정구에 개인정보를 제공하는 것은 <strong>데이터 국외 이전</strong>에 해당합니다.' },
        {
          t: 'ol',
          items: [
            '<strong>명확한 고지</strong>: 귀하는 본 커뮤니티를 개인 공익 프로젝트로 유지하기 위해 귀하의 개인정보가 <strong>중화인민공화국 홍콩특별행정구</strong>에 위치한 서버로 전송되어 저장·처리됨을 명확히 인지하고 동의합니다. 또한 귀하가 게시하는 콘텐츠에 첨부된 이미지 파일은 Cloudflare Worker를 통해 Telegram 서버로 전송되어 저장됩니다.',
            '<strong>컴플라이언스 약속</strong>: 운영자인 본인은 「중화인민공화국 개인정보보호법」 및 관련 규정에 따라 귀하의 개인정보에 대해 중국 대륙과 동등한 수준의 보호를 제공할 것을 약속합니다. 본인은 현재 적극적으로 학습하고 준비하고 있으며, 법률이 요구하는 시점까지 국가인터넷정보판공실에 개인정보 보호 영향 평가 보고서 제출 또는 기타 적용되는 컴플라이언스 요건 충족을 위해 최선을 다할 것입니다.',
            '<strong>위험 부담</strong>: 현재의 데이터 국외 이전 안전성에 우려가 있으시다면 <strong>본 커뮤니티에 가입하거나 이용하지 마십시오</strong>. 계속 이용하시는 것은 귀하가 이 위험을 충분히 이해하고 발생할 수 있는 불이익을 자발적으로 감수함을 의미합니다.',
            '<strong>국외 수신자</strong>: 데이터 수신자는 운영자 본인(중국 대륙의 고등학생)이며, 연락처는 본 방침 말미에 기재되어 있습니다.'
          ]
        },

        { t: 'h2', x: '6. 귀하의 권리' },
        { t: 'p', x: '관련 법령에 따라 귀하는 자신의 개인정보에 대해 다음과 같은 권리를 가집니다. 본 방침 말미의 이메일로 당사에 연락하여 이러한 권리를 행사할 수 있으며, 당사는 <strong>15영업일 이내</strong>에 회신합니다.' },
        {
          t: 'ol',
          items: [
            '<strong>조회</strong>: 당사가 귀하의 개인정보를 보관하고 있는지, 어떤 정보를 보관하고 있는지 알려 줄 것을 요구할 수 있습니다.',
            '<strong>정정</strong>: 정보에 오류(예: 이메일 철자 오류)가 있음을 발견한 경우 정정을 요구할 수 있습니다.',
            '<strong>삭제</strong>: 귀하의 계정 및 모든 관련 데이터의 삭제를 요구할 수 있습니다. 삭제 후 당사는 기술적으로 가능한 범위 내에서 귀하의 게시 내용을 <strong>완전히 제거</strong>합니다. 시스템 구조, 보안 백업 등의 이유로 즉시 완전 삭제할 수 없는 콘텐츠에 대해서는 즉시 <strong>비가역적 익명화 처리</strong>를 하여 귀하의 신원과 연결될 수 없도록 합니다(다만 이미 공개된 게시물은 타인이 캡처하거나 전재할 수 있으며, 당사는 이를 통제할 수 없습니다).',
            '<strong>계정 탈퇴</strong>: 이유를 묻지 않고 언제든지 이메일로 계정 탈퇴를 신청할 수 있습니다.',
            '<strong>동의 철회</strong>: 본 커뮤니티 이용을 중단하고 계정을 탈퇴함으로써 본 방침에 대한 동의를 철회할 수 있습니다.'
          ]
        },

        { t: 'h2', x: '7. 미성년자 보호' },
        { t: 'p', x: '당사는 미성년자의 개인정보 보호를 매우 중요하게 생각합니다.' },
        {
          t: 'ul',
          items: [
            '<strong>일반 원칙</strong>: 만 18세 미만인 경우 보호자의 동의와 지도 아래 본 서비스를 이용해 주시기 바랍니다.',
            '<strong>만 14세 미만 아동</strong>: 만 14세 미만인 경우 반드시 보호자가 본 방침을 읽도록 하고, 「이용약관」 제1조 제3항의 요건에 따라 보호자의 이메일로 성명을 발송하여 <strong>명확한 서면 동의</strong>를 받아야 합니다. 해당 동의를 받고 확인하기 전까지 당사는 기본 열람에 필요한 정보를 초과하여 귀하의 정보를 수집하지 않으며, 게시물 작성·댓글 등 상호작용 기능도 제공하지 않습니다.',
            '<strong>보호자의 권리</strong>: 보호자로서 당사가 귀하의 동의 없이 귀하가 보호하는 아동의 개인정보를 수집한 사실을 발견하신 경우, 즉시 당사에 연락하여 삭제해 주시기 바랍니다.'
          ]
        },

        { t: 'h2', x: '8. 방침의 업데이트' },
        { t: 'p', x: '당사는 법령 또는 운영상 필요에 따라 본 개인정보 처리방침을 업데이트할 수 있습니다. 업데이트된 방침은 본 페이지에 게시되며 "최종 업데이트" 날짜가 갱신됩니다. 중대한 변경(예: 데이터 저장 위치 변경, 제3자 공유 추가)이 있는 경우 이메일 또는 사이트 내 메시지로 알려 드립니다.' },

        { t: 'h2', x: '9. 문의하기' },
        { t: 'p', x: '본 개인정보 처리방침에 대해 궁금한 점이 있거나, 개인정보 관련 권리를 행사하거나, 신고·민원을 제기하고자 하시는 경우 다음으로 연락해 주시기 바랍니다.' },
        { t: 'p', x: '<strong>이메일</strong>: blockcarft114@foxmail.com' },
        { t: 'p', x: '<strong>응답 시간</strong>: 3영업일 이내에 접수를 확인하고, 15영업일 이내에 실질적인 답변을 드립니다.' },

        { t: 'hr' },

        {
          t: 'footer',
          items: [
            '<strong>Freewd Studio</strong><br>',
            '© 2025-2026 Freewd 커뮤니티 | 일부 권리 보유'
          ]
        }
      ]
    }
  };

  /* =========================================================================
   * 2. 渲染器
   * ========================================================================= */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderItem(it) {
    if (it == null) return '';
    if (typeof it === 'string') return '<li>' + it + '</li>';
    var sub = '';
    if (it.sub && it.sub.length) {
      sub = '<ul>' + it.sub.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
    }
    return '<li>' + (it.x || '') + sub + '</li>';
  }

  function renderTable(tb) {
    var head = '<thead><tr>' + tb.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead>';
    var body = '<tbody>' + tb.rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody>';
    return '<table>' + head + body + '</table>';
  }

  function renderBlock(b) {
    if (!b) return '';
    switch (b.t) {
      case 'h1':     return '<h1>' + b.x + '</h1>';
      case 'h2':     return '<h2' + (b.cls ? ' class="' + b.cls + '"' : '') + '>' + b.x + '</h2>';
      case 'h3':     return '<h3>' + b.x + '</h3>';
      case 'p':      return '<p' + (b.cls ? ' class="' + b.cls + '"' : '') + '>' + b.x + '</p>';
      case 'hr':     return '<hr>';
      case 'ul':     return '<ul>' + b.items.map(renderItem).join('') + '</ul>';
      case 'ol':     return '<ol>' + b.items.map(renderItem).join('') + '</ol>';
      case 'table':  return renderTable(b);
      case 'footer': return '<div class="footer">' + b.items.map(function (i) { return '<p>' + i + '</p>'; }).join('') + '</div>';
      default:       return '';
    }
  }

  function renderBlocks(blocks) {
    return blocks.map(renderBlock).join('\n');
  }

  /* =========================================================================
   * 3. 工具函数
   * ========================================================================= */

  function qs(sel) {
    if (!sel) return null;
    if (typeof sel !== 'string') return sel;
    return document.querySelector(sel);
  }

  function normalize(tag) {
    return String(tag || '').toLowerCase().replace(/_/g, '-');
  }

  function detectLocale() {
    // 1) URL 参数 ?lang=xx 优先（方便分享指定语言的链接）
    try {
      var m = /[?&]lang=([^&#]+)/.exec(window.location.search);
      if (m) {
        var fromUrl = matchLocale(decodeURIComponent(m[1]));
        if (fromUrl) return fromUrl;
      }
    } catch (e) { /* ignore */ }

    // 2) 用户上次的选择
    try {
      var stored = global.localStorage && global.localStorage.getItem(STORAGE_KEY);
      if (stored && messages[stored]) return stored;
    } catch (e) { /* ignore */ }

    // 3) 浏览器语言
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];
    for (var i = 0; i < langs.length; i++) {
      var hit = matchLocale(langs[i]);
      if (hit) return hit;
    }
    return DEFAULT_LOCALE;
  }

  function matchLocale(tag) {
    var t = normalize(tag);
    if (!t) return null;
    if (t.indexOf('zh') === 0) {
      // 繁体：Hant / TW / HK / MO
      if (/hant|-tw|-hk|-mo/.test(t) || t === 'zh-tw' || t === 'zh-hk') return 'zh-TW';
      return 'zh-CN';
    }
    if (t.indexOf('ja') === 0) return 'ja';
    if (t.indexOf('ko') === 0) return 'ko';
    if (t.indexOf('en') === 0) return 'en';
    return null;
  }

  function saveLocale(locale) {
    try {
      if (global.localStorage) global.localStorage.setItem(STORAGE_KEY, locale);
    } catch (e) { /* ignore */ }
  }

  /* =========================================================================
   * 4. 语言切换器
   * ========================================================================= */

  var SWITCHER_STYLE_ID = 'agreement-i18n-switcher-style';

  function injectSwitcherStyle() {
    if (document.getElementById(SWITCHER_STYLE_ID)) return;
    var css =
      '.lang-switcher{' +
        'display:flex;flex-wrap:wrap;gap:6px;margin:0 0 28px;padding:0;list-style:none;' +
      '}' +
      '.lang-switcher button{' +
        'font:inherit;font-size:.85em;line-height:1.4;cursor:pointer;' +
        'padding:5px 12px;border-radius:999px;' +
        'border:1px solid var(--border-color,#e0e0e0);' +
        'background:var(--table-bg,#f9f9f9);color:var(--text-color,#333);' +
        'transition:background .15s,border-color .15s,color .15s;' +
      '}' +
      '.lang-switcher button:hover{border-color:#0066cc;color:#0066cc;}' +
      '.lang-switcher button[aria-pressed="true"]{' +
        'background:#0066cc;border-color:#0066cc;color:#fff;font-weight:600;' +
      '}' +
      '.lang-switcher button:focus-visible{outline:2px solid #0066cc;outline-offset:2px;}';
    var style = document.createElement('style');
    style.id = SWITCHER_STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildSwitcher(current) {
    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language / 语言 / 語言 / 言語 / 언어');

    SUPPORTED_LOCALES.forEach(function (loc) {
      if (!messages[loc]) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-locale', loc);
      btn.setAttribute('lang', messages[loc].htmlLang || loc);
      btn.setAttribute('aria-pressed', String(loc === current));
      btn.textContent = messages[loc].label;
      wrap.appendChild(btn);
    });

    wrap.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('button[data-locale]') : null;
      if (!btn) return;
      var loc = btn.getAttribute('data-locale');
      if (!messages[loc]) return;
      saveLocale(loc);
      render(loc);
    });

    return wrap;
  }

  /* =========================================================================
   * 5. 主渲染流程
   * ========================================================================= */

  var state = {
    target: null,       // 内容容器
    switcher: null,     // 切换器容器
    locale: DEFAULT_LOCALE,
    mounted: false
  };

  function render(locale) {
    var pack = messages[locale] || messages[DEFAULT_LOCALE];
    state.locale = messages[locale] ? locale : DEFAULT_LOCALE;

    // 1) 正文
    if (state.target) {
      state.target.innerHTML = renderBlocks(pack.blocks);
    }

    // 2) <html lang>
    document.documentElement.setAttribute('lang', pack.htmlLang || state.locale);

    // 3) <title>
    if (pack.title) document.title = pack.title;

    // 4) <meta name="description">
    if (pack.description) {
      var meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', pack.description);
    }

    // 5) og / twitter 顺带同步（如果页面里有的话）
    ['og:title', 'twitter:title'].forEach(function (prop) {
      var el = document.querySelector('meta[property="' + prop + '"], meta[name="' + prop + '"]');
      if (el && pack.title) el.setAttribute('content', pack.title);
    });
    ['og:description', 'twitter:description'].forEach(function (prop) {
      var el = document.querySelector('meta[property="' + prop + '"], meta[name="' + prop + '"]');
      if (el && pack.description) el.setAttribute('content', pack.description);
    });

    // 6) 切换器按钮状态
    if (state.switcher) {
      var btns = state.switcher.querySelectorAll('button[data-locale]');
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('aria-pressed', String(btns[i].getAttribute('data-locale') === state.locale));
      }
    }

    // 7) 派发事件，方便外部监听
    try {
      document.dispatchEvent(new CustomEvent('agreement:localechange', {
        detail: { locale: state.locale, pack: pack }
      }));
    } catch (e) { /* 老浏览器忽略 */ }

    return state.locale;
  }

  function ensureTarget(sel) {
    var el = qs(sel);
    if (el) return el;

    var created = document.createElement('main');
    created.id = (typeof sel === 'string' && sel.charAt(0) === '#') ? sel.slice(1) : 'agreement-root';
    // 放在 body 最前面，这样原有静态内容不会被埋在下面
    if (document.body.firstChild) {
      document.body.insertBefore(created, document.body.firstChild);
    } else {
      document.body.appendChild(created);
    }
    return created;
  }

  function mount(options) {
    options = options || {};

    // 内容容器
    var targetSel = options.target || '#agreement-root';
    state.target = ensureTarget(targetSel);

    // 语言
    var locale = options.locale || 'auto';
    state.locale = (locale === 'auto') ? detectLocale() : (messages[locale] ? locale : DEFAULT_LOCALE);

    // 切换器
    if (options.switcher !== false) {
      injectSwitcherStyle();
      var holder = qs(options.switcher);
      if (!holder) {
        holder = document.createElement('nav');
        holder.id = 'lang-switcher';
        // 插到内容容器前面
        if (state.target.parentNode) {
          state.target.parentNode.insertBefore(holder, state.target);
        } else {
          document.body.appendChild(holder);
        }
      }
      holder.innerHTML = '';
      state.switcher = holder;
      holder.appendChild(buildSwitcher(state.locale));
    }

    state.mounted = true;
    render(state.locale);
    return state.locale;
  }

  /* =========================================================================
   * 6. 对外 API
   * ========================================================================= */

  var AgreementI18n = {
    /** 支持的语言列表 */
    locales: SUPPORTED_LOCALES.slice(),

    /** 默认语言 */
    defaultLocale: DEFAULT_LOCALE,

    /** 全部文案（只读用途，想改就直接改源码） */
    messages: messages,

    /** 获取某个语言的文案包 */
    getMessages: function (locale) {
      return messages[locale] || messages[DEFAULT_LOCALE];
    },

    /** 当前生效的语言 */
    getLocale: function () {
      return state.locale;
    },

    /** 切换语言（会持久化到 localStorage 并重新渲染） */
    setLocale: function (locale) {
      if (!messages[locale]) return state.locale;
      saveLocale(locale);
      return render(locale);
    },

    /** 自动检测浏览器/存储/URL 中的语言 */
    detectLocale: detectLocale,

    /** 挂载渲染 */
    mount: mount,

    /** 手动渲染指定语言（不改变持久化设置） */
    render: function (locale, target) {
      if (target) state.target = ensureTarget(target);
      return render(locale);
    },

    /** 把当前文案渲染成 HTML 字符串（用于服务端预渲染或调试） */
    toHTML: function (locale) {
      var pack = messages[locale] || messages[DEFAULT_LOCALE];
      return renderBlocks(pack.blocks);
    }
  };

  global.AgreementI18n = AgreementI18n;

  /* =========================================================================
   * 7. 自动初始化
   * ========================================================================= */

  function autoInit() {
    var body = document.body;
    if (!body) return;
    if (body.getAttribute('data-i18n-auto') === 'false') return;

    // 如果页面里已经有静态正文（例如原始 HTML 的那一坨 <h1>…），
    // 自动模式下我们会把它清掉并交给渲染器接管。
    var hasStatic = document.querySelector('body > h1');
    var root = document.getElementById('agreement-root');

    if (hasStatic && !root) {
      // 把 body 里的静态内容搬进一个容器，便于统一替换
      root = document.createElement('main');
      root.id = 'agreement-root';
      var moved = [];
      var node = body.firstElementChild;
      while (node) {
        var next = node.nextElementSibling;
        // 保留脚本标签和其他非文档类元素
        if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'NOSCRIPT') {
          moved.push(node);
        }
        node = next;
      }
      if (moved.length && moved[0].parentNode) {
        moved[0].parentNode.insertBefore(root, moved[0]);
      } else {
        body.appendChild(root);
      }
      moved.forEach(function (n) { root.appendChild(n); });
    }

    mount({ target: '#agreement-root' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

})(typeof window !== 'undefined' ? window : this);