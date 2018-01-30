<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12" style="padding-top:15px;">
        <div class="">
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in navtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <div v-for="(item,index) in navtitle" v-bind:class="item.selected ? 'user-content' : 'hide'" >
          <div class="message-read" v-if="item.spec == 'read'">
            <ul>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
            </ul>
            <div class="read-foot">
              <input type="checkbox">
              <span>全选</span>
              <span>标记已读</span>
              <span>清空</span>
              <nav class="read-page">
                <ul class="pagination">
                  <li><a href="javascript:;" class="page-spec">上页</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">...</a></li>
                  <li><a href="javascript:;">10</a></li>
                  <li><a href="javascript:;" class="page-spec">下页</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="message-no" v-else>
            <ul>
              <li class="read-item">
                <input type="checkbox">
                <span>你哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
              <li class="read-item">
                <input type="checkbox">
                <span>你是谁啊哈哈哈哈哈哈</span>
              </li>
            </ul>
            <div class="read-foot">
              <input type="checkbox">
              <span>全选</span>
              <span>标记已读</span>
              <span>清空</span>
              <nav class="read-page">
                <ul class="pagination">
                  <li><a href="javascript:;" class="page-spec">上页</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">...</a></li>
                  <li><a href="javascript:;">10</a></li>
                  <li><a href="javascript:;" class="page-spec">下页</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_MEDAL } from '@/store/modules/userStore'
export default {
  name: 'wodesaishi',
  data () {
    return {
      navtitle: [
        {name: '未读消息', selected: true, spec: 'read'},
        {name: '已读消息', selected: false, spec: 'noread'}
      ]
    }
  },
  created () {
    this.USER_MEDAL()
  },
  methods: {
    ...mapActions([USER_MEDAL]),
    selectTitle (item, index) {
      let that = this
      that.navtitle.forEach((f) => {
        f.selected = false
      })
      item.selected = true
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  }
}
</script>
<style lang="less" scoped>
  .read-item {
    padding: 10px 0 10px 3px;
    border-bottom: 1px solid #d9d9d9;
    input {
      margin-right: 6px;
    }
  }
  .read-foot {
    position: relative;
    padding: 6px 0 6px 3px;
    input {
      margin-right: 6px;
    }
    span {
      margin-right: 40px;
    }
  }
  .read-page {
    position: absolute;
    right: 0;
    top: 0;
    ul {
      margin: 0;
    }
    a {
      color: #616161;
    }
    a:hover,
    a:active,
    a:visited {
      color: #616161;
      background: #eee;
    }
    .active a {
      color: #616161;
      background: #eee;
      border-color: #ddd;
    }
    .page-spec {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
</style>
