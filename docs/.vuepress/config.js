module.exports = {

    lang: 'zh-CN',
    title: '寻空',
    description: '寻空',

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.64.webp',
        repo: 'https://github.com/Scighost/Xunkong-Docs',
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
            ]
        },

    },
}