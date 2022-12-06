<script setup>
import {
  Switch,
  Menu as IconMenu,
  Connection,
  Setting,
  Folder
} from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const active = ref('0');
onMounted(() => {
  const $router = useRouter();
  active.value = $router.currentRoute.value.name;
})
</script>
<template>
  <div>
    <div class="wrap">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            :router="true"
          >
            <el-menu-item index="0" :route="{ path: '/' }">
              <el-icon><icon-menu /></el-icon>
              <span>数据看板</span>
            </el-menu-item>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Connection /></el-icon>
                <span>节点管理</span>
              </template>
              <el-menu-item index="internalNodeManage" :route="{ name: 'internalNodeManage' }">内部节点</el-menu-item>
              <el-menu-item index="externalNodeManage" :route="{ name: 'externalNodeManage' }">外部节点</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>规则管理</span>
              </template>
              <el-menu-item index="ruleManageList" :route="{ name: 'ruleManage' }">规则列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><Folder /></el-icon>
                <span>数据管理</span>
              </template>
              <el-menu-item index="internalDataManage" :route="{ name: 'dataManage' }">内部数据</el-menu-item>
              <el-menu-item index="externalDataManage" :route="{ name: 'dataManage' }">合作数据</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <el-icon><Switch /></el-icon>
                <span>项目管理</span>
              </template>
              <el-menu-item index="guestManage" :route="{ name: 'projectManage' }">我方发起的项目</el-menu-item>
              <el-menu-item index="hostManage" :route="{ name: 'projectManage' }">对方协同的项目</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  padding: 0;
  .el-menu {
    min-height: 100vh;
    .el-sub-menu .el-menu-item {
      padding-left: 50px!important;
    }
  }
}
</style>
