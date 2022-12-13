<script setup>
import { onMounted, inject, ref } from 'vue';
const d3 = inject('d3');
const chart = ref();
onMounted(() => {
  setInterval(() => {
    d3.select(chart.value).html(Math.random());
  }, 100);
});
</script>
<template>
  <div class="wrap">
    <div ref="chart"></div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  padding: 0;
}
</style>
