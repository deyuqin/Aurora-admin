<script lang="ts" setup>
import { loginApi } from '@/api/module/login';

let obj = {};
async function _login() {
  const res = await loginApi();
}
_login();
</script>

<template>
  <el-button type="primary">Default</el-button>
  <div>登录</div>
</template>
