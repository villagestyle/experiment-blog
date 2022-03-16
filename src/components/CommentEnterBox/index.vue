<template>
  <!-- 评论输入框组件 -->
  <div class="comment-enter-box-container">
    <el-input
      class="enter-comments"
      v-model="modelValue"
      type="textarea"
      :rows="3"
      resize="none"
      placeholder="输入评论（Enter换行）"
      @input="emits('upload:modelValue', $event)"
    />

    <div v-if="noEmptyComment" class="action-box">
      <el-button type="primary" size="small" :loading="loading" @click="submit">
        发表评论
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: () => false,
  },
});

const emits = defineEmits({
  "upload:modelValue": (value) => {
    return true;
  },

  submit: (value) => {
    return true;
  },
});

// 是否为空评论
const noEmptyComment = computed(() => (props.modelValue.trim() ?? "") !== "");

// 提交评论
const submit = () => {
  emits("submit", props.modelValue);
};
</script>

<style lang="scss" scoped>
.comment-enter-box-container {
  width: 100%;
  padding-left: 20px;
  > .enter-comments {
    & :deep(.el-textarea__inner) {
      border-color: transparent;
      background-color: #f2f3f5;
      &::-webkit-input-placeholder {
        color: #8a919f;
      }
    }
    & :deep(.el-textarea__inner:focus) {
      border-color: $color-focus;
      background-color: #fff;
      &::-webkit-input-placeholder {
        color: #8a919f;
      }
    }
  }
  > .action-box {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>