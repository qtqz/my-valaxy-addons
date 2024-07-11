<script lang="ts" setup>
import { computed } from 'vue'
import type { ValaxyAddon } from 'valaxy'
import { useRuntimeConfig } from 'valaxy'
import { faceOptions } from '../types'

const runtimeConfig = useRuntimeConfig()
const options = computed(() => runtimeConfig.value.addons['valaxy-addon-face'] as ValaxyAddon<faceOptions>)

const props = defineProps({
  face: {
    required: true,
    type: String
  },
  suffix: String,
  size: String
})
const suffix = options.value.options?.defaultSuffix || 'png',
  defaultSize = options.value.options?.defaultSize || '3.5em'

let [faceSets, faceName] = props.face.split(':')
let path = '/img/face/' + faceSets + '/' + faceName + '.' + (props.suffix || suffix)
</script>

<template>
  <div class="v-a-face" :style="size ? { height: size } : null">
    <img class="v-a-face-img" :src="path">
  </div>
</template>

<style lang="scss">
.v-a-face {
  display: inline-block;
  height: v-bind(defaultSize);
  margin: 1px 2px;

  img.v-a-face-img {
    display: inline-block;
    margin: 0;
    max-height: 100%;
    max-width: unset;
  }
}
</style>
