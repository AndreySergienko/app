<template>
  <div class="stories">
    <SharedTitle size="m" class="stories__title">Stories</SharedTitle>
    <div class="card__container">
      <SharedStory
        v-for="(card, id) in cards"
        :key="id"
        :card="card"
        :is-second-card="id === 1"
        :is-last-card="id === cards.length - 1"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import SharedStory from '~/components/SharedStory/SharedStory.vue'
import type { ISharedStoryCard } from '~/components/SharedStory/SharedStory.types'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stories_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const cards = reactive<ISharedStoryCard[]>([
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories2,
    followers: '16,2 K',
    play: 'dark_play'
  },
  {
    img: Stories3,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  }
])
</script>
<style scoped lang="scss">
@use 'assets/styles/media';

.stories__title {
  margin-bottom: var(--gap-l);
}

.card__container {
  display: flex;
  gap: var(--gap-m);
}

@include media.media-breakpoint-down(sm) {
  .card__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
