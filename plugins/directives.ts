/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('flash', {
    mounted(el, binding) {
      const app = nuxtApp.vueApp
      const handler = (elem: HTMLElement, txt: string) => {
        const func = app.config.globalProperties[binding.arg!]
        if (typeof func === 'function') {
          func()
        }
        let timer: any
        let timer2: any
        return new Promise((resolve) => {
          const run = () => {
            // 为el添加cursor class
            elem.classList.add('cursor1')
            // 使用本地变量存储文本内容
            let content = txt
            // 设置一个随机数，长度小于文本内容
            const random = Math.floor(Math.random() * txt!.length)
            // 删除text中的内容，每隔200ms删除一个，直到删除random个
            timer = setInterval(() => {
              content = content.substring(0, content!.length - 1)
              elem.textContent = content
              if (content!.length === random) {
                // 删除完成之后，每隔1s添加一个字符，直到添加完毕
                timer2 = setInterval(() => {
                  content = content + txt!.charAt(content!.length)
                  elem.textContent = content
                  if (content!.length === txt!.length) {
                    clearInterval(timer2)
                    setTimeout(() => {
                      // run()
                      resolve(true)
                    }, 5000)
                  }
                }, 500)
                clearInterval(timer)
              }
            }, 200)

            // 删除el的cursor class
          }
          run()
          if (!app.config.globalProperties['arr']) {
            app.config.globalProperties['arr'] = []
          }
          app.config.globalProperties['arr'].push(() => {
            clearInterval(timer)
            clearInterval(timer2)
          })
        })
      }

      const handlerChilds = () => {
        // 获取el的子节点

        // 如果有子节点
        if (children.length > 0) {
          // 存储子节点的长度
          const len = children.length
          // 随机一个子节点
          const random = Math.floor(Math.random() * len)
          const node = children[random]
          // 获取子节点的文本内容
          const text = node.textContent
          if (text) {
            handler(node, text!).then(() => {
              node.classList.remove('cursor1')
              handlerChilds()
            })
          }
        }
      }
      // 获取el内文本内容, 并且没有children
      const text = el.innerText
      const children = el.children
      // 如果文本内容不为空，则使用该文本
      if (text && children.length === 0) {
        handler(el, text).then(() => {
          el.classList.remove('cursor1')
          handler(el, text)
        })
      } else {
        handlerChilds()
      }
    },
    // mounted(el) {},
    beforeUnmount(el, binding) {
      const app = nuxtApp.vueApp
      const arr = app.config.globalProperties['arr']
      // 卸载前清除定时器
      arr.forEach((item: any) => {
        if (typeof item === 'function') {
          item()
        }
      })
    }
  })
})
