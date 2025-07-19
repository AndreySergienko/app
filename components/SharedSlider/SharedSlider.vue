<template>
  <div ref="$slider" class="slider" @mousedown="onMouseDown">
    <div v-if="hasPrev" @click="prevSlide" class="arrow">
      <nuxt-icon class="slider__icon" name="prev" filled />
    </div>
    <div class="slider__content" ref="$sliderWrapper">
      <slot name="slide" />
    </div>
    <div v-if="hasNext" @click="nextSlide" class="arrow arrow--next">
      <nuxt-icon width="30" class="slider__icon" name="next" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlider } from './composables/useSlider'
import { useSliderDragSpin } from './composables/useSliderDragSpin'
import { useSliderDragSpinMobile } from './composables/useSliderDragSpinMobile'

interface ISharedSliderProps {
  length: number
  gap?: string
  maxWidth?: string
}

const props = withDefaults(defineProps<ISharedSliderProps>(), {
  maxWidth: '67.5rem',
  gap: '2rem'
})

const MINIMUM_SLIDE = 0

const isMounted = ref<boolean>(false)
const $sliderWrapper = ref<HTMLElement | null>()
const $slider = ref<HTMLElement | null>(null)
const cardWidth = ref<number>(0)

const scrollLeft = ref<number>(0)
const currentPage = ref<number>(MINIMUM_SLIDE)
const maxOffset = ref<number>(0)

const updateScroll = (value: number) => {
  if (!$sliderWrapper.value) return
  $sliderWrapper.value.scrollLeft = value
  scrollLeft.value = $sliderWrapper.value.scrollLeft
}

const { currentOffset, animateTo } = useSlider(
  $sliderWrapper as Ref<HTMLElement>,
  updateScroll
)

const { onMouseDown, initWheel, removeWheel } = useSliderDragSpin({
  sliderList: $sliderWrapper as Ref<HTMLElement>,
  slider: $slider as Ref<HTMLElement>,
  updateScroll
})

const { initMobileScroll, removeMobileScroll } = useSliderDragSpinMobile({
  sliderList: $sliderWrapper as Ref<HTMLElement>,
  slider: $slider as Ref<HTMLElement>,
  updateScroll
})

onMounted(() => {
  initWheel()
  initMobileScroll()
})

onUnmounted(() => {
  removeWheel()
  removeMobileScroll()
})

function adaptiveData(sliderPageNew: number, slidePageOld: number) {
  const howLontToScroll = 1
  if (!$sliderWrapper.value) return
  let offset = 0
  if (sliderPageNew > slidePageOld)
    offset = Math.min(
      currentOffset.value + cardWidth.value * howLontToScroll,
      maxOffset.value
    )
  else
    offset = Math.max(
      currentOffset.value - cardWidth.value * howLontToScroll,
      0
    )

  return animateTo(offset)
}

watch(currentPage, adaptiveData)

onMounted(() => {
  isMounted.value = true
})
onMounted(prerenderOptions)

const hasPrev = computed<boolean>(() => scrollLeft.value !== 0)
const hasNext = computed<boolean>(() => {
  if (!$sliderWrapper.value) return false
  const epsilon = 2
  const scrolled = Math.ceil(
    scrollLeft.value + $sliderWrapper.value.clientWidth
  )
  const total = Math.ceil($sliderWrapper.value.scrollWidth)

  return scrolled + epsilon < total
})

function prerenderOptions() {
  if (!$sliderWrapper.value) return
  const slide = $sliderWrapper.value.children[0]
  $sliderWrapper.value.style.transition = 'transform .1s ease'
  const gap = parseInt(getComputedStyle($sliderWrapper.value).gap)
  const { fullWidth } = getParametersSlide(slide as HTMLElement, gap)
  cardWidth.value = fullWidth
  const limit = calculateLimit(cardWidth.value)
  maxOffset.value = cardWidth.value * (props.length - limit)
}

function calculateLimit(cardWidth: number): number {
  if ($slider.value) {
    return $slider.value.getBoundingClientRect().width / cardWidth
  }

  return 1
}

function getParametersSlide($slide: HTMLElement, gap: number) {
  const width = $slide.getBoundingClientRect().width
  const fullWidth = width + gap
  return {
    fullWidth,
    width
  }
}

const nextSlide = () => {
  if (!hasNext.value) return
  currentPage.value++
}

const prevSlide = () => {
  if (!hasPrev.value) return
  currentPage.value--
}
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    gap: v-bind('gap');
    overflow: hidden;
    width: 100%;
  }

  &__icon {
    font-size: 3rem;
  }
}

.arrow {
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  z-index: 111;
  top: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-50%) translateX(-50%);
  border-radius: 50%;

  &--next {
    right: 0;
    transform: translateY(-50%) translateX(50%);
  }
}
</style>
