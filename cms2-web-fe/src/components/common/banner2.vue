<template lang="html">
  <div v-if="data" class="container banner-index">
    <div class="row">
      <a v-bind:target="data.target" v-bind:href="data.click_url"><img v-bind:src="data.big_url" class="banner-index" v-bind:alt="data.title" v-bind:title="data.title" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner2',
  props: ['data'],
  data () {
    console.log(this.data)
    return {}
  }
}
</script>

<style lang="css">
</style>
