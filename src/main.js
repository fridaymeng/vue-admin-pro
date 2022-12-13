import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import * as d3 from 'd3';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import '@/assets/reset.css';
// import './utils/useUiComponents';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.provide('d3', d3);

app.mount('#app');
