module.exports = {
  title: 'JayZHZ的博客',
  description: '欢迎来访',
  head: [
    ['link', { rel: 'icon', href: '/log.png' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "JayZHZ/JayBlog",
    lastUpdated: 'Last Updated',
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
    }
  },
  evergreen: true
}