<template>
  <SharedCard size="l" :img="{ src: Post, alt: 'post' }" date="Июль 30, 2025">
    <template #title>Знакомство</template>
    <template #text>
      Nature's mountains stand as majestic monuments, towering over the
      landscapes that stretch far and wide. Hiking through these natural wonders
      offers an escape to the serene and untouched corners of the earth. Each
      step taken on a mountain trail is a step closer to discovering the
      breathtaking beauty of the wild. Surrounded by the fresh, crisp air and
      the tranquil sounds of nature, hikers find a unique peace and a profound
      connection to the earth. Mountains challenge and inspire, urging us to
      explore further, climb higher, and appreciate the natural world in its
      grandest form...
    </template>
  </SharedCard>
</template>

<script setup lang="ts">
import Post from '@/assets/images/Post.png'
</script>
