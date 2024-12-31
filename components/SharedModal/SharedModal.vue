<template>
  <div class="modal" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
    <nuxt-icon class="close" name="close" filled @click="closeModal" />
    <div class="modal__content">
      <nuxt-icon class="modal__icon" name="prev" filled />
      <div class="progress__bar" :style="{ width: progressWidth + '%' }" />
      <img class="modal__img" src="../../assets/images/ModalStories.png" alt="img" />
      <nuxt-icon class="modal__icon" name="next" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const progressWidth = ref<number>(0)
const isMouseDown = ref<boolean>(false)
const PROGRESSINCREMENT = 1.4 // Значение для увеличения ширины прогресс-бара

let interval: ReturnType<typeof setInterval> | null = null

function closeModal() {
  emit('close')
}

function handleMouseDown() {
  isMouseDown.value = true
  clearInterval(interval!)
}

function handleMouseUp() {
  isMouseDown.value = false
  increaseProgress()
}

function increaseProgress() {
  let progressValue = progressWidth.value
  clearInterval(interval!)
  interval = setInterval(() => {
    if (!isMouseDown.value) {
      progressValue += PROGRESSINCREMENT
      progressWidth.value = progressValue
      if (progressValue >= 70) {
        clearInterval(interval!)
        closeModal()
      }
    }
  }, 100)
}

onMounted(() => {
  increaseProgress()
})

onBeforeUnmount(() => {
  clearInterval(interval!)
})
</script>

<style scoped src="./SharedModal.css"></style>
