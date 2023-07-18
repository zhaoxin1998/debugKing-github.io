import { navbar } from "vuepress-theme-hope";


export const Navbar = navbar([
    "/",
    { text: "技术文档", icon: "book", link: "/study/" },
    { text: "生活随笔", icon: "pen", link: "/life-essay/" },
    { text: "好物推荐", icon: "box", link: "/resource/" },
    { text: "幽默段子", icon: "palette", link: "/happy/" },
]);