<script setup lang="ts">
import { GlobalStore } from '@/store/modules/global';
import { en, zhCn } from 'element-plus/es/locale';

const globalStore = GlobalStore();

//TODO i18n 国际化翻译

// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false,
});

//配置全局组件大小
const assemblySize = computed((): string => globalStore.assemblySize);

//配置中英文
const i18nLocale = computed((): any => {
  if (globalStore.language && globalStore.language == 'zh') return zhCn;
  if (globalStore.language && globalStore.language == 'en') return en;
});
</script>

<!-- 配置中英文和主题 -->
<template>
  <el-config-provider
    :button="config"
    :size="assemblySize"
    :locale="i18nLocale"
  >
    <RouterView />
  </el-config-provider>
</template>
