<script setup>
import {
  Switch,
  Menu as IconMenu,
  Connection,
  Setting,
  Folder
} from '@element-plus/icons-vue';
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>数据看板</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Connection /></el-icon>
            <span>节点管理</span>
          </template>
          <el-menu-item index="2-1">内部节点</el-menu-item>
          <el-menu-item index="2-2">外部节点</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>规则管理</span>
          </template>
          <el-menu-item index="2-1">规则列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Folder /></el-icon>
            <span>数据管理</span>
          </template>
          <el-menu-item index="3-1">内部数据</el-menu-item>
          <el-menu-item index="3-2">合作数据</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Switch /></el-icon>
            <span>项目管理</span>
          </template>
          <el-menu-item index="4-1">我方发起的项目</el-menu-item>
          <el-menu-item index="4-2">我方协同的项目</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style scoped lang="less">
.wrap {
  padding: 0;
}
</style>
