import Mock from 'mockjs'
// const Mock = require('mockjs')

Mock.mock('/api/mock/login', /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  //   'list|1-10': [
  //     {
  //       // 属性 id 是一个自增数，起始值为 1，每次增 1
  //       'id|+1': 1,
  //       // 随机数字1-100
  //       'number|1-100': 100,
  //       // 返回city数组，每次里面有三个
  //       'city|3': {
  //         310000: '上海市',
  //         320000: '江苏省',
  //         330000: '浙江省',
  //         340000: '安徽省'
  //       }
  //     }
  //   ]
  list: ['1', '2']
})
