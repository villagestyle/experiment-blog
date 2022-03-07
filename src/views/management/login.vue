<template>
  <div class="container">
    <el-form
      class="form"
      ref="formRef"
      :model="form"
      :rules="rules"
      size="small"
    >
      <div class="header">管理系统</div>

      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          :prefix-icon="User"
          placeholder="username"
          clearable
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          :prefix-icon="Lock"
          placeholder="password"
          type="password"
          show-password
          clearable
        />
      </el-form-item>

      <el-form-item prop="code">
        <el-input
          v-model="form.code"
          :prefix-icon="Bell"
          placeholder="验证码"
          clearable
        />
      </el-form-item>

      <el-form-item class="form_remember">
        <el-checkbox v-model="form.remember" label="记住密码" />
      </el-form-item>

      <el-form-item>
        <el-button class="form_login" type="primary" @click="submit">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, unref } from "vue";
import { User, Lock, Bell } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";

type FormInstance = InstanceType<typeof ElForm>;

const formRef = ref<FormInstance>();

const form = reactive<UserLoginCredentials>({
  username: "",
  password: "",
  code: "3367",
  remember: "",
});

const rules = reactive({
  username: [{ required: true, message: "必填选项" }],
  password: [{ required: true, message: "必填选项" }],
  code: [{ required: true, message: "必填选项" }],
});

const submit = async () => {
  const ref = unref(formRef);
  if (!ref) return;

  ref.validate((valid) => {
    if (valid) {
      console.log("成功", form);
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url("src/assets/image/background/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 310px;
    background-color: #fff;
    padding: 24px 24px 6px;
    border-radius: 10px;
    .header {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 24px;
    }
    &_remember {
      height: 32px;
    }
    &_login {
      width: 100%;
    }
    & :deep(.el-form-item) {
      .el-input__inner {
        border-radius: 2px;
        border-color: #d9d9d9;
        &:focus {
          border-color: #409eff;
        }
      }
      .el-input__prefix {
        color: #606266;
        font-size: 14px;
      }
    }
  }
}
</style>
