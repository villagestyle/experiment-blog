<template>
  <header class="header-container">
    <a class="logo" href=""></a>

    <nav class="nav-container">
      <div class="nav-item nav-item--selection">社区</div>

      <div class="nav-item">个人中心</div>
    </nav>

    <div class="action-container">
      <NavSearch />

      <div class="login-container">
        <el-button size="small" type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </header>

  <Login v-model="visible" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);

const login = () => {
  visible.value = true;
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f7f7f7;
  background: #fefefe;
  .logo {
    display: inline-block;
    width: 25%;
    height: 100%;
    margin: 0 16px;
  }
  .nav-container {
    width: 45%;
    display: flex;
    font-size: 16px;
    margin: 0 16px;
    color: $color-text-regular;
    .nav-item {
      height: 100%;
      cursor: pointer;
      position: relative;
      margin: 0 16px;
      @include flex-center;
      &:hover {
        &::before {
          content: "";
          position: absolute;
          top: auto;
          right: 0;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: $color-primary;
        }
      }
    }
    .nav-item--selection {
      color: $color-primary;
    }
  }
  .action-container {
    width: 30%;
    display: flex;
    margin: 0 16px;
    .login-container {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 16px;
    }
  }
}
</style>