<script setup>
import { Connection, Edit } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const active = ref('0');
onMounted(() => {
  const $router = useRouter();
  active.value = $router.currentRoute.value.name;
});
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
            <!--<el-menu-item index="0" :route="{ path: '/' }">
              <el-icon><icon-menu /></el-icon>
              <span>数据看板</span>
            </el-menu-item>-->
            <el-sub-menu index="0">
              <template #title>
                <el-icon><Connection /></el-icon>
                <span>数据看板</span>
              </template>
              <el-menu-item index="analysis" :route="{ name: 'analysis' }"
                >分析页</el-menu-item
              >
            </el-sub-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Connection /></el-icon>
                <span>列表页</span>
              </template>
              <el-menu-item index="baseList" :route="{ name: 'baseList' }"
                >标准列表</el-menu-item
              >
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Edit /></el-icon>
                <span>表单页</span>
              </template>
              <el-menu-item index="baseForm" :route="{ name: 'baseForm' }"
                >标准表单</el-menu-item
              >
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
      padding-left: 50px !important;
    }
  }
}
</style>
