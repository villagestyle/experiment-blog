import { Component, VNode } from "vue"

enum EType {
  success = 'success',
  warning = 'warning',
  info = 'info',
  error = 'error',
}

interface IOptions {
  message: string | VNode;
  icon?: string | Component;
  dangerouslyUseHTMLString?: boolean;
  customClass?: string;
  duration?: number;
  showClose?: boolean;
  center?: boolean;
  onclose?: any;
  offset?: number;
  appendTo?: string | HTMLElement;
  grouping?: boolean;
}

// 基础设置
const baseOptions = {
  duration: 2500
}

const Msg = {
  base: (type: EType, options?: IOptions) => {
    // @ts-ignore # ElMessage 自动导入了
    ElMessage({ ...baseOptions, ...{ type }, ...option })
  },

  success: (options?: IOptions) => {
    Msg.base(EType.success, options)
  },

  warning: (options?: IOptions) => {
    Msg.base(EType.warning, options)
  },

  error: (options?: IOptions) => {
    Msg.base(EType.error, options)
  }
}

export default Msg
