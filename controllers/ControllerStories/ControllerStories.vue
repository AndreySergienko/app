<template>
  <section class="stories">
    <SharedTitle size="m" class="stories__title">Stories</SharedTitle>
    <SharedSlider :length="cards.length">
      <template #slide="{ anim }">
        <div class="stories__list" :style="{ transform: anim }">
          <SharedStory
            v-for="(card, idx) in cards"
            :key="idx"
            :card="card"
            @click="updateCard(idx)"
          />
        </div>
      </template>
    </SharedSlider>
  </section>
</template>
<script setup lang="ts">
import type {ISharedStoryCard} from '~/components/SharedStory/SharedStory.types'
import SharedStory from '~/components/SharedStory/SharedStory.vue'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stories_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const cards = reactive<ISharedStoryCard[]>([
  {
    id: 21,
    img: Stories1,
    isViewed: false
  },
  {
    id: 22,
    img: Stories2,
    isViewed: true
  },
  {
    id: 23,
    img: Stories3,
    isViewed: false
  },
  {
    id: 24,
    img: Stories1,
    isViewed: false
  },
  {
    id: 25,
    img: Stories1,
    isViewed: false
  },
  {
    id: 26,
    img: Stories1,
    isViewed: false
  },
  {
    id: 11,
    img: Stories1,
    isViewed: false
  },
  {
    id: 12,
    img: Stories2,
    isViewed: true
  },
  {
    id: 13,
    img: Stories3,
    isViewed: false
  },
  {
    id: 14,
    img: Stories1,
    isViewed: false
  },
  {
    id: 15,
    img: Stories1,
    isViewed: false
  },
  {
    id: 16,
    img: Stories1,
    isViewed: false
  }
])

const updateCard = (idx: number) => {
  cards[idx].isViewed = true
}
</script>
<style scoped lang="scss" src="./ControllerStories.scss"></style>
