import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// 挂载pinia
import pinia from '@/store';
//挂载router
import router from './router';
// vue i18n
import i18n from '@/language/index';

// 创建vue实例
const app = createApp(App);

app.use(pinia).use(router).use(i18n);

//挂载实例
app.mount('#app');
