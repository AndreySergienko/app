<template>
  <div ref="container" class="gradient-frame parallax-container">
    <NuxtImg ref="img" class="parallax-img" :src="src" :alt="alt || 'images'" />
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'
import type { SharedImageType } from '~/types/component.types'

const container = ref<HTMLElement | null>(null)
const img = ref<HTMLElement | null>(null)

defineProps<SharedImageType>()

const animate = useParalaxMove(container, img)

onMounted(() => {
  animate.addListener()
})

onUnmounted(() => {
  animate.clearListener()
})
</script>

<style scoped lang="scss" src="./ImageAnimation.scss"></style>
