<template>
  <!-- 评论组件 -->
  <div class="comment-area-container">
    <div class="portrait"></div>

    <div class="comment">
      <div class="user-box">
        <span>名字</span>
        <span>5小时前</span>
      </div>

      <div class="content">
        全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论全部评论
      </div>

      <div class="action-box">
        <div class="icon--like"><span>点赞</span></div>

        <div v-if="!isClcikReply" class="icon--reply" @click="replyClick(true)">
          <span>回复</span>
        </div>
        <div
          v-else
          class="icon--reply selected-icon"
          @click="replyClick(false)"
        >
          <span>取消回复</span>
        </div>
      </div>

      <div v-if="isClcikReply" class="comment-enter">
        <CommentEnterBox
          ref="commentEnterBoxRef"
          v-model="comment"
          @submit="submit"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, unref } from "vue";
import type { ElInput, Instance } from "element-plus";
type InputInstance = InstanceType<typeof ElInput>;

// 评论输入框 ref
const commentEnterBoxRef = ref<InputInstance>();

const isClcikReply = ref(false); // 是否点击回复

const comment = ref(""); // input评论内容变量

// 点击回复
const replyClick = (action: boolean) => {
  isClcikReply.value = action;

  // 打开
  if (action) {
    nextTick(() => {
      const ref = unref(commentEnterBoxRef);
      ref?.focus();

      // 阻止本次点击时 触发只执行一次的全局点击
      event?.stopPropagation();
      document.onclick = () => {
        isClcikReply.value = false;

        document.onclick = null; // 只执行一次
      };
    });
  }
};

// 提交评论
const submit = (value: string) => {
  console.log(value);
};
</script>

<style lang="scss" scoped>
.comment-area-container {
  display: flex;
  .portrait {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #f4f5f5;
  }
  .comment {
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
        cursor: pointer;
        &:hover {
          color: $color-focus;
        }
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
      .selected-icon {
        color: $color-focus;
      }
    }
    .comment-enter {
      margin-top: 16px;
    }
  }
}
</style>