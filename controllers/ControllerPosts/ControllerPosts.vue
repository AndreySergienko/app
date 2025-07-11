<template>
  <SharedCard
    size="l"
    :img="{ src: Post, alt: 'post' }"
    date="September 17, 2024"
  >
    <template #title
      >Exploring the Trails: A Guide to Hiking Adventures</template
    >
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
  <SharedCard size="l" date="September 17, 2024">
    <template #title
      >ON-DEVELOPER: New Ad Platform to Fulfill Your Needs</template
    >
    <template #text>
      I was faced with the same dilemma a few months ago. I finally had the
      motivation\ to create a new personal website, but wasn't sure where to
      start. I decided\ to keep things simple, I'd write it with a library I
      knew very well: React.
    </template>
  </SharedCard>
</template>

<script setup lang="ts">
import Post from '@/assets/images/Post.png'
</script>
