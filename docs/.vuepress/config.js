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
                link: '/release/desktop/download'
            },
            {
                text: '帮助',
                link: '/help/desktop/'
            }
        ],

        sidebar: {
            '/release/': [
                {
                    text: '主项目',
                    collapsible: true,
                    children: [
                        '/release/desktop/download',
                        '/release/desktop/history/',
                        '/release/desktop/history/stable',
                        '/release/desktop/history/preview',
                    ]
                }
            ],
            '/help/': [
                {
                    text: '帮助',
                    collapsible: true,
                    children: [
                        '/help/desktop/',
                        '/help/desktop/account',
                        '/help/desktop/dailynote',
                        '/help/desktop/wishlog',
                        '/help/desktop/travelnotes',
                        '/help/desktop/spiralabyss',
                        '/help/desktop/webtool',
                        '/help/desktop/startgame',
                        '/help/desktop/wallpaper',
                        '/help/desktop/maptool',
                    ]
                }
            ]
        },

    },

    plugins: [
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