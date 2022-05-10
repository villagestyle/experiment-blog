<template>
  <div class="nav-search-container">
    <!-- <el-input
      v-if="inputType === 1"
      class="dis-input"
      :suffix-icon="Search"
      placeholder="搜索"
      @click="disClick"
    /> -->

    <el-popover
      popper-class="search-popover-container"
      placement="bottom"
      trigger="click"
      :width="270"
      :show-after="50"
      :hide-after="50"
      :teleported="false"
    >
      <template #reference>
        <el-input
          ref="inputRef"
          class="search-input"
          :suffix-icon="Search"
          placeholder="搜索文章/用户"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </template>

      <div class="popover-container">
        <div class="header">
          <span class="tips">搜索历史</span>
          <el-button type="primary" text class="clear">清空</el-button>
        </div>

        <ul class="content">
          <li class="item">搜索记录1</li>
          <li class="item">搜索记录2</li>
        </ul>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref, nextTick } from "vue";
import { Search } from "@element-plus/icons-vue";
import type { ElInput } from "element-plus";
type InputInstance = InstanceType<typeof ElInput>;

let inputType = ref(1); // 切换 不同类型input 1--原始 2--输入

let popoverShow = ref(false); // poppver 显示或隐藏

const inputRef = ref<InputInstance>(); // input 的 ref

// 点击禁用的input时
const disClick = () => {
  inputType.value = 2;

  nextTick(() => {
    const ref = unref(inputRef);
    console.log(ref);
    ref?.focus();
  });
};

const inputFocus = () => {
  popoverShow.value = true;
};

// 可输入的input 失去焦点时
const inputBlur = () => {
  popoverShow.value = false;
};
</script>

<style lang="scss" scoped>
.nav-search-container {
  height: 100%;
  display: flex;
  align-items: center;
  .dis-input {
    width: 180px;
    & :deep(.el-input__inner) {
      background-color: #f2f3f5;
      &::-webkit-input-placeholder {
        color: $color-text-secondary;
      }
    }
  }
  .search-input {
    width: 270px;
  }
}

.popover-container {
  .header {
    height: 36px;
    line-height: 36px;
    @include flex-center;
    justify-content: space-between;
    .tips {
      font-size: 12px;
      color: $color-text-secondary;
    }
    .clear {
      font-size: 12px;
    }
  }
  .content {
    font-size: 12px;
    color: $color-text-regular;
    .item {
      height: 36px;
      line-height: 36px;
      cursor: pointer;
      width: 100%;
      margin-left: -15px;
      padding: 0 15px;
      &:hover {
        background-color: #eff2f5;
      }
    }
  }
}
</style>
<style lang="scss">
.search-popover-container {
  padding: 0 15px !important;
}
</style>