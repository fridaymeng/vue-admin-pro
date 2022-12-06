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
      component: MainLayout,
      redirect: '/dashboard',
      meta: { title: '首页', permission: ['index'] },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/dashboard/Dashboard"),
          meta: { title: '数据看板', permission: ['dashboard'] }
        },
        {
          path: "node",
          name: "nodeManage",
          redirect: "/node/internal",
          children: [
            {
              path: "internal",
              name: "internalNodeManage",
              component: () => import("@/views/nodeManage/InternalNodes"),
              meta: { title: '内部节点管理', permission: ['nodeManage'] }
            },
            {
              path: "external",
              name: "externalNodeManage",
              component: () => import("@/views/nodeManage/ExternalNodes"),
              meta: { title: '外部节点管理', permission: ['nodeManage'] }
            }
          ]
        },
        {
          path: "rule",
          name: "ruleManage",
          redirect: "/rule/list",
          children: [
            {
              path: "list",
              name: "ruleManageList",
              component: () => import("@/views/ruleManage/list"),
              meta: { title: '规则管理', permission: ['ruleManage'] }
            }
          ]
        },
        {
          path: "data",
          name: "dataManage",
          redirect: "/data/internal",
          children: [
            {
              path: "internal",
              name: "internalDataManage",
              component: () => import("@/views/dataManage/list"),
              meta: { title: '内部数据管理', permission: ['dataManage'] }
            },
            {
              path: "external",
              name: "externalDataManage",
              component: () => import("@/views/dataManage/list"),
              meta: { title: '外部数据管理', permission: ['dataManage'] }
            }
          ]
        },
        {
          path: "project",
          name: "projectManage",
          redirect: "/project/guest",
          children: [
            {
              path: "guest",
              name: "guestManage",
              component: () => import("@/views/projectManage/list"),
              meta: { title: '我方项目管理', permission: ['projectManage'] }
            },
            {
              path: "host",
              name: "hostManage",
              component: () => import("@/views/projectManage/list"),
              meta: { title: '对方项目管理', permission: ['projectManage'] }
            }
          ]
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
