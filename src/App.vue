<script setup lang="ts">
import { GlobalStore } from '@/store/modules/global';

const globalStore = GlobalStore();

//TODO i18n 国际化翻译

// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false,
});

//配置全局组件大小
const assemblySize = computed((): string => globalStore.assemblySize);
</script>

<!-- 配置中英文和主题 -->
<template>
  <el-config-provider :button="config" :size="assemblySize">
    <RouterView />
  </el-config-provider>
</template>
