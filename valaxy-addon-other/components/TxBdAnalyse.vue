<script lang="ts" setup>
/**
 * 
 */
import { onMounted, ref } from 'vue'
const props = defineProps({
  src: String
})
onMounted(() => {
  if (window.location.href.match('https://')) {
    setTimeout(() => {
      var _hmt = _hmt || []
      var hm = document.createElement("script")
      hm.src = props.src || ''
      var s = document.getElementsByTagName("head")[0] as HTMLElement
      s.append(hm)
    }, 3000)
  }
})
</script>

<template>
</template>

<style lang="scss"></style>