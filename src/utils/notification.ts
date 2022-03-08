import { Component, VNode } from "vue"

enum EType {
  success = 'success',
  warning = 'warning',
  info = 'info',
  error = 'error',
}

interface IOptions {
  title?: string;
  message: string | VNode;
  icon?: string | Component;
  dangerouslyUseHTMLString?: boolean;
  customClass?: string;
  duration?: number;
  position?: string;
  showClose?: boolean;
  onclose?: any; // function
  oncick?: any; // function
  offset?: number;
  appendTo?: string | HTMLElement;
}

// 基础设置
const baseOptions = {
  title: '提示',
  duration: 3000
}

const Notice = {
  base: (type: EType, option?: IOptions) => {
    // @ts-ignore # ElNotification 自动导入了
    ElNotification({ ...baseOptions, ...{ type }, ...option })
  },

  success: (option?: IOptions) => {
    Notice.base(EType.success, option)
  },

  warning: (option?: IOptions) => {
    Notice.base(EType.warning, option)
  },

  error: (option?: IOptions) => {
    Notice.base(EType.error, option)
  }
}

export default Notice