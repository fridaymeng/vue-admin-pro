<script setup>
import AsiceMenu from '@/components/AsideMenu';
import HeadMenu from '@/components/HeadMenu';
</script>
<template>
  <div class="wrap">
    <el-container>
      <el-header class="header-wrap">
        <el-row :gutter="20">
          <el-col :span="12">
            <h3>GageWay</h3>
          </el-col>
          <el-col :span="12">
            <HeadMenu />
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside-wrap">
          <AsiceMenu />
        </el-aside>
        <el-main>
          <!--<router-view></router-view>-->
          <router-view v-slot="{ Component, route }">
            <Transition>
              <component :is="Component" :key="route.path" />
            </Transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="less">
.wrap {
  padding: 0;
  .header-wrap {
    background: #08c;
    h3 {
      line-height: 100%;
      color: #fff;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
  .v-enter-active {
    transition-delay: 0.2s;
  }
  .v-enter-from,
  .v-leave-to {
    transform: scale(0, 0);
  }
}
</style>
