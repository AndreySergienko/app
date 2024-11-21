<template>
  <div class="slider mt-20">
    <button v-if="!isFirstSlide" @click="prevSlide">Prev</button>
    <div class="slides-container">
      <div
        v-for="(slide, slideIndex) in visibleSlides"
        :key="slideIndex"
        :style="{ transform: `translateX(${-currentIndex * 0}%)` }"
        class="slide"
      >
        <slot :slide="slide" :slide-index="slideIndex" />
      </div>
    </div>
    <button v-if="!isLastSlide" @click="nextSlide">Next</button>
  </div>
</template>

<script lang="ts" setup>
import type { ISharedSliderProps } from './SharedSlider.types'

const props = defineProps<ISharedSliderProps>()

const currentIndex = ref<number>(0)

const totalSlides = computed<number>(() => props.slides.length)

const isFirstSlide = computed<boolean>(() => currentIndex.value === 0)
const isLastSlide = computed<boolean>(
  () => currentIndex.value >= totalSlides.value - props.slidesToShow
)

const visibleSlides = computed<Array<string>>(() => {
  return props.slides.slice(currentIndex.value, currentIndex.value + props.slidesToShow)
})

const nextSlide = () => {
  if (!isLastSlide.value) currentIndex.value++
}

const prevSlide = () => {
  if (!isFirstSlide.value) currentIndex.value--
}
</script>

<style>
.slider {
  display: flex;
  max-width: 665px;
  align-items: center;
  justify-content: center;
}

.slides-container {
  display: flex;
  overflow: hidden;
  width: 500px;
  width: 100%;
  justify-content: center;
  gap: var(--gap-s);
}

.slide {
  width: 200px;
  padding: 5px;
  border: 1px solid var(--dark-gray);
  transition: transform var(--duration) ease;
}
</style>
