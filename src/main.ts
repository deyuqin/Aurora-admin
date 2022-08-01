import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from '@/store';
import router from './router';

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(pinia);

//挂载router
app.use(router);

//挂载ui框架
// app.use(naive)

//挂载实例
app.mount('#app');
