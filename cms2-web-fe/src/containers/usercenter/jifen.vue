<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12" style="padding-top:15px;">
        <div class="">
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in navtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="user-content" style="padding: 20px 15px">
            共有积分： {{userStore.getsum.point_balance ? userStore.getsum.point_balance : 0}}
        </div>
        <div class="user-content" style="padding: 20px 15px">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>积分</th>
                <th>创建时间</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody  v-if="userStore.getloglist.list && userStore.getloglist.list.length>0">
              <tr v-for="item in userStore.getloglist.list">
                <th>{{item.id}}</th>
                <td>{{item.point}}</td>
                <td>{{item.ctime}}</td>
                <td>{{item.note}}</td>
              </tr>
            </tbody>
            <tbody v-if="userStore.getloglist.list && userStore.getloglist.list.length==0">
              <tr>
                <th colspan="4" style="text-align:center;color:#900;line-height:60px">暂无数据</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="page">
          <page v-bind:total="userStore.getloglist.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
        </div>
        <!-- <div v-for="(item,index) in navtitle" v-bind:class="item.selected ? 'user-content' : 'hide'" >
          <div class="collect-news" v-if="item.spec == 'news'">
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">已收藏</span>
                <span class="list-cancle">取消收藏</span>
              </div>
            </div>
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">已收藏</span>
                <span class="list-cancle">取消收藏</span>
              </div>
            </div>
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">已收藏</span>
                <span class="list-cancle">取消收藏</span>
              </div>
            </div>
          </div>
          <div class="collect-picture" v-else>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
            <div class="picture-item">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg">
              <p>2017年马拉松 国际 参赛</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_GETSUM, USER_GETLOGLIST } from '@/store/modules/userStore'
import page from '@/components/common/page'
export default {
  name: 'jf',
  data () {
    return {
      total: 0,
      rows: 20, // 一页几条
      page: 1, // 当前页
      navtitle: [
        {name: '我的积分', selected: true, spec: 'jf'}
        // {name: '图片', selected: false, spec: 'picture'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  created () {
    this.USER_GETSUM()
    this.getListData()
  },
  components: {
    page
  },
  methods: {
    ...mapActions([USER_GETSUM, USER_GETLOGLIST]),
    selectTitle (item, index) {
      let that = this
      that.navtitle.forEach((f) => {
        f.selected = false
      })
      item.selected = true
    },
    getListData () {
      let that = this
      this.USER_GETLOGLIST({start: (that.page - 1) * that.rows, length: that.rows})
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    }
  }
}
</script>

<style scoped>
  .user-content {
    padding: 0;
  }
  .collect-news {
    padding: 15px;
  }
  .collect-picture {
    padding: 20px 2px 0 15px;
    font-size: 0;
  }
</style>
