<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// @ts-ignore
import { fallingCreate } from 'natural-falling-js'

let isSpringFestival = ref(false)

const cfg = {
  open: true,
  imgNumSetting: [5, 5, 40, 20],
  fadeOut: true,
  fadeOut_time: 16
}
let openFall = true,
  f = ref()

onMounted(() => {
  let m = new Date().getMonth() + 1
  //粗略判定每年1月2月为春节期间
  if (m == 1 || m == 2) {
    isSpringFestival.value = true
  }
  openFall ? f.value = fallingCreate(cfg) : 0
})

onUnmounted(() => {
  openFall ? f.value.destory() : 0
})
</script>

<template>
  <SpringLantern v-if="isSpringFestival">
  </SpringLantern>
</template>

<style lang="scss" scoped></style>
