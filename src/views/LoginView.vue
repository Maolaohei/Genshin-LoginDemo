<template>
<div class="login" :style="{backgroundImage: 'url(' + image + ') !important' }">
    <div class="logo"  ><img src="https://user.mihoyo.com/t_1654682718376/src/resources/images/miHoYo_Logo_451cbfd2.png" class="mihoyo-logo"></div>
  
    <div class="login-contion">
<form>
<ul><li :class="action==0?'action':''" @click="showTab(0)">验证码登录</li><li :class="action==1?'action':''" @click="showTab(1)" >密码登录</li></ul>
<table>
    <tr>
      
        <td><div class="border-bt"><input type="text"  :placeholder="input1" v-model="number"></div></td>
         <td></td>
    </tr>
      <tr>
      
        <td><div class="border-ph"><input type="text" :placeholder="input2" v-model="pass"></div></td>
         <td><span>获取验证码</span></td>
         
    </tr>
</table>
<div class="login-btn" @click="login">登录</div>

</form>
<div class="issue">遇到问题?</div><div  class="enroll">立即注册</div>
<div class="msg">未注册的手机验证后将自动登录。注册/登录即代表您同意并遵守 <span>《米哈游通行证用户服务协议》</span> <span>《米哈游通行证用户个人信息及隐私保护政策》</span></div>
  </div>
    <div class="nm" >人物:{{this.name}}</div>
     <div class="nm" @click="changeBg">随机切换主题</div>
    </div>
</template>

<script>
export default {
data() {
    return {
        video: require('../assets/login.mp4'),
        action: 0,
        input1:'手机号码注册/登录',
        input2:'手机验证码',
        number:'',
        pass:'',
        image:'',
        name:'',
        bg:[]
    }
  
},
methods: {
    // tab切换
    showTab(index) {
        this.action = index;
        if(index==0){
            this.input1='手机号码注册/登录';
            this.input2='手机验证码';
    }else{
        this.input1='手机号/邮箱';
        this.input2='密码';
    }
    },
//    登录方法
login(){
    if(this.action==0){
        console.log(this.number,this.pass)
    }else{
        console.log(this.number,this.pass)
    }
},
//切换主题
changeBg(){
var api='fengge.json'
this.axios.get(api).then(res=>{
   console.log(res.data)
   this.bg=res.data
   var sdq=Math.ceil(Math.random()*4)
   var dq=''
   var Act='';
if(sdq==1){
 dq='mengde'
 Act=Math.ceil(Math.random()*20)
}else if(sdq==2){
dq='liyue'
 Act=Math.ceil(Math.random()*18)
}else if(sdq==3){
dq='daoqi1'
 Act=Math.ceil(Math.random()*14)
}else{
dq='daoqi1'
 Act=Math.ceil(Math.random()*14)
}
console.log(dq)

    console.log(Act)
    
       console.log('开始赋值')
if(dq=='mengde'){
    console.log('mengde')
     this.name=this.bg.mengde[Act].name
    this.image=this.bg.mengde[Act].src
      console.log(this.name)
}else if(dq=='liyue'){
        console.log('liyue',this.bg.liyue[0][Act])
 this.name=this.bg.liyue[0][Act].name
    this.image=this.bg.liyue[0][Act].src
      console.log(this.name)
}else{
     console.log('daoqi')

    this.name=this.bg.daoqi[Act].name
    this.image=this.bg.daoqi[Act].src
      console.log(this.name)
}

})

}
},created(){

this.changeBg()

}
,mounted(){


}
}
</script>

<style SCOPED>
video {
    width: 100%;
    height: 57rem;
}
/* 隐藏控件 */
    video::-webkit-media-controls{
        display:none !important;
    }
    .login{
        height: 58.09rem;
        
  background: #eaeaea;
  background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311083818450.png);
    }
     .logo{
        text-align: center;
     }
    .logo img{
       height: 5rem;
    margin: 3rem 0 3rem 0rem;
        
    }
    /* 表单 */
    .login-contion{
        margin: 0 auto;
        text-align: center;
        height: 41rem;
        width: 40rem;

         background: rgba(255,255,255,0.75);
    }
.login-contion form ul li{
    display: inline-block;
    margin: 3rem 2rem ;
    font-size: 1.5rem;
    padding:0 1.5rem 1rem 1.5rem;
 
    
}
.login-contion form ul li:hover{
    cursor: pointer;
}
.action{
   border-bottom: 0.35rem solid #4ea4dc;
      color: #4ea4dc;
}
.login-contion form  table{
    margin: 0 auto;
    font-size: 1.3rem;
   
}
table tr{
    height: 6rem;
   
}
.border-bt{
    padding-bottom: 0.5rem;
    
}
.border-bt:hover{
border-bottom: 1px solid #4ea4dc;
}
table tr td span{
    color: #54a5dc;
}
  
  table tr td span:hover{
  cursor: pointer;
}
.login-contion form  input{
    border: none;
    background: rgba(255,255,255,0);
}
.border-ph,.border-ph:link,.border-ph:visited,.border-ph:focus{
			text-decoration:none;
		}
		/*设置a的定位，给我们自己编写的下划线一个定位参考*/
		.border-ph{
			position:relative;
		}
		/*使用伪类给a下面添加下划线*/
		/*css3为了区别伪类选择器把::改为:,使用:也会自动转为::*/
		.border-ph::after{
			content:'';
			display:block;
			/*开始时候下划线的宽度为0*/
			width:0;
			height:1px;
			position:absolute;
			left:0;
			bottom:-10px ;
			background:#4ea4dc;
			/*这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果*/
			transition:all 0.3s ease-in-out;
		}
		.border-ph:hover::after{
			width:100%;
		}

.login-btn{
    width: 50%;
      margin: 3rem auto;

    padding: 1rem 3rem 1rem 3rem;
    background: #4ea4dc;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    color: #ffffff;
    font-size: 1.5rem;
}
.login-btn:hover{
    cursor: pointer;
}
.issue,.enroll{
     
    display: inline-block;
    margin-top: 0rem;
    font-size: 1.2rem;
    margin: 0rem 7rem 0rem 7rem;
    color: #4ea4dc;
}
.issue:hover,.enroll:hover{
    cursor: pointer;
}
.msg{
      margin: 0 auto;
    text-align: center;
    width: 68%;
    margin-top: 1.5rem;

    font-size: 0.9rem;
}
.msg span{
    color: #4ea4dc;
}
.msg span:hover{
    cursor: pointer;
}
.nm{
    padding: 1rem 1rem 1rem 1rem;
    float: right;
    margin-right:0.2rem;
     margin-top: 2rem;
     color: black;
     background:rgba(78, 164, 220,0.75);
     border-radius: 2rem;
    }
    .nm:hover{
        cursor: pointer;
    }
</style>