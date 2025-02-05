<script lang="ts" setup>
/**
 * 
 */
import { onMounted } from 'vue'

const getParent = (dom: HTMLElement | null, tagName: string): HTMLElement | false => {
  if (dom == null) return false
  if (dom.tagName == tagName) return dom
  else return getParent(dom.parentElement, tagName)
}

onMounted(() => {
  if (window.location.href.match('https://')) {
    setTimeout(() => {
      var script = document.createElement('script');
      script.defer = true;
      script.src = 'https://tj.ra2map.com/script.js';
      script.setAttribute('data-website-id', 'b2b68ba5-b703-476d-b908-f6cb7b407227');
      document.head.appendChild(script);

      fetch('https://api.ra2map.com/recordvisit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          screen_widch: screen.width
        }),
      })

    }, 100)
    /*setTimeout(() => {
      var _hmt = _hmt || []
      var hm = document.createElement("script")
      hm.src = props.src || ''
      var s = document.getElementsByTagName("head")[0] as HTMLElement
      s.append(hm)
    }, 3000)
    setTimeout(() => {
      document.addEventListener('click', function (event) {
        let t = event.target as HTMLElement
        let b
        if (t.tagName == 'BUTTON') {
          b = t
        } else {
          b = getParent(t, 'BUTTON')
        }
        if (b) {
          console.log(b.textContent || b.title)
          //@ts-ignore
          //umami.track(b.textContent || b.title)
        }
      })

    }, 2000)*/
  }
})
</script>

<template>
</template>