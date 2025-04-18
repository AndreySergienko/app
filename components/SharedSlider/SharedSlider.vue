<template>
  <div ref="$slider" class="slider">
    <div v-if="MINIMUM_SLIDE !== currentPage" @click="prevSlide" class="arrow">
      <nuxt-icon class="slider__icon" name="prev" filled />
    </div>
    <div class="slider__content" ref="slides">
      <slot name="slide" :anim="{}" />
    </div>
    <div v-if="!lastPage" @click="nextSlide" class="arrow arrow--next">
      <nuxt-icon width="30" class="slider__icon" name="next" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSlider} from "~/components/SharedSlider/useSlider"

interface ISharedSliderProps {
  limit?: number
  length: number
  width?: string
}

const props = withDefaults(defineProps<ISharedSliderProps>(), {
  limit: 5,
  width: '675px'
})

const MINIMUM_SLIDE = 0

const isMounted = ref<boolean>(false)
const slides = ref<HTMLElement | null>()
const $slider = ref<HTMLElement | null>(null)
const cardWidth = ref<number>(0)
const $slideList = ref<Element>()

const currentPage = ref<number>(MINIMUM_SLIDE)
const maxOffset = ref<number>(0)
const lastPage = computed<boolean>(() =>
  maxOffset.value ? currentOffset.value === maxOffset.value : false)

function setMove(px: number) {
  if (!$slideList.value) return
  console.log(px)
  $slideList.value.style.transform = `translateX(-${px}px)`
}

const {currentOffset, animateTo, isAnimating, animationFrameId} = useSlider(setMove)
// const {onMouseDown} = useSliderDragSpin({
//   move: setMove,
//   currentOffset,
//   maxOffset
// })

function adaptiveData(sliderPageNew: number, slidePageOld: number) {
  if (!$slideList.value) return
  let offset = 0
  if (sliderPageNew > slidePageOld)
    offset = Math.min(currentOffset.value + cardWidth.value * 2, maxOffset.value)
  else offset = Math.max(currentOffset.value - cardWidth.value * 2, 0)

  return animateTo(offset)
}

watch(currentPage, adaptiveData)


onMounted(() => {
  isMounted.value = true
})
onMounted(prerenderOptions)


function prerenderOptions() {
  if (!slides.value) return
  $slideList.value = slides.value.children[0]
  const gap = parseInt(getComputedStyle($slideList.value).gap)
  const $slide = $slideList.value.children[0]
  const {fullWidth} = getParametersSlide($slide, gap)
  cardWidth.value = fullWidth
  maxOffset.value = cardWidth.value * (props.length - props.limit)
}

function getParametersSlide($slide: Element, gap: number) {
  const width = $slide.getBoundingClientRect().width
  const fullWidth = width + gap
  return {
    fullWidth,
    width
  }
}

const nextSlide = () => {
  if (lastPage.value || isAnimating.value || animationFrameId.value) return
  currentPage.value++
}

const prevSlide = () => {
  if (MINIMUM_SLIDE === currentPage.value || isAnimating.value || animationFrameId.value) return
  currentPage.value--
}
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  display: flex;
  align-items: center;
  max-width: v-bind('props.width');

  &__content {
    overflow: hidden;
    width: 100%;
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
