<template>
  <div class="container">
    <div class="main">
      <div class="item">
        <a>
          <img
            height="440"
            width="680"
            src="https://w.laborers.cn/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://w.laborers.cn/wp-content/uploads/2022/02/wallhaven-674018-1.jpeg"
          />
        </a>

        <div class="describe">
          <p>2月 24, 2022</p>
          <h3>题目题目</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>2月 24, 2022</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.container {
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 200%;
    position: absolute;
    left: 50%;
    background: $bg-c;
    top: -50%;
    z-index: 0;
  }
  .item {
    margin-top: 100px;
    @include flex-center;
    .describe {
      position: relative;
      width: 500px;
      height: 400px;
      border: 1px solid $bg-c;
      padding: 80px;
      p:nth-child(1) {
        font-size: 12px;
        color: $c-tips;
      }
      h3:nth-child(2) {
        margin-top: 10px;
        color: $c-main;
        font-weight: 600;
      }
      p:nth-child(3) {
        margin-top: 10px;
        color: $c-normal;
        font-size: 14px;
        line-height: 1.8;
        @include line-2;
        -webkit-line-clamp: 5;
      }
      p:nth-child(4) {
        color: $c-tips;
        font-size: 13px;
        position: absolute;
        bottom: 80px;
      }
    }
  }
}
</style>
