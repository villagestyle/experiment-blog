<template>
  <header class="header-container">
    <a class="logo" href=""></a>

    <nav class="nav-container">
      <div class="nav-item nav-item--selection">社区</div>

      <div class="nav-item">个人中心</div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
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
    width: 20%;
    height: 100%;
  }
  .nav-container {
    width: 80%;
    display: flex;
    font-size: 16px;
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
}
</style>