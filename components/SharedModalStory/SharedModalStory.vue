<template>
  <div class="modal" @click="handleClickOutside">
    <nuxt-icon class="close" name="close" filled @click="$emit('close')" />
    <div class="modal__container">
      <nuxt-icon
        v-if="hasPrev"
        class="modal__icon"
        name="prev"
        filled
        @click="$emit('prev')"
      />
      <div ref="$modalContent" class="modal__content">
        <div class="progress__wrapper">
          <div
            class="progress__bar"
            :style="{ transform: `scaleX(${progressWidth / 100})` }"
          />
        </div>
        <div class="modal__slot">
          <slot />
          <div v-if="$slots.text" class="modal__text">
            <slot name="text" />
          </div>
        </div>
      </div>
      <nuxt-icon
        class="modal__icon"
        name="next"
        v-if="hasNext"
        filled
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISharedModalStoryEmits,
  ISharedModalStoryProps
} from '~/components/SharedModalStory/SharedModalStory.types'

const emit = defineEmits<ISharedModalStoryEmits>()
const props = defineProps<ISharedModalStoryProps>()

const progressWidth = ref<number>(0)
const isStop = ref<boolean>(false)
const DURATION = 15000
const pausedAt = ref<number>(0)

const startTime = ref<number>(0)
const rafId = ref<number | null>(null)
const $modalContent = ref<HTMLElement | null>(null)

function close() {
  if (rafId.value) cancelAnimationFrame(rafId.value)

  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('keydown', handlerEsc)
}

function clearProgress() {
  pausedAt.value = 0
  startTime.value = performance.now()
  rafId.value = requestAnimationFrame(step)
}

function step(timestamp: number) {
  if (isStop.value) return
  const elapsed = pausedAt.value + (timestamp - startTime.value)
  progressWidth.value = Math.min(100, (elapsed / DURATION) * 100)

  if (elapsed < DURATION) {
    rafId.value = requestAnimationFrame(step)
  } else if (props.hasNext) {
    emit('next')
    clearProgress()
  } else {
    requestAnimationFrame(() => close())
  }
}

function handlerEsc(e: KeyboardEvent) {
  if (e.code === 'Escape') emit('close')
}

onMounted(() => {
  startTime.value = performance.now()
  rafId.value = requestAnimationFrame(step)

  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('keydown', handlerEsc)
})

function onMouseDown() {
  isStop.value = true

  pausedAt.value += performance.now() - startTime.value
}

function onMouseUp() {
  isStop.value = false

  startTime.value = performance.now()
  rafId.value = requestAnimationFrame(step)
}

onUnmounted(() => {
  close()
})

function handleClickOutside(event: unknown) {
  if (
    $modalContent.value &&
    !$modalContent.value.contains(event.target) &&
    !event.target.closest('svg')
  ) {
    emit('close')
  }
}
</script>

<style scoped src="./SharedModalStory.scss"></style>
