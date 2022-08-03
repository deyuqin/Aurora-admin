import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import en from './modules/en';

const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局注册$t方法
  locale: 'zh',
  messages: {
    zh,
    en,
  },
});

export default i18n;
