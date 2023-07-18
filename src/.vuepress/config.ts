import { defineUserConfig } from "vuepress";

import { commentPlugin } from "vuepress-plugin-comment2";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/debugKing-github.io/",
  title:"DebugKing",
  lang: "zh-CN",
  description: "这是首页",
  
  head:[
    [ // 百度统计
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?95102fe909d0feeeff8713ebccb5f678";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
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
    //评论
    commentPlugin({
      //选择哪款插件
      provider: "Giscus",
      comment: true,
      //Giscus仓库地址 直接开启的本仓库的评论服务
      repo:"zhaoxin1998/debugKing-github.io",
      repoId:"R_kgDOJ7W1KQ",
      category:"Announcements",
      categoryId:"DIC_kwDOJ7W1Kc4CX9R5",
      mapping:"pathname",
      strict:true,
    }),
    //复制版权
    copyrightPlugin({
      author: "Mr.debugKing",
      license: "MIT",
      canonical: "https://zhaoxin1998.github.io/debugKing-github.io/",
      global: true,
      triggerWords: 5
    }),
    //图片复制下载
    lightgalleryPlugin({
      //操作页面 DOM 的延时，单位 ms
      delay:1000
    }),
    //预计阅读时间与字数统计生成
    readingTimePlugin({}),
    //全文检索
    searchProPlugin({
      indexContent: true,
      hotReload: true,
    }),
    //进度条
    nprogressPlugin(),
    //代码高亮
    prismjsPlugin({
      preloadLanguages:['markdown', 'jsdoc', 'yaml']
    })
  ],
});
