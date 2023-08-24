// 写获取服务端接口的处理逻辑
// mock数据

export default defineEventHandler(() => {
  // env dev: api-> mock
  // env prod: api -> 正常请求
  return {
    code: 200,
    data: {},
    msg: 'from mock'
  }
})
