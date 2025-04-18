<template>
  <div class="modal">
    <nuxt-icon class="close" name="close" filled @click="closeModal" />
    <div class="modal__content">
      <nuxt-icon class="modal__icon" name="prev" filled />
      <div class="progress__wrapper">
        <div
          class="progress__bar"
          :style="{ transform: `scaleX(${progressWidth / 100})` }"
        />
      </div>
      <div class="modal__slot">
        <slot />
      </div>
      <nuxt-icon class="modal__icon" name="next" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const progressWidth = ref<number>(0)
const duration = 15000 // 15 сек

const startTime = ref<number>(0)
const rafId = ref<number | null>(null)

function closeModal() {
  emit('close')
}

function close() {
  if (rafId.value) cancelAnimationFrame(rafId.value)
}

function step(timestamp: number) {
  const elapsed = timestamp - startTime.value
  progressWidth.value = Math.min(100, (elapsed / duration) * 100)

  if (elapsed < duration) {
    rafId.value = requestAnimationFrame(step)
  } else {
    // Даем UI догнать перед скрытием
    requestAnimationFrame(() => close())
  }
}

onMounted(() => {
  startTime.value = performance.now()
  rafId.value = requestAnimationFrame(step)
})

onUnmounted(() => {
  close()
})
</script>

<style scoped src="./SharedStoryModal.scss"></style>
