<template>
  <div class="slider">
    <button v-if="!isFirstSlide" @click="prevSlide">Prev</button>
    <div class="slides-container">
      <div
        v-for="(slide, index) in visibleSlides"
        :key="index"
        :style="{ transform: `translateX(${-currentIndex * 0}%)` }"
        class="slide"
      >
        <slot :slide="slide" :index="index" />
      </div>
    </div>
    <button v-if="!isLastSlide" @click="nextSlide">Next</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  },
  slidesToShow: {
    type: Number,
    default: 1
  }
})

const currentIndex = ref(0)

const totalSlides = computed(() => props.slides.length)

const isFirstSlide = computed(() => currentIndex.value === 0)
const isLastSlide = computed(() => currentIndex.value >= totalSlides.value - props.slidesToShow)

const visibleSlides = computed(() => {
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
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 665px;
}
.slides-container {
  width: 500px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.slide {
  padding: 5px;
  border: 1px solid var(--dark-gray);
  width: 200px;
  transition: transform 0.3s ease;
}
</style>
