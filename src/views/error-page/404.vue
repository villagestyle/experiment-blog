<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="PNG" alt="404" />
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">注意!</div>
        <div class="bullshit__headline">无法进入这个页面</div>
        <div class="bullshit__info">
          请检查您输入的网址是否正确，或单击下面的按钮返回主页。
        </div>
        <a href="/" class="bullshit__return-home">返回主页</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PNG from "assets/image/404/404.png";
</script>

<style lang="scss" scoped>
.wscn-http404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
}
.wscn-http404 {
  position: relative;
  padding: 0 50px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  .pic-404 {
    position: relative;
    width: 500px;
    overflow: hidden;
    &__parent {
      width: 100%;
    }
  }
  .bullshit {
    position: relative;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    flex-shrink: 0;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

// 超出大小后的样式
@media (max-width: 992px) {
  .pic-404 {
    display: none;
  }
}
</style>
