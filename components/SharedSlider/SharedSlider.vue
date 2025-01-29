<template>
  <div class="slider">
    <div
      v-if="MINIMUM_SLIDE !== currentSlide"
      @click="prevSlide" class="arrow">
      <nuxt-icon class="slider__icon" name="prev" filled />
    </div>
    <div class="slider__content">
      <slot name="slide" :anim="getTransform" />
    </div>
    <div v-if="lastSlide > currentSlide" @click="nextSlide" class="arrow arrow--next">
      <nuxt-icon width="30" class="slider__icon" name="next" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ISharedSliderProps {
  limit?: number;
  length: number;
}

const props = withDefaults(defineProps<ISharedSliderProps>(), {
  limit: 5
})

const MINIMUM_SLIDE = 0
const currentSlide = ref<number>(MINIMUM_SLIDE)
const lastSlide = ref<number>(Math.floor(props.length / props.limit))

const getTransform = computed<string>(() => {
  return `translateX(-${currentSlide.value * (100 / props.limit)}%)`
})

const nextSlide = () => {
  if (lastSlide.value <= currentSlide.value) return
  currentSlide.value++
}

const prevSlide = () => {
  if (MINIMUM_SLIDE === currentSlide.value) return
  currentSlide.value--
}
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 670px;

  &__content {
    overflow: hidden;
    width: 670px;
  }

  &__icon {
    font-size: 30px;
  }
}

.arrow {
  position: absolute;
  z-index: 111;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);

  &--next {
    right: 0;
    transform: translateY(-50%) translateX(50%);
  }
}
</style>
