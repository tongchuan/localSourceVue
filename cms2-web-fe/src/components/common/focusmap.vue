<template lang="html">
        <div class="ban" ref="focusmapId">
          <div class="ban2 clearfix" ref="ban_pic1">
            <div class="prev1" id="prev1">
              <!-- <img src="/static/images/index_tab_l.png" width="28" height="51"  alt=""> -->
            </div>
            <div class="next1" id="next1">
              <!-- <img src="/static/images/index_tab_r.png" width="28" height="51"  alt=""> -->
            </div>
            <ul>
              <li v-for="(item,index) in focusList" ><a v-bind:target="item.click_url" v-bind:href="item.link"><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></a><p>{{item.title}}</p></li>
            </ul>
          </div>
          <div class="min_pic clearfix">
            <div class="prev_btn1" ref="prev_btn1"><img src="/static/images/feel3.png" width="9" height="18"  alt=""></div>
            <div class="num clearfix" ref="ban_num1">
              <ul>
                <li v-for="(item,index) in focusList" ><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></li>
              </ul>
            </div>
            <div class="next_btn1" ref="next_btn1"><img src="/static/images/feel4.png" width="9" height="18"  alt=""></div>
          </div>
        </div>
</template>

<script>
import $ from 'jquery'
import jq from '@/util/focusMap'
// import pinchImage from '../components/PinchImage'
export default {
  name: 'top2',
  props: ['focusList'],
  data () {
    return {
      focusmapId: 'focusmapId' + Math.random(),
      ban_pic1: 'ban_pic1' + Math.random(),
      ban_num1: 'ban_num1' + Math.random(),
      prev_btn1: 'prev_btn1' + Math.random(),
      next_btn1: 'next_btn1' + Math.random(),
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    setTimeout(function () {
      that.$nextTick(() => {
        that.focusMapFun()
      })
    }, 1000)
  },
  // updated () {
  //   this.focusMapFun()
  //   console.log(this.screenWidth)
  //   console.log('updated')
  // },
  methods: {
    focusMapFun () {
      let that = this
      $(function () {
        $(that.$refs.focusmapId).width('100%')
        let parent = $(that.$refs.focusmapId).closest('div')
        let width = parent.width() // that.width // $('#focusMap').width()
        let height = parent.height() // that.height - 55 // $('#focusMap').height() - 55
        jq('.ban').width(width).height(height)
        jq('.ban2,.ban2 ul li,.ban2 ul li img').width(width).height(height - 100)
        jq('.min_pic').width(width)
        jq('.num').width(width - 32)
        jq(that.$refs.focusmapId).banqh({
          box: that.$refs.focusmapId, // 总框架
          pic: that.$refs.ban_pic1, // 大图框架
          pnum: that.$refs.ban_num1, // 小图框架
          prev_btn: that.$refs.prev_btn1, // 小图左箭头
          next_btn: that.$refs.next_btn1, // 小图右箭头
          pop_prev: '#prev2', // 弹出框左箭头
          pop_next: '#next2', // 弹出框右箭头
          prev: '#prev1', // 大图左箭头
          next: '#next1', // 大图右箭头
          pop_div: '#demo2', // 弹出框框架
          pop_pic: '#ban_pic2', // 弹出框图片框架
          pop_xx: '.pop_up_xx', // 关闭弹出框按钮
          mhc: '.mhc', // 朦灰层
          autoplay: true, // 是否自动播放
          interTime: 5000, // 图片自动切换间隔
          delayTime: 400, // 切换一张图片时间
          pop_delayTime: 400, // 弹出框切换一张图片时间
          order: 0, // 当前显示的图片（从0开始）
          picdire: true, // 大图滚动方向（true为水平方向滚动）
          mindire: true, // 小图滚动方向（true为水平方向滚动）
          min_picnum: 5, // 小图显示数量
          pop_up: true // 大图是否有弹出框
        })
      })
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.focusMapFun()
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="css">

</style>
