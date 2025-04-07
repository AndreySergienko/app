<template>
  <div class="slider">
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
const currentPage = ref<number>(MINIMUM_SLIDE)
const currentOffset = ref<number>(0)

const maxOffset = ref<number | null>(null)

const lastPage = computed<boolean>(() => currentOffset.value > (maxOffset.value || 0))
const slides = ref<HTMLElement | null>()

onMounted(() => {
  isMounted.value = true
})

const animationFrameId = ref<null | number>(null)
const isAnimating = ref(false)

function getParametersSlide($slide: Element, gap: number) {
  const width = $slide.getBoundingClientRect().width
  const fullWidth = width + gap
  return {
    fullWidth,
    width
  }
}

function adaptiveData(sliderPageNew: number, slidePageOld: number) {
  if (!slides.value) return
  const $slideList = slides.value.children[0]
  const gap = parseInt(getComputedStyle($slideList).gap)
  const $slide = $slideList.children[0]
  const { fullWidth: cardWidth } = getParametersSlide($slide, gap)
  if (maxOffset.value === null) {
    maxOffset.value = cardWidth * (props.length - props.limit)
  }
  let offset = 0

  if (sliderPageNew > slidePageOld)
    offset = Math.min(currentOffset.value + cardWidth * 2, maxOffset.value)
  else offset = Math.max(currentOffset.value - cardWidth * 2, 0)

  return animateTo(offset, $slideList)
}

const animateTo = (targetX: number, $slideList) => {
  const startTime = performance.now()
  const startX = currentOffset.value
  const delta = targetX - startX

  if (targetX === currentOffset.value) return

  if (animationFrameId.value) return

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / 300, 1) // от 0 до 1

    // ease-in-out функция
    const ease = 0.5 - Math.cos(progress * Math.PI) / 2

    const currentX = startX + delta * ease
    $slideList.style.transform = `translateX(-${currentX}px)`

    if (progress < 1) {
      animationFrameId.value = requestAnimationFrame(step)
    } else {
      currentOffset.value = targetX // зафиксировать конечное значение
      isAnimating.value = false
      animationFrameId.value = null
    }
  }

  animationFrameId.value = requestAnimationFrame(step)
}

watch(currentPage, adaptiveData)

const nextSlide = () => {
  if (lastPage.value) return
  currentPage.value++
}

const prevSlide = () => {
  if (MINIMUM_SLIDE === currentPage.value) return
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
