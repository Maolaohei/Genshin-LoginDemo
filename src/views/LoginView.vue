<template>

  <div class="index">
    <div class="nav">
      <ul>
        <li>原神</li>
        <li><span>2.8.0</span></li>
        <li class="img">
          <img
            src="https://s1.328888.xyz/2022/06/19/017xO.png"
            alt="017xO.png"
            border="0"
          />
        </li>
        <li class="img"></li>
        <li class="img">
          <img
            src="https://s1.328888.xyz/2022/06/19/01R4q.png"
            alt="01R4q.png"
            border="0"
          />
        </li>
        <li class="img">
          <img
            src="https://s1.328888.xyz/2022/06/19/0nVpg.png"
            alt="0nVpg.png"
            border="0"
          />
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-bg">
        <img
          src="https://s1.328888.xyz/2022/06/20/0jruR.png"
          alt="0jruR.png"
          border="0"
        />
        <img
          src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/25/fb6c8486704de2da0a1ce9a9f926a162_7587870463396353322.png?x-oss-process=image/format,webp"
          class="pz-image pz-wrapper pz-z6BtGCedQ2-enter-to"
          haspzwrapper="true"
          uniid="pz-z6BtGCedQ2"
          id="pz_OSQYUgTjUbpz-z6BtGCedQ2"
          data-v-47219032=""
          style="
            position: absolute;
            width: 13.01rem;
            height: 13.63rem;
            left: 6.73039rem;
            top: 2.2rem;
            cursor: pointer;
            font-size: 86.0185px;
          "
        />

        <!-- 轮播图 -->
        <div class="container0lb">
          <ul>
            <li v-for="(item,i) in msg.lb" :key="i">
              <img
                :src=item.src
              />
            </li>
      
          </ul>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>

 <div class="start" @click="startGame">开始游戏</div>
      </div>
      <!-- 公告栏 -->
      <div class="notice">
        <div class="nav" >
          <ul>
            <li :class="active==0?'select':''"  @click="selct(0)">活动</li>
            <li :class="active==1?'select':''" @click="selct(1)">公告</li>
            <li :class="active==2?'select':''" @click="selct(2)">资讯</li>
          </ul>
       
        </div>
           <div class="notice-contion" v-show="o">
            <ul >
              <li v-for="(item,i) in msg.noticecontiono" :key="i">{{item.msg}}<span>{{item.time}}</span></li>

            </ul>
          </div>
          <div class="notice-contion" v-show="t">
            <ul>
               <li v-for="(item,i) in msg.noticecontiont" :key="i">{{item.msg}}<span>{{item.time}}</span></li>
            </ul>
          </div>
          <div class="notice-contion" v-show="s">
            <ul>
              <li v-for="(item,i) in msg.noticecontions" :key="i">{{item.msg}}<span>{{item.time}}</span></li>
            </ul>
          </div>
      </div>
      <!-- 侧边栏 -->
      <div class="Sidebar"></div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      active: 0,
      o:true,
      t:false,
      s:false,
      msg:[],
      number:this.$route.params.number
    };
  },methods: {
    selct(index) {
      this.active = index;
    if(index==0){
      this.o=true;
      this.t=false;
      this.s=false;
    }else if(index==1){
      this.o=false;
      this.t=true;
      this.s=false;
      
    }else if(index==2){
      this.o=false;
      this.t=false;
      this.s=true;
    }
    },
    startGame(){
      this.$router.push({name:'game',params:{number:this.number}})
    }
  },created(){
    var api='index_nav.json'
    this.axios.get(api).then(res=>{
      this.msg=res.data;
       this.msg.msg==0;
      console.log(this.msg)
         console.log(this.msg.lb)
    })
  }
};
</script>



<style scoped>
*{
  margin: 0;
}
.index {
  display: flex;
  height: 58rem;

  /* 垂直排序 */
  flex-direction: column;
}
.nav {
  flex: 1;

  background: #141414;
}
.nav ul li {
  margin-top: 0.2rem;
  display: inline-block;
}
.nav ul li {
  margin-left: 0.5rem;
  color: white;
}
.nav ul li span {
  color: #3e3e3e;
}
.nav ul li img {
  height: 1.3rem;
}
.nav ul .img {
  float: right;
}
.content {
  flex: 29;

  overflow: hidden;
  display: flex;
}
.content-bg {
  flex: 1;
}
.content-bg img {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
}
/* 侧边栏 */
.Sidebar {
  position: absolute;
  z-index: 1;
  background: black;
  right: 0rem;
  width: 6rem;
  height: 96%;
  opacity: 0.3;
}
/* 开始按钮 */
.start {
  padding: 1rem 3rem 1rem 3rem;
  position: absolute;
  bottom: 3.2rem;
  left: 92.2rem;
  color: #704a18;
  font-size: 2rem;
  background: #ffca0a;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}
.start:hover{
  cursor: pointer;
}
/* 轮播图 */
.container0lb {
  position: absolute;
  z-index: 2;
  top: 15rem;
  left: 4rem;
}

.container0lb ul li {
  list-style: none;
  float: left;
}
.container0lb ul img {
  width: 35rem;
  height: 14rem;
}
.container0lb {
  width: 35rem;
  height: 14rem;
  margin: 50px auto 0;
  overflow: hidden;
  /* position: relative; */
  /* z-index: 99; */
  border: 1px solid black;
}
.container0lb ol {
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 10px;
  margin-left: -50px;
  z-index: 999;
opacity: 0;
}
 .container0lb ol:hover {

opacity: 1;
}
.container0lb ol li {
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin: 0px 2px;
  display: inline-block;
}
/* 动画样式 */
.container0lb ul {
  animation: Yui 6s cubic-bezier(0, 1, 0, 1) 0s infinite;
  width: 400%;
}
@keyframes Yui {
  0% {
    transform: translateX(0px);
  }
  33% {
    transform: translateX(-35rem);
  }
  66% {
    transform: translateX(-70rem);
  }
  100% {
    transform: translateX(0px);
  }
}
.container0lb ol li {
  animation: focus 6s linear infinite;
}
.container0lb ol li:nth-child(1) {
  animation-delay: 0s;
}
.container0lb ol li:nth-child(2) {
  animation-delay: 2s;
}
.container0lb ol li:nth-child(3) {
  animation-delay: 4s;
}

@keyframes focus {
  0% {
    background-color: #000;
  }
  20% {
    background-color: #000;
  }
  30% {
    background-color: #fff;
  }
}
/* 公告栏 */
.notice {
  position: absolute;
  top: 35rem;
  left: 4rem;
  width: 35rem;
  height: auto;



}
.notice .nav {
  width: 35rem;
  background: rgba(0,0,0,0.6); 
}
.notice .nav ul li {
  padding:0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  
}
.notice .nav ul li:hover {
 color: #ffd284;
  cursor: pointer;
}
.select {
  color: #ffd284 !important;
  border-bottom: 1px solid #ffd284;
}
.notice-contion{
  padding: 1.2rem 0rem 0rem 2rem;
background: rgba(0,0,0,0.35); 

    height: 8rem;
    color: white;
    font-size: 1rem;
}
.notice-contion ul li {
  margin-top: 0.5rem;
}
.notice-contion ul li:hover{
  color: #ffd284;
cursor:pointer;

}
.notice-contion ul li span{
  float: right;
  margin-right: 1rem;

}
</style>