<template>
  <div class="modal">
    <nuxt-icon class="close" name="close" filled @click="closeModal" />
    <div class="modal__content">
      <nuxt-icon class="modal__icon" name="prev" filled />
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

function closeModal() {
  emit('close')
}
</script>

<style scoped src="./SharedModal.scss"></style>
