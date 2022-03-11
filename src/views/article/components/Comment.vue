<template>
  <!-- 评论组件 -->
  <div class="conment-box">
    <div class="portrait"></div>

    <div class="conment">
      <div class="user-box">
        <span>名字</span>
        <span>5小时前</span>
      </div>

      <div class="content">
        全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论
      </div>

      <div class="action-box">
        <div class="icon--like"><span>点赞</span></div>
        <div class="icon--reply"><span>回复</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.conment-box {
  display: flex;
  .portrait {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #f4f5f5;
  }
  .conment {
    width: 100%;
    margin-left: 20px;
    .user-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 22px;
      > span:nth-child(1) {
        font-size: 15px;
        color: $color-text-regular;
      }
      > span:nth-child(2) {
        font-size: 14px;
        color: $color-text-secondary;
      }
    }
    .content {
      font-weight: 400;
      font-size: 14px;
      color: $color-text-regular;
      margin-top: 8px;
      line-height: 1.6;
      @include line-2;
      -webkit-line-clamp: 3;
    }
    .action-box {
      display: flex;
      margin-top: 8px;
      color: $color-text-secondary;
      > div {
        font-size: 14px;
        > span {
          margin-left: 5px;
        }
      }
      .icon--reply {
        &::before {
          position: relative;
          top: 1px;
        }
      }
      > div + div {
        margin-left: 20px;
      }
    }
  }
}
</style>