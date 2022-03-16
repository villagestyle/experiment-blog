<template>
  <teleport to="body" v-if="modelValue">
    <div class="login-container" @click="cancel">
      <el-form
        class="form"
        ref="formRef"
        :model="form"
        :rules="rules"
        @click.stop="middleLayerClick"
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
  </teleport>
</template>

<script lang="ts" setup>
import { ref, reactive, unref, watch } from "vue";
import { useStore } from "vuex";
import { User, Lock, Bell } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import router from "src/router";
import Notice from "src/utils/notification";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits({
  "update:modelValue": (value) => {
    return true;
  },
});

// 初始化 store
const store = useStore();

type FormInstance = InstanceType<typeof ElForm>;

const formRef = ref<FormInstance>();

const form = reactive<UserLoginCredentials>({
  username: "admin",
  password: "12345567",
  code: "3367",
  remember: "",
});

const rules = reactive({
  username: [{ required: true, message: "必填选项" }],
  password: [{ required: true, message: "必填选项" }],
  code: [{ required: true, message: "必填选项" }],
});

// 监听modelValue
watch(
  () => props.modelValue,
  (current, before) => {
    // 当显示登录内容时, 阻止 body 元素滚动
    if (current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
);

// 关闭组件
const cancel = () => {
  emits("update:modelValue", false);
};

// 组件中间层阻止 底部子级组件渗透
const middleLayerClick = () => {};

// 提交
const submit = async () => {
  const ref = unref(formRef);
  if (!ref) return;

  ref.validate(async (valid) => {
    if (valid) {
      store
        .dispatch("user/login", form)
        .then((res) => {
          Notice.success({ message: "登录成功" });

          emits("update:modelValue", false);
        })
        .catch(() => {
          Notice.error({ message: "账号密码错误" });
        });
    }
  });
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
  z-index: 999;
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