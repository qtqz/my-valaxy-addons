<script lang="ts" setup>
import { onMounted, ref } from 'vue'


let haveUpdate = ref(false),
  time1 = ref(''),
  time2 = ref(''),
  updatePage = ref(false)

onMounted(() => {
  //取文件取时间，比较
  if (true) {
    document.querySelector("a[title='更新日志']")?.classList.add('upd')
  }
  //访问更新日志时触发
  if (window.location.href.match(/update-log/)) {
    updatePage.value = true
    document.querySelector("a[title='更新日志']")?.classList.remove('upd')
    //更新本地记录的时间
  }
})

</script>

<template>
  <div v-if="updatePage">
    您上次查看更新时间为 {{ time1 }}

    网站最近更新时间为 {{ time2 }}
  </div>
</template>
