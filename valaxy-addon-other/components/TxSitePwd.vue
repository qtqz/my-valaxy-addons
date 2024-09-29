<script lang="ts" setup>
/**
 * 
 */
import { onMounted, ref } from 'vue'
const props = defineProps({
  password: String
})
let clicked = ref(false)
let result = ref(false)
let t: any
//let result=false
const checkPwd = () => {
  clicked.value = true
  let p = (document.querySelector('.pwd-widget input') as HTMLInputElement).value
  if (p == props.password) {
    result.value = true
    clearInterval(t)
    localStorage.setItem('pwd', p);
    (document.querySelector('body') as HTMLElement).setAttribute('style', '')
  }


}
onMounted(() => {
  (document.querySelector('body') as HTMLElement).setAttribute('style', 'user-select: none;')
  t = setInterval(() => {
    let el = (document.querySelector('.pwd-main') as HTMLElement)
    if (!el) (document.querySelector('body') as HTMLElement).remove()
    let sty = window.getComputedStyle(el)
    let d = sty.getPropertyValue("display"),
      o = sty.getPropertyValue("opacity"),
      po = sty.getPropertyValue("position"),
      t = sty.getPropertyValue("top"),
      l = sty.getPropertyValue("left")
    if (d + o + po + t + l != 'block1fixed0px0px') (document.querySelector('body') as HTMLElement).remove()
  }, 1000)
  if (localStorage.getItem('pwd') == props.password) {
    clearInterval(t)
    result.value = true;
    (document.querySelector('body') as HTMLElement).setAttribute('style', '')
  }
})
</script>

<template>
  <div class="pwd-main" :class="result ? 'disabled' : ''">
    <div class="pwd-widget">
      <h2 class="pwd-title">请输入网站密码</h2>
      <div><input type="password" style="padding: 0 0.5em;">
        <div style="height: 0;display: none;" :style="(clicked == true && result == false) ? {
    'display': 'block',
    'color': 'red'
  } : {}">⚠密码错误！</div>
      </div>
      <button @click="checkPwd()">确定</button>
      <div class="info">网站建设中，暂未直接开放，敬请期待</div>
    </div>
    <YunCloud></YunCloud>
  </div>
</template>

<style lang="scss">
@use "sass:map";

.disabled {
  user-select: none;
  opacity: 0;
  transition: opacity 1s;
  z-index: -1 !important;
}

.pwd-main {
  width: 100%;
  height: 100%;
  /*background-color: #fffa;*/
  background-image: url('/img/72114086_p0.webp');
  background-image: var(--yun-bg-img);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  position: fixed;
  z-index: 999;
  text-align: center;
}

.pwd-main {
  .yun-cloud {
    z-index: 1000;
    position: fixed;
    bottom: 0;
  }

  .pwd-widget {
    position: relative;
    top: 20%;
    width: 50%;
    height: 40%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff4;

    .pwd-title {
      font-size: 24px;
      font-weight: 900;
    }
  }

  button {
    border: 1px var(--va-border-color) solid;
    padding: 0 1em;
    border-radius: 8px;
  }
}

.dark .pwd-widget {
  background-color: #3333;
}
</style>