// const serverURL = 'http://127.0.0.1:88/'
// const serverURL = 'http://www.centurysports.com.cn'
const serverURL = ''
// const serverURL = 'http://s.www.centurysports.com.cn'
export default {
  ajax_cros_opt: { // 上线时候将此项里面的内容去掉
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  },
  dic: { // 字典
    career: serverURL + '/dic/career?g=' + Math.random(), // 职业
    province: serverURL + '/dic/province?g=' + Math.random(), // 省份
    city: serverURL + '/dic/city?g=' + Math.random(), // 城市
    countdown: serverURL + '/api/countdown?g=' + Math.random(), // 获取倒计时首页
    slideshow: serverURL + '/api/slideshow?g=' + Math.random(), // 轮播图
    focuspic: serverURL + '/api/focuspic?g=' + Math.random(), // 新闻焦点
    bannerpic: serverURL + '/api/bannerpic?g=' + Math.random(), // BANNER
    searchhot: serverURL + '/api/searchhot?g=' + Math.random() // 热门搜索
  },
  news: { // 新闻
    list: serverURL + '/api/news/list?g=' + Math.random(), // 新闻列表
    detail: serverURL + '/api/news/detail?g=' + Math.random(), // 新闻详情
    indextop: serverURL + '/api/news/top?g=' + Math.random(), // 首页获取top list接口
    search: serverURL + 'api/news/search?g=' + Math.random() // 搜索
  },
  goods: { // 商品
    list: serverURL + '/goods/getList?g=' + Math.random(), // 商品列表
    detail: serverURL + '/goods/getDetail?g=' + Math.random() // 商品详情
  },
  event: { // 赛事
    list: serverURL + '/api/event?g=' + Math.random(), // 赛事列表
    detail: serverURL + '/api/event/detail?g=' + Math.random(), // 赛事详情
    enroll: serverURL + '/api/enroll?g=' + Math.random(), // 报名信息—报名页
    submit: serverURL + '/api/submit?g=' + Math.random(), // 提交报名信息
    search: serverURL + '/api/search?g=' + Math.random() // 获取赛事列表搜索
  },
  point: { // 积分
    signin: serverURL + '/point/signIn?g=' + Math.random()
  },
  order: { // 订单
    check: serverURL + '/order/check?g=' + Math.random(), // 订单兑换检查
    confirm: serverURL + '/order/confirm?g=' + Math.random(), // 订单兑换确认
    // myEquipment: serverURL + '/order/myEquipment?g=' + Math.random(), // 我的装备
    myEquipment: serverURL + '/order/myOrderList?g=' + Math.random(), // 我的装备
    addShopping: serverURL + '/shoppingCart/add?g=' + Math.random(), // 添加购物车
    getListShopping: serverURL + '/shoppingCart/getList?g=' + Math.random(), // 获取购物车
    updateShopping: serverURL + '/shoppingCart/update?g=' + Math.random(), // 更新购物车
    deleteShopping: serverURL + '/shoppingCart/delete?g=' + Math.random(), // 删除购物车
    cleanShopping: serverURL + '/shoppingCart/clean?g=' + Math.random(), // 清空购物车
    settleShopping: serverURL + '/order/settleShopping?g=' + Math.random(), // 购物车结算
    gotoPage: serverURL + '/api/alipay/gotoPage?g=' + Math.random(), // 支付宝支付接口
    perSettle: serverURL + '/order/perSettle?g=' + Math.random() // 购物车预结算
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
  photo: {
    newphoto: serverURL + '/photo/newphoto?g=' + Math.random(), // 最新相册
    albumlist: serverURL + '/photo/albumlist?g=' + Math.random(), // 相册列表
    album: serverURL + '/photo/album?g=' + Math.random(), // 单个相册图片列表
    photodown: serverURL + '/photo/photodown?g=' + Math.random(), // 积分下载图片
    photoinfo: serverURL + '/photo/photoinfo?g=' + Math.random() // 单个照片信息
  },
  carouse: {
    list: 'http://localhost:8080/api/carousel/find'
  },
  img: {
    upimg: serverURL + '/api/upload?g=' + Math.random(), // 上传图片
    avatar: serverURL + '/api/user/avatar?g=' + Math.random() // 修改头像
  }
}
