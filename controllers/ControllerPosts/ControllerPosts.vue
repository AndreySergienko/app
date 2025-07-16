<template>
  <LazyBody />
  <SharedCard
    size="l"
    :img="{ src: PostPng, srcSet: PostWebp, alt: 'post' }"
    date="Июль 30, 2025"
  >
    <template #title>Знакомство</template>
    <template #text>
      Nature's mountains stand as majestic monuments, towering over the
      landscapes that stretch far and wide. Hiking through these natural wonders
      offers an escape to the serene and untouched corners of the earth. Each
      step taken on a mountain trail is a step closer to discovering the
      breathtaking beauty of the wild.
    </template>
  </SharedCard>
</template>

<script setup lang="ts">
import PostPng from '@/assets/images/Post.png'
import PostWebp from '@/assets/images/Post.webp'
</script>
