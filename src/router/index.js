import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/layouts/Main"),
      redirect: "/dashboard",
      meta: { title: "首页", permission: ["index"] },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          meta: { title: "数据看板", permission: ["dashboard"] },
          redirect: "/dashboard/analysis",
          children: [
            {
              path: "analysis",
              name: "analysis",
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import("@/views/dashboard/Analysis"),
              meta: { title: "分析页", permission: ["analysis"] },
            }
          ]
        },
        {
          path: "list",
          name: "list",
          redirect: "/list/base",
          children: [
            {
              path: "base",
              name: "baseList",
              component: () => import("@/views/list/Base"),
              meta: { title: "标准列表", permission: ["baseList"] },
            }
          ]
        },
        {
          path: "form",
          name: "form",
          redirect: "/form/base",
          children: [
            {
              path: "base",
              name: "baseForm",
              component: () => import("@/views/form/Base"),
              meta: { title: "标准表单", permission: ["baseForm"] },
            }
          ]
        }
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/user/Login"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // 避免无限重定向
    to.name !== "Login"
  ) {
    // 将用户重定向到登录页面
    return { name: "Login" };
  } else if (to.name === "Login" && isAuthenticated) {
    return { path: "/" };
  }
});

export default router;
