<template>
<HeadView ></HeadView>
  <div >
    <!-- 首页视频 -->
    <div class="autovideo">
      <video id="onevideo"  autoplay   src="https://ys.mihoyo.com/main/_nuxt/videos/3e78e80.mp4" loop='loop' >
  
      </video>
    <video id="onevideo"  autoplay   src="https://ys.mihoyo.com/main/_nuxt/medias/video-bgm.d8637316.mp3"  >
        </video>
      <!-- 适龄提示 -->
<img src="https://s1.328888.xyz/2022/06/22/s0iOi.png" alt="s0iOi.png" border="0" />
      
      </div>
      <div class="bg">
    <van-swipe
      class="my-swipe"
      :autoplay="3500"
      indicator-color="white"
      :touchable="true"
     
  
    >
      <van-swipe-item v-for="(item, i) in img" :key="i"
        ><img :src="item"
      /></van-swipe-item>
    </van-swipe>
    <div class="lx">
      <img
        data-v-06fb116d=""
        data-v-24224816=""
        data-v-1b32a99a=""
        src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/20/8690dadee8167175c4f5e9abc2a1b822_5432348040966813663.png?x-oss-process=image/format,webp"
      />
      <img
        data-v-06fb116d=""
        data-v-24224816=""
        data-v-1b32a99a=""
        src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/20/98c2cb47aea9222d722f9190c2c29dcc_7080193921695665131.png?x-oss-process=image/format,webp"
      />
      <img
        data-v-06fb116d=""
        data-v-24224816=""
        data-v-1b32a99a=""
        src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/20/1d76828b967d1cf15a5eee1991b115ac_4562771577065676437.png?x-oss-process=image/format,webp"
      
      />
      <img
        data-v-06fb116d=""
        data-v-24224816=""
        data-v-1b32a99a=""
        src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/20/c9618e21060a51109d448f1daeddf6d4_2065252073999416004.png?x-oss-process=image/format,webp"
   
      />
    </div>
  </div>
   </div>
</template>

<script>
import HeadView from '@/components/HeadView.vue'
export default {
components:{HeadView},
  data() {
    return {
      // 轮播图
      img: [
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/ae1b27c1994be8bc7503c1dc2a98bf14_5644210846563075870.png?x-oss-process=image/format,webp",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/b975eac518fe34a12b4c9e4e4ce2af5f_4239752965186095583.png?x-oss-process=image/format,webp",

        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/0d39bfe289b7a6d36cccc567bf41fd62_679138124874094108.png?x-oss-process=image/format,webp",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/3af649b2cccdb9249b604a7a832d66ca_6732804943741101847.png?x-oss-process=image/format,webp",
      ],
  
    };
  },methods:{

  },
 created(){

  }
};
</script>




<style  scoped>
.autovideo{


    HEIGHT: 954px;

   
}
video{
   position: absolute;
  z-index: -1;
  height:1080px ;
  width:100% ;
}
.autovideo img{
  position: relative;
    top: 50rem;
    left: 1rem;
    height: 8rem;
}
.bg {
  background: url("https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/b06a01cebb7c910179f8148d0d24ca70_1453201656225332212.jpg?x-oss-process=image/format,webp")
    center no-repeat;
  height: 58rem;
  width: 100%;
}

.my-swipe .van-swipe-item {
  margin-top: 10rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.van-swipe-item img {
  height: 30rem;
}
.lx{
       margin: 0 auto;
    display: flex;
    WIDTH: 49%;
    justify-content: space-around;

}
</style>