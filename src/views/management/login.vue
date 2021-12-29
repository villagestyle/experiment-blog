<template>
  <div class="container">
    <div class="content">
      <img
        class="action"
        v-if="action === 0"
        src="~assets/image/login/login-0.png"
        alt=""
      />
      <img
        class="action"
        v-if="action === 1"
        src="~assets/image/login/login-1.png"
        alt=""
      />
      <img
        class="action"
        v-if="action === 2"
        src="~assets/image/login/login-2.png"
        alt=""
      />

      <p>Welcome Home！</p>

      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

type ActionType = 0 | 1 | 2;

const rules = {
  username: {
    required: true,
    message: "请输入用户名",
    trigger: "blur"
  },
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur"
  }
};

const action = ref<ActionType>(0);
const ruleForm = reactive({
  username: "",
  password: ""
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url("assets/image/login/bg.png");
  background-size: cover;
  position: relative;
}

.content {
  width: 500px;
  height: 400px;
  border-radius: 12px;
  background-color: #fff;
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 200px);
  box-shadow: 2px 2px 12px 0px #fff;
  padding: 20px 20px;

  .action {
    position: absolute;
    top: -200px;
    left: calc(50% - 124px);

    &:nth-of-type(1) {
      top: -160px;
    }
    &:nth-of-type(2) {
      top: -178px;
    }
    &:nth-of-type(3) {
      top: -136px;
    }
  }

  > p {
    text-align: center;
    margin-top: 25px;
    font-size: 25px;
    color: #409eff;
  }
}
</style>
