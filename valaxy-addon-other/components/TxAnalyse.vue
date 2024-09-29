<script lang="ts" setup>
/**
 * 
 */
import { onMounted } from 'vue'
const props = defineProps({
  src: String
})
onMounted(() => {
  if (window.location.href.match('https://')) {
    setTimeout(() => {
      let s = document.createElement("script")
      s.outerHTML = '<script defer src="https://tj.ra2map.com/script.js" data-website-id="b2b68ba5-b703-476d-b908-f6cb7b407227"><' + '/script>'
      var h = document.getElementsByTagName("head")[0] as HTMLElement
      h.append(s)
    }, 1000)
    /*setTimeout(() => {
      var _hmt = _hmt || []
      var hm = document.createElement("script")
      hm.src = props.src || ''
      var s = document.getElementsByTagName("head")[0] as HTMLElement
      s.append(hm)
    }, 3000)*/
  }
})
</script>

<template>
</template>