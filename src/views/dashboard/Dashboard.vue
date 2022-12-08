<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  console.log(345);
});
</script>
<template>
  <div class="wrap">
    <div id="chartdiv"></div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  padding: 0;
  #chartdiv {
    width: 100%;
    height: 600px;
  }
}
</style>
