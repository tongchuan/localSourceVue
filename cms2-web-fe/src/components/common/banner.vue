<template>
  <div class="container bannder">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators">
        <li v-for="(item,index) in data" data-target="#myCarousel" v-bind:data-slide-to="index" v-bind:class="index==0?'active':''"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(item,index) in data" v-bind:class="index===0?'item active':'item'">
          <a v-bind:target="item.target" v-bind:href="item.click_url"><img v-bind:src="item['image']" v-bind:alt="item['title']">
          <div class="carousel-caption">
            <h3>{{item['title']}}</h3>
            <p>{{item.content}}</p>
          </div></a>
        </div>
      </div>
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;</a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['data']
}
</script>
