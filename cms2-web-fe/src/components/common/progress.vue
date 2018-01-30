<template lang="html">
<div class="container">
  <div class="progress-list">
    <ul>
      <li v-for="(item,index) in progreessData" v-bind:style="{width:1/progreessData.length*100 + '%'}" v-bind:class="{'active': progreessNum >= index}"><span v-bind:class="item.className">{{item.numName}}</span><p class="progress-desc">{{item.name}}</p></li>
      <!-- <li v-bind:class="{'active': progreessNum >= 1}"><span class="progress-num">2</span><p class="progress-desc">验证身份</p></li>
      <li v-bind:class="{'active': progreessNum >= 2}"><span class="progress-num">3</span><p class="progress-desc">设置密码</p></li>
      <li v-bind:class="{'active': progreessNum >= 3}"><span class="progress-num glyphicon glyphicon-ok"></span><p class="progress-desc">完成</p></li> -->
    </ul>
  </div>
  <!-- <button type="button" name="button" class="btn btn-default" v-on:click="nextClick">下一步</button> -->
</div>
</template>

<script>
export default {
  name: 'progress',
  props: ['progreessData', 'progreessNum'],
  data () {
    return {
      // progreessData: [
      //   {name: '填写账号', className: 'progress-num', numName: '0'},
      //   {name: '验证身份', className: 'progress-num', numName: '2'},
      //   {name: '设置密码', className: 'progress-num', numName: '3'},
      //   {name: '设置密码', className: 'progress-num', numName: '3'},
      //   {name: '完成', className: 'progress-num  glyphicon glyphicon-ok', numName: ''}
      // ],
      // progreessNum: 0
    }
  },
  methods: {
    nextClick () {
      let that = this
      if (that.progreessNum >= (that.progreessData.length - 1)) {
        return
      }
      this.progreessNum ++
    }
  }
}
</script>

<style lang="css">

</style>
