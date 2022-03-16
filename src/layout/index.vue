<template>
  <div class="app-wrapper">
    <div class="main-container">
      <!-- 导航条 -->
      <Nav />

      <!-- 主要内容 -->
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>