import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/user/Login";
import MainLayout from "@/layouts/Main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => MainLayout,
      redirect: '/dashboard',
      meta: { title: '首页', permission: ['dashboard'] },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/dashboard/Dashboard.vue"),
          meta: { title: '数据看板', permission: ['dashboard'] }
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    }
  ]
});

router.beforeEach(async (to, from) => {
  const isAuthenticated = localStorage.getItem('authenticated');
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  } else if (to.name === 'Login' && isAuthenticated) {
    return { path: '/' }
  }
})

export default router;
