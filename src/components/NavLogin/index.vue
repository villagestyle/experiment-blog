<template>
  <div class="nav-login-container">
    <div v-if="userInfo?.username" class="user-container">
      <el-icon class="bell"><bell-filled /></el-icon>

      <el-popover
        popper-class="nav-user-popover-container"
        placement="bottom-start"
        trigger="click"
        :show-after="50"
        :hide-after="50"
        :teleported="false"
      >
        <template #reference>
          <img
            class="user-ul"
            width="20"
            height="20"
            src="src/assets/image/photo/man.png"
            alt=""
          />
        </template>

        <ul class="user-ul-menu">
          <li class="ul-item">
            <el-icon><avatar /></el-icon>
            <span>我的主页</span>
          </li>
          <li class="ul-item">
            <el-icon><tools /></el-icon>
            <span>设置</span>
          </li>
          <li class="ul-item" @click="logout">
            <el-icon><switch-button /></el-icon>
            <span>退出</span>
          </li>
        </ul>
      </el-popover>
    </div>

    <div v-else class="login-container">
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>

  <Login v-model="visible" />
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import {
  Avatar,
  BellFilled,
  SwitchButton,
  Tools,
} from "@element-plus/icons-vue";
import MsgBox from "src/utils/message-box";
import Notice from "src/utils/notification";

const store = useStore();

const visible = ref(false);

// 用户信息
const userInfo = computed(() => store.getters.userInfo);

const login = () => {
  visible.value = true;
};

const logout = () => {
  MsgBox.confirm("是否退出？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    const res = await store.dispatch("user/logout");
    if (res) {
      Notice.success({ message: "退出成功" });
    }
  });
};
</script>

<style lang="scss" scoped>
.nav-login-container {
  .user-container,
  .login-container {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-size: 14px;
    color: $color-text-regular;
  }
  .user-container {
    .bell {
      font-size: 20px;
      color: $color-text-secondary;
    }
    .user-ul {
      margin-left: 24px;
      cursor: pointer;
    }
  }
}

.user-ul-menu {
  .ul-item {
    height: 36px;
    display: flex;
    cursor: pointer;
    align-items: center;
    color: $color-text-regular;
    > span {
      margin-left: 10px;
    }
  }
}
</style>

<style lang="scss">
.nav-user-popover-container {
  padding: 10px 16px !important;
}
</style>