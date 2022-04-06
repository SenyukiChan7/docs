module.exports = {

    lang: 'zh-CN',
    title: '寻空',
    description: '寻空',

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.64.webp',
        repo: 'https://github.com/Scighost/Xunkong',
        docsRepo: 'https://github.com/Scighost/Xunkong-Docs',
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页',

        navbar: [
            {
                text: '下载',
                children: [
                    {
                        text: '下载安装',
                        link: '/releases/download'
                    },
                    {
                        text: '历史版本',
                        link: '/releases/history/'
                    }
                ]
            },
            {
                text: '帮助',
                link: '/help/'
            }
        ],

        sidebar: {
            '/releases/download': [
                {
                    children: [
                        '/releases/download',
                    ]
                }
            ],
            '/releases/history/': [
                {
                    text: '历史版本',
                    children: [
                        '/releases/history/',
                        '/releases/history/stable',
                        '/releases/history/preview',
                    ]
                }
            ],
            '/help/': [
                {
                    text: '帮助',
                    children: [
                        '/help/',
                        '/help/account',
                        '/help/dailynote',
                        '/help/wishlog',
                        '/help/travelnotes',
                        '/help/webtool',
                        '/help/startgame',
                        '/help/wallpaper',
                        '/help/maptool',
                    ]
                }
            ]
        },

    },    plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  openIssueText: "你认为该查询应该有结果？",
                  openIssueLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    ],
  ],
}