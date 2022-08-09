<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    status-icon
    :rules="loginRules"
    size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" type="text" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
const loginForm = reactive({
  username: '',
});

const loginRules = reactive({});
</script>
