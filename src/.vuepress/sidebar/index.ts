import { sidebar } from "vuepress-theme-hope";
import { studySidebar } from "./study"
import { workTaskSidebar } from "./life-essay"
import { resourceSidebar } from "./resource"
import { hobbiesSidebar } from "./happy"

export const Sidebar = sidebar({
  '/study/': studySidebar,
  '/life-essay/': workTaskSidebar,
  '/resource/': resourceSidebar,
  '/happy/': hobbiesSidebar,
});
