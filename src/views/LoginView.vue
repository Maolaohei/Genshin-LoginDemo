<template>
<div class="login">
    <!-- <video autoplay="autoplay" loop="loop" :src="video"> -->
<video width="100%" height="57rem" controls autoplay>

    <source :src="video" type="video/mp4">

</video>

    </div>
</template>

<script>
export default {
data() {
    return {
        video: require('../assets/login.mp4')
    };
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
</style>