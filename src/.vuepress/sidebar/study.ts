import { arraySidebar } from "vuepress-theme-hope";

export const studySidebar = arraySidebar([
    {
        text: 'Java',
        icon: 'java',
        collapsible: true,
        children: [
            {
                text: 'JavaEE',
                collapsible: true,
                children: [
                    // '/study/backend/java/basic/dynamic-proxy.md',
                    // '/study/backend/java/basic/concurrency.md',
                ],
            },
            {
                text: 'JavaSE',
                collapsible: true,
                children: [
                    '/study/java/javaSE/01-异常.md',
                    '/study/java/javaSE/02-枚举.md',
                    '/study/java/javaSE/03-数组.md',
                    '/study/java/javaSE/05-集合.md',
                    '/study/java/javaSE/10-注解与反射.md',
                    '/study/java/javaSE/13-正则表达式.md',

                ],
            }
        ]
    },
    {
        text: '持久化',
        icon: 'storage',
        collapsible: true,
        children: [
            '/study/persistence/README.md',
            '/study/persistence/redis.md'
        ]
    },
    {
        text: '前端技术',
        icon: 'chrome',
        collapsible: true,
        children: [
            '/study/frontend/README.md',
            '/study/frontend/language/es6.md',
            '/study/frontend/language/typescript.md',
            '/study/frontend/framework/vue3.md',
            '/study/frontend/framework/pinia.md',
        ]
    },
    {
        text: '设计模式',
        icon: 'quote',
        collapsible: true,
        children: [
            '/study/design-pattern/README.md',
            '/study/design-pattern/observer.md'
        ]
    },
    {
        text: '数据结构',
        icon: 'tree',
        collapsible: true,
        children: [
            '/study/ads/data-structure/README.md',
            '/study/ads/data-structure/linear-list.md',
        ]
    },
    {
        text: '算法',
        icon: 'calculate',
        collapsible: true,
        children: [
            '/study/ads/algorithms/README.md',
            '/study/ads/algorithms/leetcode.md',
        ]
    },
    {
        text: 'Linux 运维',
        icon: 'linux',
        collapsible: true,
        children: [
            '/study/maintenance/README.md',
            '/study/maintenance/1panel.md',
        ]
    },
])