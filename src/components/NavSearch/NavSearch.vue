<template>
  <div class="nav-search-container">
    <a-popover placement="bottom" trigger="click" v-model:visible="popoverVisible">
      <template #content>
        <div class="popover-container">
          <div class="header">
            <span class="tips">搜索历史</span>
            <a-button type="text" size="small" class="clear" @click="clear">清空</a-button>
          </div>

          <ul class="content">
            <li @click="clear" class="item">搜索记录1</li>
            <li @click="clear" class="item">搜索记录2</li>
          </ul>
        </div>
      </template>

      <a-input
        v-model:value="value"
        placeholder="搜索文章/用户"
        class="search-input"
      />
    </a-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref<string>("");
const popoverVisible = ref<boolean>(false);

const clear = () => {
    popoverVisible.value = false;
}
</script>

<style lang="scss" scoped>
.nav-search-container {
  height: 100%;
  display: flex;
  align-items: center;
  .dis-input {
    width: 180px;
  }
  .search-input {
    width: 270px;
  }
}

.popover-container {
  width: 270px;
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
      padding: 0 15px;
      &:hover {
        background-color: #eff2f5;
      }
    }
  }
}
</style>
