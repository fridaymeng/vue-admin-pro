<script setup>
import { onMounted, inject, ref } from 'vue';
const echarts = inject('echarts');
const chart = ref();
let data = [];
let xData = [];
let myCharts;
function renderCharts() {
  myCharts = echarts.init(chart.value);
  // 绘制图表
  myCharts.setOption(
    {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Random']
      },
      grid: {
        left: 0,
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Random',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: data
        }
      ]
    },
    true
  );
}
function getRandom() {
  let num = 0;
  const interNum = 100000;
  setInterval(() => {
    num++;
    const rst = Number.parseInt(Math.random() * interNum);
    data.push(rst);
    xData.push(num);
    if (data.length > 50) {
      data.shift();
      xData.shift();
    }
    myCharts.setOption({
      xAxis: {
        data: xData
      },
      series: [
        {
          data: data
        }
      ]
    });
  }, 1000);
}
onMounted(() => {
  renderCharts();
  getRandom();
});
</script>
<template>
  <div class="wrap">
    <div ref="chart" style="height: 300px"></div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  padding: 0;
}
</style>
