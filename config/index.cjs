/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdcca2a4757801d5a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd3872da1b271a668149d2b6ccfbce4f3',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '猫猫',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o3UV_5-DLegj78SvJN6DwUg4VrkI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dMYOIGsgQO0yXpli5vtyvf_MFFzuvpNQlG7_zUNhlaE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '猫猫', year: '1994', date: '11-24',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '猫猫', year: '1994', date: '11-24',
        },
        {
          type: '生日', name: '小羊', year: '1998', date: '03-30',
        },
        {
          type: '节日', name: '纪念日', year: '2020', date: '03-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-03-18' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Z3aaNUPSy5CUBeV7e9GTysILRT0In8rVnz3PFGVndQo',

  CALLBACK_USERS: [
    {
      name: '小羊',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o3UV_55tTq9-8Fn8X3El0Jeiu4sk',
    }
  ],

}

module.exports = USER_CONFIG

