<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// @ts-ignore
import { fallingCreate, fallingDestroy, version, defaultConfig } from 'natural-falling-js'

let isSpringFestival = ref(false)
let m = new Date().getMonth() + 1
//粗略判定每年1月2月为春节期间
if (m == 1 || m == 2) {
  isSpringFestival.value = true
}


const cfg = {
    open: true,//总开关
    custom: true,//总自定义开关，仅访客的有效，如果单独使用js，访客不能自定义
    changeImg: true,//子自定义开关，**仅访客的有效**
    changeShow: true,//子自定义开关，**仅访客的有效**
    changeRain: true,//子自定义开关，**仅访客的有效**
    imgSetting: [],//图案，有['petal','leaf','snow','rain']'snow'
    imgNumSetting: [5, 5, 40, 20],//每个图案的数量
    showSetting: {
        fadeIn: true,//淡入（下雨始终淡入）
        fadeOut: true,//淡出
        time: 16//几秒后开始淡出
    },
    rainSetting: {
        wind_speed: 40,//风力
        wind_deviation: 4,//横向风力误差
        wind_angle: 262,//风向，从+x方向逆时针角度，270为垂直向下
        hasBounce: true,//落地溅水花
        numLevel: 0.3//淡入速度，0~1之间，**访客不可修改**
    },
    gravity: 0.163,//重力，**访客不可修改**
    zIndex: 100,//自定义canvas的css z-index，可以实现不遮挡网页正文
    imgSize: [40, 40, 2.5],//图案大小（花瓣，树叶，天雪），**访客不可修改**，雨滴的大小跟风力有关
    wind_x: null// -35//前三种图案飘落横向风力，正负决定方向
}
let openFall = true
onMounted(() => {
  openFall ? fallingCreate(cfg) : 0
})

onUnmounted(() => {
  openFall ? fallingDestroy() : 0
})
</script>

<template>
  <SpringLantern v-if="isSpringFestival">
  </SpringLantern>
</template>

<style lang="scss" scoped></style>
