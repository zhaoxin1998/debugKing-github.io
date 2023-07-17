import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { searchProPlugin } from 'vuepress-plugin-search-pro';

// import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/debugKing-github.io/",
  title:"DebugKing",
  lang: "zh-CN",
  description: "这是首页",
  
  head:[

  ],
  theme,
  plugins: [
    // docsearchPlugin({
    //   apiKey: '98eef3cbbc84f0cd80b63f4cb53f9a51',
    //   indexName: 'songbaichengio',
    //   appId: 'XLRE2KQH6J',
    // }),
    // searchProPlugin({
    //   // 配置选项
    //   autoSuggestions: true,
    //   // 自定义热键
    //   hotKeys: [{ key: 'k', ctrl: true }],
    // }),
  ],

});
