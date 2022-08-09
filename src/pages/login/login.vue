<template>
  <div class="login-body">
    <div class="login-main">
      <div class="login-left">
        <img src="@/assets/images/login.png" alt="login" />
      </div>
      <div class="login-form"><LoginForm></LoginForm></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>

<script lang="ts" setup>
import LoginForm from '@/pages/login/components/LoginForm.vue';
</script>
