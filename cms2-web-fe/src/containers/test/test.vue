<template>
  <div class="container test">
    <div class="row">
      <div class="col-xs-9" id="qiehuan">
            <div class="focusbox">         
                <div class="focusimg">
                <ul class="fimglist clearfix">
                    <li v-for="item in list"><a href="jvascript:void(0)"><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title" /></a>
                      <p>{{item.title}}</p>
                    </li>
                </ul>
                </div> 
                <div class="focustool">
                <ul class="ftoollist clearfix">
                    <li v-for="(item,index) in list" v-bind:class="{'on':index==0}">
                      <a href="jvascript:void(0)">
                        <img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title" />
                      </a>
                    </li>
                </ul>
                </div>
            </div>

      </div>
      <div class="col-xs-3"></div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'test',
  data () {
    return {
      list: [
        {image: '/static/slide1.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide2.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide3.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide1.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide3.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide2.png', title: '我是第一个' + Math.random(), link: 'http://'},
        {image: '/static/slide1.png', title: '我是第一个' + Math.random(), link: 'http://'}
      ]
    }
  },
  created () {
    let len = this.list.length
    $(function () {
      function qiehuan () {
        let width = $('#qiehuan').width()
        let widths = width / len
        $('.ftoollist li').width(widths)
        $('.ftoollist li a').width(widths - 8)
        // console.log(width)
        $('#qiehuan').find('.fimglist li').width(width)
        $('.guidelist li').hover(
          function () {
            $(this).attr('class', 'mouseon')
          },
          function () {
            $(this).attr('class', 'mouseout')
          }
        )
        $('.ftoollist li').unbind('mouseover').mouseover(function () {
          $(this).siblings().removeClass('on')
          $(this).addClass('on')
          var preNumber = $(this).prevAll().length
          $('.fimglist li').removeClass('onpre')
          $('.fimglist li:nth-child(' + preNumber + ')').addClass('onpre')
          var margin = width
          margin = margin * preNumber
          margin = margin * -1
          $('.fimglist').stop().animate({marginLeft: margin + 'px'}, {duration: 500})
        })
      }
      qiehuan()
      $(window).resize(qiehuan)
    })
  }
}
</script>
<style>
#qiehuan,.test{
  border: 1px solid #f00;
  
}
#qiehuan{
  padding: 0;
  margin: 0;
}
.focusbox{position:relative;}
.focusimg{border:0; width:100%; height:376px; position:relative; overflow:hidden;-webkit-perspective: 1300px;}
.fimglist{width:99300px; position:relative;-moz-perspective: 1300px;}
.fimglist img{display:block; width:100%; height:376px; cursor:pointer;}
.fimglist li{height:376px; float:left;-webkit-transform-origin:50% 100%;transform-origin:50% 100%; position: relative;}
.fimglist li p{position: absolute;bottom: 0;width: 100%;background: rgba(3,3,3,0.6); color: #fff; line-height: 35px; margin: 0}
.fimglist li.onpre{-webkit-animation:onpre .5s ease-in-out;animation:onpre .5s ease-in-out;opacity:0;-webkit-transform:scale(0.8,0.8);transform:scale(0.8,0.8);}
@-webkit-keyframes onpre{
  0%{opacity:1;-webkit-transform:rotateY(0deg);}
  100%{opacity:0;-webkit-transform:rotateY(90deg)}
}
@keyframes onpre{
  0%{opacity:1;transform:rotateY(0deg);}
  100%{opacity:0;transform:rotateY(90deg)}
}
.focustool{width:100%; overflow:hidden; padding:0px; margin:0 auto; position:relative;}
.ftoollist{width:4655px; position:relative;}
.ftoollist img{display:block; width:100%; height:69px; margin-bottom:0;}
.ftoollist a{background-color:#d2d2d2; display:block; padding:4px 4px 0 4px; position:relative;-webkit-transition:all .3s linear;transition:all .3s linear;}
.ftoollist li{float:left; cursor:pointer; -webkit-transition:all .3s linear; transition:all .3s linear;}

.ftoollist .imgname{line-height:25px; text-align:center; color:#FFF; font-family:\5FAE\8F6F\96C5\9ED1; font-weight:400; font-size:18px; height:25px; overflow:hidden; cursor:pointer;}
.ftoollist .imgshortcat{line-height:20px; text-align:center; color:#7D7D7D; font-size:12px; height:20px; overflow:hidden; cursor:pointer;}
.ftoollist a:hover{background-color:#959090;z-index:100;}
.ftoollist .on a{background-color:#959090;}

</style>

