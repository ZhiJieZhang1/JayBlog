module.exports = {
  title: ' JanssenZhang的博客',
  description: '欢迎来访',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: " JanssenZhang/JayBlog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: 'PHP基础',
          collapsable: false,
          children: [
            "php-basis",
            "php-function"
          ]
        }
      ]
    },
    lastUpdated: "Last Updated",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
          margin: 16
      }
    },
    '@vuepress/back-to-top':true
  },
  evergreen: true
}