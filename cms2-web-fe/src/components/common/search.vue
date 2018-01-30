<template lang="html">
  <div class="container search-body">
    <div class="row">
      <p class="navbar-text search-navbar-text">热门搜索：
        <span v-for="item in dicStore.searchhot" >
        <a v-bind:href="item.click_url">{{item.keyword}}</a>&nbsp;
        </span>
       </p>
        <ul class="nav navbar-nav navbar-right">
          <form class="navbar-form navbar-left">
              <div class="form-group input-group">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span v-text="serachName"></span>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li v-for="item in searchList" v-on:click="typeSelected(item)">
                      <a href="javascript:void(0)">{{item.name}}</a>
                    </li>
                  </ul>
                </div>
                <input type="text" ref="searchinput" class="form-control" v-model="searchVal" placeholder="请输入关键字">
                <span class="input-group-btn">
                  <button class="btn btn-warning" type="button" v-on:click="searchSubmit">
                    <span class="glyphicon glyphicon-search"></span>
                  </button>
                </span>
            </div>
          </form>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SEARCHHOT } from '@/store/modules/dicStore'
export default {
  name: 'Search',
  props: ['searchValue', 'selectedId'],
  data () {
    let id = this.selectedId
    return {
      id: id,
      searchVal: this.searchValue,
      searchList: [
        {id: 1, name: '资讯'},
        {id: 2, name: '图片'},
        {id: 3, name: '赛事'},
        {id: 4, name: '产品'}
      ]
    }
  },
  created () {
    this.SEARCHHOT({})
  },
  computed: {
    ...mapGetters({
      dicStore: 'dicStore'
    }),
    serachName () {
      let that = this
      let name = ''
      that.searchList.forEach((item) => {
        if (item.id === Number(that.id)) {
          name = item.name
        }
      })
      return name
    }
  },
  mounted () {
    let that = this
    that.$root.$on('searchUpdateData', (data) => {
      that.id = data.id
      that.searchVal = data.value
    })
  },
  methods: {
    ...mapActions([SEARCHHOT]),
    typeSelected (item) {
      let that = this
      that.id = item.id
    },
    searchSubmit () {
      if (this.isTrim(this.searchVal)) {
        return
      }
      this.$router.replace({path: '/search/' + this.id + '/' + this.searchVal})
    }
  }
}
</script>

<style lang="css">

</style>
