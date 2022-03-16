<template>
  <header class="header-container">
    <div class="container">
      <a class="logo" href="">
        <!-- <img
          width="50"
          height="50"
          src="src/assets/image/logo/octocat.png"
          alt=""
        />
        心情树洞 -->
        心情树洞
      </a>

      <nav class="nav-container">
        <!-- 屏幕宽度缩小到一定范围时 隐藏 -->
        <ul class="nav-ul">
          <li class="ul-item text-selection">社区</li>

          <li class="ul-item text-selection-hover">首页</li>
          <li class="ul-item text-selection-hover">论坛</li>
          <li class="ul-item text-selection-hover">直播</li>
          <li class="ul-item text-selection-hover">资讯</li>
          <li class="ul-item text-selection-hover">活动</li>
          <li class="ul-item text-selection-hover">个人中心</li>
          <li class="ul-item text-selection-hover">帮助中心</li>
        </ul>

        <!-- 屏幕宽度缩小到一定范围时 显示 -->
        <el-popover
          popper-class="nav-popover-container"
          placement="bottom-start"
          trigger="click"
          :show-after="50"
          :hide-after="50"
          :teleported="false"
        >
          <template #reference>
            <div class="nav-ul-popover">
              <span class="text-selection">社区</span>
              <el-icon size="16"><caret-bottom /></el-icon>
            </div>
          </template>

          <ul class="nav-ul-popover-menu">
            <li class="ul-item text-selection-hover">首页</li>
            <li class="ul-item text-selection-hover">论坛</li>
            <li class="ul-item text-selection-hover">直播</li>
            <li class="ul-item text-selection-hover">资讯</li>
            <li class="ul-item text-selection-hover">活动</li>
            <li class="ul-item text-selection-hover">个人中心</li>
            <li class="ul-item text-selection-hover">帮助中心</li>
          </ul>
        </el-popover>

        <!-- 登录 或 未登录 时显示的内容 -->
        <div class="nav-action">
          <NavSearch />

          <NavLogin />
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { CaretBottom } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f7f7f7;
  background: #fefefe;
  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    font-size: 14px;
    margin: 0 auto;
    padding: 0 16px;
    color: $color-text-regular;
    .logo {
      height: 100%;
      margin: 0 16px;
      padding-right: 32px;
      font-size: 18px;
      font-weight: 600;
      color: $color-text-primary;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        margin-right: 8px;
      }
    }
    .nav-container {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .nav-ul {
        display: flex;
        .ul-item {
          height: 100%;
          cursor: pointer;
          margin: 0 16px;
          @include flex-center;
        }
      }
      .nav-ul-popover {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 0 16px;
      }
      .nav-action {
        display: flex;
        margin: 0 16px;
      }
    }
  }
}

.nav-ul-popover-menu {
  font-size: 14px;
  .ul-item {
    height: 40px;
    cursor: pointer;
    position: relative;
    @include flex-center;
  }
}

.text-selection {
  color: $color-focus;
}

.text-selection-hover {
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: $color-focus;
    }
  }
}

@media (max-width: 1200px) {
  .header-container {
    .container {
      .nav-container {
        .nav-ul {
          display: none;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .header-container {
    .container {
      .nav-container {
        .nav-ul-popover {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.nav-popover-container {
  width: 130px !important;
  min-width: 130px !important;
  padding: 10px 32px !important;
}
</style>