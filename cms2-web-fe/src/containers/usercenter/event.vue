<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12" style="padding-top:15px;">
        <div>
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in navtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <!-- 参赛列表start -->
        <div v-if="selectedItem.tagName == 'list'" class="user-content">
          <div class="match-list">
            <div class="" style="text-align:center" v-if="userStore.enroll.list && userStore.enroll.list.length==0">
              暂无数据
            </div>
            <div v-for="item in userStore.enroll.list" class="list-item clearfix">
              <a target="_blank" v-bind:href="'#/eventdetail/'+item.event_id"><img v-bind:src="item.pic" v-bind:title="item.title" v-bind:alt="item.title" class="list-picture" /></a>
              <div class="list-main">
                <h3 class="list-title"><span v-if="userStore.user && userStore.user.id" style="color:#900">[{{item.status}}]</span> <a target="_blank" v-bind:href="'#/eventdetail/'+item.event_id">{{item.title}}</a></h3>
                <p class="list-desc">{{item.description}}</p>
                <p v-if="item.status=='已中签'" class="list-desc"><span @click="downEvent(item)" style="color:#900; cursor:pointer">下载领物单</span></p>
                <!-- <span class="list-btn">查看成绩</span> -->
              </div>
            </div>
          </div>
          <div v-if="userStore.enroll.list && userStore.enroll.list.length>0" class="page">
            <page v-bind:total="userStore.enroll.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
          </div>
        </div>
        <!-- 参赛列表end -->
        <!-- 参赛成绩start -->
        <div v-if="selectedItem.tagName == 'result'" class="user-content">
          <div class="match-list">
            <div class="match-result">
              <table class="table table-striped table-hover table-condensed">
                <thead>
                  <tr>
                    <th>时间</th>
                    <th>比赛名称</th>
                    <th>报名类型</th>
                    <th>确认类型</th>
                    <th>完成成绩</th>
                    <th>完成状况</th>
                    <th>确认状态</th>
                    <th>证书</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="userStore.results.list && userStore.results.list.length==0">
                    <td style="text-align:center" colspan="8">暂无数据</td>
                  </tr>
                  <tr v-for="item in userStore.results.list">
                    <td>{{item.event_time}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.reg_type}}</td>
                    <td>{{item.confir_type}}</td>
                    <td>{{item.finish_type}}</td>
                    <td>{{item.finish_status}}</td>
                    <td>{{item.status}}</td>
                    <!-- <td><a v-if="item.is_show_cert==1" target="_blank" href="javascript:void(0)">查看证书</a></td> -->
                    <td><a v-if="item.event_type_id==3" target="_blank" v-bind:href="'http://www.centurysports.com.cn/user/report?event_id='+item.event_id">查看证书</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-if="userStore.results.list && userStore.results.list.length>0" class="page">
            <page v-bind:total="userStore.results.count" v-bind:rows="rows2" v-bind:page="page2" v-bind:set-page="setPage2" />
          </div>
        </div>
        <!-- 参赛成绩end -->
        <!-- <div v-for="(item,index) in navtitle" v-bind:class="item.selected ? 'user-content' : 'hide'" >
          <div class="match-list" v-if="item.tagName == 'list'">
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">查看成绩</span>
              </div>
            </div>
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">查看成绩</span>
              </div>
            </div>
            <div class="list-item clearfix">
              <img src="http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg" class="list-picture">
              <div class="list-main">
                <h3 class="list-title">2017年国际黑寡妇其后以凤凰网乎其问候比分发挥安徽文化</h3>
                <p class="list-desc">后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶后期维护费活动就不去潍坊行情无法IEof环球网部分环球网求偶办法办法</p>
                <span class="list-btn">查看成绩</span>
              </div>
            </div>
          </div>
          <div class="match-result" v-else>
            <table>
              <thead>
                <tr>
                  <th>时间</th>
                  <th>比赛名称</th>
                  <th>类型</th>
                  <th>成绩</th>
                  <th>勋章</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2017年08月26日</td>
                  <td>比较马拉松</td>
                  <td>老朋友【还给】</td>
                  <td>1:29:89</td>
                  <td>特战部队</td>
                </tr>
                <tr>
                  <td>2017年08月26日</td>
                  <td>比较马拉松</td>
                  <td>老朋友【还给】</td>
                  <td>1:29:89</td>
                  <td>特战部队</td>
                </tr>
                <tr>
                  <td>2017年08月26日</td>
                  <td>比较马拉松</td>
                  <td>老朋友【还给】</td>
                  <td>1:29:89</td>
                  <td>特战部队</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import page from '@/components/common/page'
import { USER_ENROLL, USER_RESULTS } from '@/store/modules/userStore'
import config from '@/api/config'
export default {
  name: 'wodesaishi',
  data () {
    return {
      total: 0,
      rows: 20, // 一页几条
      page: 1, // 当前页
      navtitle: [
        {name: '参赛列表', selected: true, tagName: 'list'},
        {name: '参赛成绩', selected: false, tagName: 'result'}
      ],
      total2: 0,
      rows2: 20, // 一页几条
      page2: 1 // 当前页
    }
  },
  created () {
    this.getListData()
    this.getListData2()
  },
  components: {
    page
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    selectedItem () {
      let that = this
      let data = {}
      that.navtitle.forEach((item) => {
        if (item.selected) {
          data = Object.assign({}, item)
        }
      })
      return data
    }
  },
  methods: {
    ...mapActions([USER_ENROLL, USER_RESULTS]),
    selectTitle (item, index) {
      let that = this
      that.navtitle.forEach((f) => {
        f.selected = false
      })
      item.selected = true
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    },
    setPage2 (page) {
      let that = this
      that.page2 = page
      that.getListData2()
    },
    getListData () {
      let that = this
      this.USER_ENROLL({start: (that.page - 1) * that.rows, length: that.rows})
    },
    getListData2 () {
      let that = this
      this.USER_RESULTS({start: (that.page2 - 1) * that.rows2, length: that.rows2})
    },
    downEvent (item) {
      // let that = this
      window.open(config.user.downevent + '?event_id=' + item.event_id, '', '')
    }
  }
}
</script>

<style>
  .match-result {
    padding: 10px 0 20px;
  }
  /*table {
    width: 100%;
  }
  th {
    font-weight: 400;
  }
  table,
  tr,
  th,
  td {
    border: 1px solid #cacaca;
  }
  th,
  td {
    width: 20%;
    line-height: 34px;
    text-align: center;
  }*/
</style>
