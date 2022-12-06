<script setup>
import { ArrowDown } from '@element-plus/icons-vue';
import router from "@/router";
function handleLogOut() {
  localStorage.removeItem('authenticated');
  router.push('/login');
}
</script>
<template>
  <div>
    <div class="wrap">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item @click="handleLogOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="less" scoped>
.wrap {
  padding: 20px 5px 0 0;
  text-align: right;
  .el-dropdown-link {
    color: #fff;
  }
}
</style>
