<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// @ts-ignore
import { fallingCreate } from 'natural-falling-js'
// @ts-ignore
import VueNaturalFalling from 'vue-natural-falling'

let isSpringFestival = ref(false)

const cfg = {
  open: true,
  imgNumSetting: [8, 8, 50, 30],
  fadeOut: true,
  fadeOut_time: 16
}
//let openFall = true, f = ref()

onMounted(() => {
  let m = new Date().getMonth() + 1
  //粗略判定每年1月2月为春节期间
  if (m == 1 || m == 2) {
    isSpringFestival.value = true
  }
  //openFall ? f.value = fallingCreate(cfg) : 0
})

onUnmounted(() => {
  //openFall ? f.value.destroy() : 0
})
</script>

<template>
  <SpringLantern v-show="isSpringFestival">
  </SpringLantern>
  <VueNaturalFalling :masterConfig="cfg" :hide="true" :easyMode="false" />
</template>

<style lang="scss" scoped></style>
