<template>
  <div class="stories">
    <SharedTitle size="m" class="mb-20">Stories</SharedTitle>
    <div class="card__container">
      <SharedStory
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :is-second-card="index === 1"
        :is-last-card="index === cards.length - 1"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import SharedStory from '~/components/SharedStory/SharedStory.vue'
import type { ISharedStoryProps } from '~/components/SharedStory/SharedStory.types'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stroies_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const cards: ISharedStoryProps['card'][] = reactive([
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
