import { Component, CSSProperties, VNode } from "vue"

enum EType {
  alert = 'alert',
  confirm = 'confirm',
  prompt = 'prompt',
}

interface IOptions {
  title?: string;
  message?: string;
  dangerouslyUseHTMLString?: boolean;
  type?: string; // success / info / warning / error
  icon?: string | Component;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

interface IMsgBox {
  message: string;
  title: string;
  options?: IOptions
}

const MsgBox = {
  base: (type: EType, { message, title, options }: IMsgBox) => {
    return new Promise((resolve, reject) => {
      // @ts-ignore # ElMessageBox 自动导入了
      ElMessageBox[type](message, title, options)
        .then(async () => {
          resolve(true)
        }).catch(() => {
          reject()
        })
    })
  },

  alert: (message: string, title: string, options?: IOptions) => {
    return MsgBox.base(EType.alert, { message, title, options })
  },

  confirm: (message: string, title: string, options?: IOptions) => {
    return MsgBox.base(EType.confirm, { message, title, options })
  },

  prompt: (message: string, title: string, options?: IOptions) => {
    return MsgBox.base(EType.prompt, { message, title, options })
  }
}

export default MsgBox
