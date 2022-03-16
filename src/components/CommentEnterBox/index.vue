<template>
  <!-- 评论输入框组件 -->
  <div class="comment-enter-box-container" @click.stop="middleLayerClick">
    <el-input
      ref="inputRef"
      class="enter-comments"
      v-model="modelValue"
      type="textarea"
      :rows="3"
      resize="none"
      placeholder="输入评论（Enter换行）"
      @input="emits('upload:modelValue', $event)"
    />

    <div v-if="noEmptyComment" class="action-box">
      <el-button type="primary" :loading="loading" @click="submit">
        发表评论
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, unref } from "vue";
import type { ElInput } from "element-plus";
type InputInstance = InstanceType<typeof ElInput>;

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

const inputRef = ref<InputInstance>();

// 是否为空评论
const noEmptyComment = computed(() => (props.modelValue.trim() ?? "") !== "");

// 组件中间层阻止 底部子级组件渗透
const middleLayerClick = () => {};

// 提交评论
const submit = () => {
  emits("submit", props.modelValue);
};

// 控制输入框获取焦点
const focus = () => {
  const ref = unref(inputRef);
  ref?.focus();
};

defineExpose({
  focus,
});
</script>

<style lang="scss" scoped>
.comment-enter-box-container {
  width: 100%;
  > .enter-comments {
    & :deep(.el-textarea__inner) {
      box-shadow: none;
      background-color: #f2f3f5;
      &::-webkit-input-placeholder {
        color: #8a919f;
      }
    }
    & :deep(.el-textarea__inner:focus) {
      box-shadow: 0 0 0 1px $color-focus inset;
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