<template>
  <div class="container">
    <main class="main">
      <div class="item" v-for="(item, index) in data" :key="item.id">
        <router-link to="/article" :name="item.title" :title="item.title">
          <img height="440" width="680" :src="item.src" />
        </router-link>

        <div :class="isEvenNumber(index)">
          <p>{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p>
            <router-link
              class="text-hover-opacity"
              to="/article"
              :name="item.title"
              title="查看详情"
            >
              {{ item.content }}
            </router-link>
          </p>
          <div>
            <div class="icon--case"><span>1500</span></div>
            <div class="icon--eye"><span>40</span></div>
            <div class="icon--love"><span>40</span></div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <el-button class="loadmore" :loading="loading" @click="loadmoreClick">
        加载更多
      </el-button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

let loading = ref(false); // 按钮loading

const obj = {
  title: "题目题目",
  date: "2月 24, 2022",
  src: "https://w.laborers.cn/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://w.laborers.cn/wp-content/uploads/2022/02/wallhaven-674018-1.jpeg",
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`,
};
const data = reactive([
  {
    id: 1,
    ...obj,
  },
  {
    id: 2,
    ...obj,
  },
]);

// 是否偶数
const isEvenNumber = (num: number) => {
  let className = "describe ";

  if ((num + 1) % 2 === 0) className += "describe--even";
  return className;
};

// 加载更多
const loadmoreClick = () => {
  try {
    loading.value = true;

    setTimeout(() => {
      data.push({
        id: data.length + 1,
        ...obj,
      });

      loading.value = false;
    }, 1000);
  } catch (error) {}
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: calc(100% + 200px);
    position: absolute;
    left: 50%;
    background: $background-color-secondary;
    top: -100px;
    z-index: 0;
  }
  .main {
    .item {
      margin-top: 100px;
      @include flex-center;
      a {
        cursor: pointer;
        z-index: 2;
      }
      .describe {
        position: relative;
        width: 500px;
        height: 400px;
        border: 1px solid $background-color-secondary;
        padding: 80px 90px;
        background: #fff;
        margin-left: -30px;
        p:nth-child(1) {
          font-size: 12px;
          color: $color-text-secondary;
        }
        h3:nth-child(2) {
          margin-top: 10px;
          font-weight: 600;
          font-size: 28px;
          color: $color-text-primary;
          cursor: pointer;
        }
        p:nth-child(3) {
          margin-top: 10px;
          font-size: 14px;
          line-height: 1.8;
          @include line-2;
          -webkit-line-clamp: 5;
          a {
            color: $color-text-regular;
          }
        }
        div:nth-child(4) {
          display: flex;
          color: $color-text-secondary;
          position: absolute;
          bottom: 80px;
          > div {
            > span {
              font-size: 13px;
              margin-left: 5px;
            }
          }
          > div + div {
            margin-left: 20px;
          }
        }
      }
      .describe--even {
        order: -1;
        margin-left: 0;
        margin-right: -30px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .loadmore {
      width: 170px;
      z-index: 2;
    }
  }
}
</style>
