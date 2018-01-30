// const serverURL = 'http://s.www.centurysports.com.cn'
const serverURL = ''

export default {
  ajax_cros_opt: { // 上编译线时候将此项里面的内容去掉
    // crossDomain: true,
    // xhrFields: {
    //   withCredentials: true
    // }
  },
  home: {
    slideShow: serverURL + '/api/slideshow',
    event: serverURL + '/api/event'
  },
  race: {
    event: serverURL + '/api/event',
    detail: serverURL + '/api/event/detail'
  },
  news: {
    list: serverURL + '/api/news/list',
    detail: serverURL + '/api/news/detail'
  },
  user: { // 用户
    login: serverURL + '/api/user/login?g=' + Math.random(), // 登陆
    reg: serverURL + '/api/user/reg?g=' + Math.random(), // 注册
    forget1: serverURL + '/api/user/forget1?g=' + Math.random(), // 找回密码接口
    forget2: serverURL + '/api/user/forget2?g=' + Math.random(), // 找回密码接口
    loginout: serverURL + '/api/user/logout?g=' + Math.random(), // 退出
    update: serverURL + '/api/user/update?g=' + Math.random(), // 修改
    captcha: serverURL + '/api/captcha?g=' + Math.random(), // 验证码
    enroll: serverURL + '/user/enroll?g=' + Math.random(), // 我的赛事列表
    signIn: serverURL + '/point/signIn?g=' + Math.random(), // 签到
    getSum: serverURL + '/point/getSum?g=' + Math.random(), // 获取积分
    getLogList: serverURL + '/point/getLogList?g=' + Math.random(), // 获取积分
    results: serverURL + '/user/results?g=' + Math.random(), // 我的成绩列表
    results2: serverURL + '/user/results2?g=' + Math.random(), // 我的成绩详情(证书)
    medal: serverURL + '/user/medal?g=' + Math.random(), // 我的勋章
    info: serverURL + '/api/user/info?g=' + Math.random(), // 用户信息
    downevent: serverURL + '/user/items' // 下载购物单
  },
  dic: { // 字典
    career: serverURL + '/dic/career?g=' + Math.random(), // 职业
    province: serverURL + '/dic/province?g=' + Math.random(), // 省份
    city: serverURL + '/dic/city?g=' + Math.random() // 城市
  },
  photo: {
    newphoto: serverURL + '/photo/newphoto?g=' + Math.random(), // 最新相册
    albumlist: serverURL + '/photo/albumlist?g=' + Math.random(), // 相册列表
    album: serverURL + '/photo/album?g=' + Math.random(), // 单个相册图片列表
    photodown: serverURL + '/photo/photodown?g=' + Math.random(), // 积分下载图片
    photoinfo: serverURL + '/photo/photoinfo?g=' + Math.random() // 单个照片信息
  },
  event: { // 赛事
    list: serverURL + '/api/event?g=' + Math.random(), // 赛事列表
    detail: serverURL + '/api/event/detail?g=' + Math.random(), // 赛事详情
    enroll: serverURL + '/api/enroll?g=' + Math.random(), // 报名信息—报名页
    submit: serverURL + '/api/submit?g=' + Math.random(), // 提交报名信息
    search: serverURL + '/api/search?g=' + Math.random() // 获取赛事列表搜索
  },
  img: {
    upimg: serverURL + '/api/upload?g=' + Math.random(), // 上传图片
    avatar: serverURL + '/api/user/avatar?g=' + Math.random() // 修改头像
  },
  mall: {
    goodsList: serverURL + '/goods/getList',
    goodsDetail: serverURL + '/goods/getDetail'
  },
  cart: {
    add: serverURL + '/shoppingCart/add',
    getList: serverURL + '/shoppingCart/getList'
  },
  order: {
    preOrder: serverURL + '/order/perSettle',
    payOrder: serverURL + '/order/settleShopping'
  }
}
