<template>
  <section class="stories">
    <SharedTitle size="m" class="stories__title">Stories</SharedTitle>
    <SharedSlider :length="cards.length">
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
      @close="close"
      :has-next="hasNext"
      :has-prev="hasPrev"
      @next="nextSlide"
      @prev="prevSlide"
    >
      <img :src="cards[activeIdx].img" :alt="'Image'" />
      <template v-if="cards[activeIdx].text" #text>{{
        cards[activeIdx].text
      }}</template>
    </SharedModalStory>
  </teleport>
</template>
<script setup lang="ts">
// import DevelopmentSite from '@/assets/images/stories/development-site.webp'
// import DevelopmentSitePreview from '@/assets/images/stories/development-site-preview.webp'
import type { ISharedStoryCard } from '~/components/SharedStory/SharedStory.types'
import SharedStory from '~/components/SharedStory/SharedStory.vue'

const cards = reactive<ISharedStoryCard[]>([
  {
    id: 1,
    img: 'DevelopmentSite',
    isViewed: false,
    preview: 'DevelopmentSitePreview',
    text: 'Hi! This is project release! 🎉😅‍💻🧠'
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

const close = () => {
  cards[activeIdx.value].isViewed = true
  activeIdx.value = 0
  isModalOpen.value = false
}
</script>
<style scoped lang="scss" src="./ControllerStories.scss"></style>
