<template>
  <section class="stories">
    <SharedTitle size="m" class="stories__title">Stories</SharedTitle>
    <SharedSlider :length="cards.length" :style="{ width: '675px' }">
      <template #slide>
        <div class="stories__list">
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

  <teleport to="body">
    <SharedModalStory
      v-if="isModalOpen"
      @close="isModalOpen = false"
      :has-next="hasNext"
      :has-prev="hasPrev"
      @next="nextSlide"
      @prev="prevSlide"
    >
      <img :src="cards[activeIdx].img" :alt="'Image'" />
    </SharedModalStory>
  </teleport>
</template>
<script setup lang="ts">
import type { ISharedStoryCard } from '~/components/SharedStory/SharedStory.types'
import SharedStory from '~/components/SharedStory/SharedStory.vue'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stories_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const cards = reactive<ISharedStoryCard[]>([
  {
    id: 1,
    img: Stories1,
    isViewed: false
  },
  {
    id: 2,
    img: Stories2,
    isViewed: true
  },
  {
    id: 3,
    img: Stories3,
    isViewed: false
  },
  {
    id: 4,
    img: Stories1,
    isViewed: false
  },
  {
    id: 5,
    img: Stories1,
    isViewed: false
  },
  {
    id: 6,
    img: Stories1,
    isViewed: false
  },
  {
    id: 7,
    img: Stories1,
    isViewed: false
  },
  {
    id: 8,
    img: Stories2,
    isViewed: true
  },
  {
    id: 9,
    img: Stories3,
    isViewed: false
  },
  {
    id: 10,
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
    img: Stories1,
    isViewed: false
  }
])
const activeIdx = ref<number>(0)
const isModalOpen = ref<boolean>(false)

const updateCard = (idx: number) => {
  activeIdx.value = idx
  isModalOpen.value = true
}

watch(activeIdx, () => {
  cards[activeIdx.value].isViewed = true
})

const hasPrev = computed<boolean>(() => !!cards[activeIdx.value - 1])
const hasNext = computed<boolean>(() => !!cards[activeIdx.value + 1])

const nextSlide = () => {
  if (!hasNext.value) return
  cards[activeIdx.value].isViewed = true
  activeIdx.value++
}

const prevSlide = () => {
  if (!hasPrev.value) return
  cards[activeIdx.value].isViewed = true
  activeIdx.value--
}
</script>
<style scoped lang="scss" src="./ControllerStories.scss"></style>
