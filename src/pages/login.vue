<script lang="ts" setup>
import request from '@/utils/axios';

const getToken = async () => {
  const res = await request({
    url: '/user/login',
    method: 'get',
  });
  console.log(res);
};
getToken();
</script>

<template>
  <h1>{{ add }}</h1>
  <n-button type="primary">Default</n-button>
  <div>登录</div>
</template>
