<template>
  <div class="stories">
    <SharedTitle size="m" class="mb-20">Stories</SharedTitle>
    <div class="card__container">
      <SharedStories
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :is-second-card="index === 1"
        :is-last-card="index === cards.length - 1"
      />
    </div>
  </div>
</template>
<script setup>
import SharedStories from '~/components/SharedStroies/SharedStories.vue'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stroies_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const cards = reactive([
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
<style>
.card__container {
  display: flex;
  gap: var(--gap-m);
}

@media (max-width: 705px) {
  .card__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 560px) {
  .card__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
