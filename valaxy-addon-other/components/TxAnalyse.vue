<script lang="ts" setup>
/**
 * 
 */
import { onMounted } from 'vue'

onMounted(() => {
  if (window.location.href.match('https://')) {
    setTimeout(() => {
      var script = document.createElement('script');
      script.defer = true;
      script.src = 'https://tj.ra2map.com/script.js';
      script.setAttribute('data-website-id', 'b2b68ba5-b703-476d-b908-f6cb7b407227');
      document.head.appendChild(script);
    }, 100)
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