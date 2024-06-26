import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/notes/",
    title: "艾门传说",
    description: "门的成神之路",

    // lastUpdated: true,
    themeConfig: {
        //页脚配置
        footer: {
            // message: 'Released under the MIT License.',
            copyright: '艾门传说 © 2024-present Masato'
        },
        //最后更新时间配置
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'long',
                // timeStyle: 'medium' 时分秒，这里不需要就不加了= =
            }
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
            // options: {
            //     appId: '6CVQ2MLIBR',
            //     apiKey: 'e2db58a9bdfc1f91405aaf06978755d1',
            //     indexName: 'liumang2513io',
            //     //i18国际化配置
            //     locales: {
            //         zh: {
            //             placeholder: '搜索文档',
            //             translations: {
            //                 button: {
            //                     buttonText: '搜索文档',
            //                     buttonAriaLabel: '搜索文档'
            //                 },
            //                 modal: {
            //                     searchBox: {
            //                         resetButtonTitle: '清除查询条件',
            //                         resetButtonAriaLabel: '清除查询条件',
            //                         cancelButtonText: '取消',
            //                         cancelButtonAriaLabel: '取消'
            //                     },
            //                     startScreen: {
            //                         recentSearchesTitle: '搜索历史',
            //                         noRecentSearchesText: '没有搜索历史',
            //                         saveRecentSearchButtonTitle: '保存至搜索历史',
            //                         removeRecentSearchButtonTitle: '从搜索历史中移除',
            //                         favoriteSearchesTitle: '收藏',
            //                         removeFavoriteSearchButtonTitle: '从收藏中移除'
            //                     },
            //                     errorScreen: {
            //                         titleText: '无法获取结果',
            //                         helpText: '你可能需要检查你的网络连接'
            //                     },
            //                     footer: {
            //                         selectText: '选择',
            //                         navigateText: '切换',
            //                         closeText: '关闭',
            //                         searchByText: '搜索提供者'
            //                     },
            //                     noResultsScreen: {
            //                         noResultsText: '无法找到相关结果',
            //                         suggestedQueryText: '你可以尝试查询',
            //                         reportMissingResultsText: '你认为该查询应该有结果？',
            //                         reportMissingResultsLinkText: '点击反馈'
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            // {text: 'Examples', link: '/markdown-examples'},
            {
                text: '后端',
                items: [
                    {
                        text: '消息中间件',
                        link: '/backend/mq/消息中间件'
                    },
                    {
                        text: 'Nginx',
                        link: '/backend/nginx/nginx子请求鉴权'
                    },
                    {
                        text: 'Utils',
                        link: '/backend/utils/DynamicMergeHeader'
                    },
                    {
                        text: 'Java',
                        link: '/backend/java/Java-22/Java-22'
                    },
                    {
                        text: 'Linux常用命令',
                        link: '/backend/linux/Linux常用命令'
                    }
                ]
            }
        ],
// 多侧边栏（不实用，弃置）
        /* sidebar: {
             '/backend/mq/消息中间件': [
                 {
                     text: '消息中间件',
                     items: [
                         {
                             text: 'MQ',
                             link: '/backend/mq/消息中间件'
                         }
                     ]
                 }
             ],
             '/backend/nginx/nginx子请求鉴权': [
                 {
                     text: 'Nginx',
                     items: [
                         {
                             text: 'nginx子请求鉴权',
                             link: '/backend/nginx/nginx子请求鉴权'
                         }
                     ]
                 }
             ],
             '/backend/utils/DynamicMergeHeader': [
                 {
                     text: 'Utils',
                     items: [
                         {
                             text: 'DynamicMergeHeader',
                             link: '/backend/utils/DynamicMergeHeader'
                         },
                         {
                             text: 'exportWord',
                             link: '/backend/utils/exportWord'
                         },
                         {
                             text: 'permissionControl',
                             link: '/backend/utils/permissionControl'
                         }
                     ]
                 }
             ]

         },*/

        sidebar: [
            {
                text: '后端仔相关',
                collapsed: false,
                items: [
                    {
                        text: '消息中间件',
                        collapsed: true,
                        items: [
                            {
                                text: 'MQ',
                                link: '/backend/mq/消息中间件'
                            }
                        ]
                    },
                    {
                        text: 'Nginx',
                        collapsed: true,
                        items: [
                            {
                                text: 'nginx子请求鉴权',
                                link: '/backend/nginx/nginx子请求鉴权'
                            }
                        ]
                    },
                    {
                        text: 'Utils',
                        collapsed: true,
                        items: [
                            {
                                text: 'DynamicMergeHeader',
                                link: '/backend/utils/DynamicMergeHeader'
                            },
                            {
                                text: 'exportWord',
                                link: '/backend/utils/exportWord'
                            },
                            {
                                text: 'permissionControl',
                                link: '/backend/utils/permissionControl'
                            }
                        ]
                    },
                    {
                        text: 'Java',
                        collapsed: true,
                        items: [
                            {
                                text: 'JDK-22',
                                link: '/backend/java/Java-22/Java-22'
                            }
                        ]
                    },
                    {
                        text: 'Linux',
                        collapsed: true,
                        items: [
                            {
                                text: 'Linux常用命令',
                                link: '/backend/linux/Linux常用命令'
                            }
                        ]
                    }
                ]
            }

        ],

        socialLinks: [
            {icon: 'github', link: 'https://www.baidu.com'}
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        outline: {
            label: '目录',
            level: [1, 2]
        },
    }
})
