import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Wandering-Sword-Walkthrough/",
  srcExclude: ["README.md"],
  title: "《逸剑风云决》攻略",
  description: "虚饮茶所著·逸剑风云决·萌新攻略完美路线·全DLC覆盖",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvzhenbo/Wandering-Sword-Walkthrough' }
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "开始阅读", link: "/guide/preface" },
      { text: "图纸与功法", link: "/reference/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "攻略目录",
          items: [
            { text: "前言", link: "/guide/preface" },
            { text: "序章·梧桐村之内出不去", link: "/guide/chapter-00" },
            {
              text: "第一章·武当之前·基础队友·原始存档",
              link: "/guide/chapter-01",
            },
            {
              text: "第二章·武当门人·雷家村·武家旧事",
              link: "/guide/chapter-02",
            },
            { text: "第三章·品剑大会·精英弟子", link: "/guide/chapter-03" },
            { text: "第四章·去关外·围攻天龙", link: "/guide/chapter-04" },
            { text: "第五章·名剑探病·丐帮大支线", link: "/guide/chapter-05" },
            {
              text: "第六章·霹雳门·天水祝寿·传功弟子",
              link: "/guide/chapter-06",
            },
            {
              text: "第七章·玄火疑云·甘泉苦水·执法弟子",
              link: "/guide/chapter-07",
            },
            { text: "第八章·南疆之旅·长生殿", link: "/guide/chapter-08" },
            { text: "第九章·冰轮无缺肖寒光", link: "/guide/chapter-09" },
            { text: "第十章·天佛窟·六派联合", link: "/guide/chapter-10" },
            {
              text: "终章·关外玉龙·武林盟主·天机宫主",
              link: "/guide/chapter-final",
            },
            { text: "萌新注意事项与继承选择", link: "/guide/tips" },
            { text: "多周目与结局条件", link: "/guide/endings" },
            { text: "修改器异种金蝎三线并行方案", link: "/guide/cheat" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "图纸与功法",
          items: [
            { text: "总览", link: "/reference/" },
            { text: "图纸", link: "/reference/blueprints" },
            { text: "心法", link: "/reference/inner-skills" },
            { text: "剑", link: "/reference/sword" },
            { text: "拳", link: "/reference/fist" },
            { text: "刀", link: "/reference/blade" },
            { text: "棍", link: "/reference/staff" },
            { text: "暗器", link: "/reference/hidden-weapons" },
            { text: "轻功", link: "/reference/movement" },
            { text: "传承", link: "/reference/inheritances" },
            { text: "专属装备", link: "/reference/exclusive-equipment" },
            { text: "食谱", link: "/reference/recipes" },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/lvzhenbo/Wandering-Sword-Walkthrough/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    outline: {
      level: [2, 3],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },

    lastUpdated: {
      text: '最后更新于'
    },
    notFound: {
      title: "页面未找到",
      quote:
        "就是没有呗！就算你是武林盟主也没用！",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
    darkModeSwitchLabel: "主题",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
  },
  vite: {
    server: {
      host: true,
    },
  },
});
