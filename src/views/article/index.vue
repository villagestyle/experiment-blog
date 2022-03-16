<template>
  <div class="container">
    <main class="main">
      <section class="article-container">
        <div class="article-main">
          <div class="title">题目题目</div>

          <div class="author">苏东坡</div>

          <div class="describe">
            <span>2月 24, 2022</span>
            <span>阅读<span>35</span></span>
            <span>字数<span>1911</span></span>
            <span>评论<span>0</span></span>
            <span>喜欢<span>1</span></span>
          </div>

          <div class="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry’s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry’s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>
      </section>

      <section class="comment-container">
        <div class="conment-main">
          <div class="header">评论</div>

          <div class="form-box">
            <div class="portrait"></div>

            <CommentEnterBox
              v-model="comment"
              :loading="loading"
              @submit="submit"
            />
          </div>

          <div class="header">全部评论 1</div>

          <div class="content-box">
            <div class="item" v-for="item in data" :key="item.id">
              <CommentArea />

              <div class="sub-item" v-if="item.sub">
                <CommentArea />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="recommend-container">
        <div class="recommend-main">
          <div class="header">相关文章</div>

          <ul class="content-box">
            <li class="item" v-for="item in data" :key="item.id">
              <div>
                <span class="title">题目题目2</span>

                <div class="content">
                  王大司马家里很有钱。一天，他忽然梦见一个人对他说：“你欠我四十千钱，现在该还我了。”然后径直进了屋内。
                  他惊醒，妻子正巧生了个男孩。看来这孩子是来算上辈子的帐王大司马家里很有钱。一天，他忽然梦见一个人对他
                  说：“你欠我四十千钱，现在该还我了。”然后径直进了屋内。他惊醒，妻子正巧生了个男孩。看来这孩子是来算上辈子的帐
                </div>
              </div>

              <div class="image">
                <img
                  src="https://w.laborers.cn/wp-content/themes/Diaspora/timthumb/timthumb.php?src=https://w.laborers.cn/wp-content/uploads/2022/02/wallhaven-674018-1.jpeg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const loading = ref(false);
const comment = ref(""); // input评论内容变量

const data = reactive([{ id: 1, sub: true }, { id: 2 }]);

// 提交评论
const submit = (value: string) => {
  console.log(value);
  return;
  try {
    loading.value = true;
    console.log(1234, comment.value);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
  } catch (error) {}
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f4f5f5;
  .main {
    .article-container {
      background-color: #fff;
      .article-main {
        width: 700px;
        margin: 0 auto;
        padding: 50px 0;
        .title {
          color: $color-text-primary;
          font-weight: 600;
          font-size: 28px;
        }
        .author {
          font-size: 13px;
          color: $color-text-regular;
          margin-top: 16px;
        }
        .describe {
          font-size: 13px;
          color: $color-text-regular;
          margin-top: 4px;
          > span {
            > span {
              margin-left: 6px;
            }
          }
          > span + span {
            margin-left: 30px;
          }
          &::after {
            content: "";
            height: 1px;
            width: 100px;
            display: block;
            background: $background-color-secondary;
            margin: 0 auto;
            margin-top: 30px;
          }
        }
        .content {
          margin-top: 40px;
          font-size: 14px;
          line-height: 2;
        }
      }
    }
    .comment-container {
      padding: 50px 0;
      .conment-main {
        width: 700px;
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
        .header {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .portrait {
          height: 40px;
          width: 40px;
          margin-right: 20px;
          border-radius: 50%;
          flex-shrink: 0;
          background-color: #f4f5f5;
        }
        .form-box {
          display: flex;
          margin-bottom: 50px;
        }
        .content-box {
          .item {
            .sub-item {
              width: calc(100% - 40px);
              margin-top: 20px;
              margin-left: auto;
              padding: 20px;
              border-radius: 4px;
              background: rgba(247, 248, 250, 0.7);
            }
          }
          .item + .item {
            margin-top: 30px;
          }
        }
      }
    }
    .recommend-container {
      padding-bottom: 50px;
      .recommend-main {
        width: 700px;
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
        .header {
          font-size: 18px;
          font-weight: 600;
          padding-bottom: 20px;
          border-bottom: 1px solid #e8e8e8;
        }
        .content-box {
          .item {
            display: flex;
            padding: 25px 0;
            border-bottom: 1px solid #e8e8e8;
            > div:nth-child(1) {
              width: calc(100% - 200px);
              height: 100px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .title {
                font-size: 16px;
                font-weight: 600;
              }
              .content {
                font-size: 14px;
                color: $color-text-regular;
                line-height: 1.6;
                @include line-2;
                -webkit-line-clamp: 3;
              }
            }
            > div:nth-child(2) {
              width: 200px;
              height: 100px;
              padding-left: 20px;
              > img {
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>