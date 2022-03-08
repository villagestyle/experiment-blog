<template>
  <div class="errPage-container">
    <div class="errPage">
      <div class="bullshit">
        <el-button :icon="ArrowLeftBold" class="pan-back-btn" @click="back">
          返回
        </el-button>
        <h1 class="text-jumbo text-ginormous">注意!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>请联系系统管理员</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/"> 回首页 </router-link>
          </li>
          <li class="link-type">
            <a href="https://www.taobao.com/">随便看看</a>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible = true">点我看图</a>
          </li>
        </ul>
      </div>

      <div class="pic-401">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        />
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ArrowLeftBold } from "@element-plus/icons-vue";
import router from "src/router";
import { useRoute } from "vue-router";
import Gif from "assets/image/401/401.gif";

const route = useRoute();

const errGif = ref(Gif + "?" + +new Date());
const ewizardClap = ref(
  `https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646`
);
const dialogVisible = ref(false);

const back = () => {
  if (route.query.noGoBack) {
    router.push({ path: "/" });
  } else {
    router.go(-1);
  }
};
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 100%;
  height: 100%;
  .errPage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 100px;
  }
  .bullshit {
    width: 300px;
  }
  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

// 超出大小后的样式
@media (max-width: 992px) {
  .pic-401 {
    display: none;
  }
}
</style>
