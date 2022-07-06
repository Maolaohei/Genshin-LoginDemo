<template>
  <div class="head">
<div class="logo">
   <img src="https://ys.mihoyo.com/main/_nuxt/img/f78aabc.png">
</div>
<div class="nav">
    <ul>
    <li @click='gopath("game")' :class="path=='game'?'select':''" >首页</li>
    <li @click='gopath("news")' :class="path=='news'?'select':''">新闻</li>
    <li @click='gopath("game")' :class="path=='role'?'select':''">角色</li>
    <li @click='gopath("game")' :class="path=='world'?'select':''">世界</li>
    <li @click='gopath("game")' :class="path=='caricature'?'select':''">漫画</li>
    <li @click='gopath("game")' :class="path=='community'?'select':''">社区</li></ul>
</div>
<div class="ZW"></div>
<div class="account"><span>成长关爱系统</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNBMTNCQzMwNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMTNCQzJGNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTU3NzhFNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMTU3NzhGNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aJoX1wAAAvZJREFUeNqsl01IVFEUx99MM1iRjRoJobMwErFylRK0kOxrxoJoVbgIsk2LFkFfC2khSIu+iKKoRQzRQmpRBAUZmkEfZhRkmaAVooNQhISlSWj6+h/5D5wec997M7wDv3nvzj1z/++ee+bc+0K2bVs+LAw2gySoA1WgCETBBBgBfaAbPABTniOKsAtLwFEwZvu3SXAFxN3GdhNNghE7f/sNToKwX+EQaAPzdjD2GBR5CYvoDTt4ewdiWivkSK42cIr3f0AP6ATDoBDUgy2g3JEq4vsWPAJDTLyNoFH5vmKCzjiTK6nC+xw0GtZ+NWgF0/R9AhIuvufUzC84Q71UJdI9tuX77eA26ANd4AhYzr4DIAWibG8FN+n7lIm1TPnOgb9ggxY+RtGXYAV/0G5YrzTYp2a1Etw1+A6DBqUxCzoywmH+TyV0O+nU7pEsM+AgqAS9Hr7fwTpQwCUUWy8i29j4SNF6n5kqoZvw6XuHYx9m+0yYZVCsi9e9lj+T38Z4Py956uIr2V0KXrCdCLP2in3itcrK3UIe/YtBNZhkuyaCj0o2CtR/MmhhsWlGaSFaclPMRi2vr63gbQz0g1V6nSK8bwAl4Bb4GbDwNUZyj94Wx1X2tTD7mrm9BWEPWZDirAELJiJvlNMPUAsi4H1Awvupc19/KZtEChNvVmH5CtIs9ANgt1qOXEw2hV+gAoyDTaovLU/SZHjSQ3zS46yxuVg3KGSIsxWZlMW6PJWl8wtLna7lfuyZ2mSusz47LZEp9FcNg3xmPba428x6iPaAUtb/SwafQenPCMd5RspmQ2At/VpcRHu5U4nfRRe/JufR54SLszxlhYt4P2cq/eddxulkQv8nvIgHM5MNqLC3OkQzD3XWY3ssMx32YjxBmExE1tD3MhgF5T5mKpld53W8LeFJxGQflFgxr6dd/L9ljjt+DvRRzmDOMJhEZReopt+8y5qW5fomYfFJO/Iok4PM3lA+rzCaGjmucKamKIzy1LnD9Nqi+SfAAFLcgBA6a85mAAAAAElFTkSuQmCC" alt="">
<span style="    margin-left: 0.9rem;"> 晚上好!<u> {{number}}</u></span>


</div>
  </div>
</template>

<script>

export default {
 
data(){
    return{
      number:this.$route.params.number,
        path:"",
    }
},methods:{
gopath(path){
    console.log('跳转')
    this.$router.push({name:path,params:{number:this.number}})

}
},
created(){
    this.path=this.$route.name
    console.log(this.path)
}

}
</script>

<style scoped>
.head{
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    display: flex;
   background: rgba(68, 58, 61);
    opacity: 0.9;
   align-items: center;

   
}
.logo{
width: 18.8%;
 
}

.nav{
    width:27% ;

font-size: 1.5rem;
}
ul{
    display: flex;
    justify-content: flex-start;
    height: auto;
}
.nav ul li{
    padding-left: 1rem;
    flex: 1;
    display:inline-flex;
       align-items:center;
          color: white;
opacity: 0.6;

height: 4.5rem;
 border-top: 0.35rem solid rgba(0, 0, 0, 0);
}
.nav ul li:hover{
    cursor: pointer;
}
.select{
    color:  #69e0ff;
    border-top: 0.35rem solid #69e0ff !important;
}
.ZW{
     width: 30%;
}
.account{
   width: 20%;
   display: flex;
   align-items:center;
justify-content: flex-end;

}
.account span{
    flex: 1;
       color: white;
opacity: 0.6;
}
.account  img{

}


</style>