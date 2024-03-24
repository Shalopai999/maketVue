import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Blog from "@/pages/Blog.vue";
import Project from "@/pages/Project.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/blogDetails",
    name: "blogDetails",
    component: BlogDetails
  },
  {
    path: "/project",
    name: "project",
    component: Project
  },
  {
    path: "/projectDetails",
    name: "projectDetails",
    component: ProjectDetails
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound
  },
  
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    }
})

export default router