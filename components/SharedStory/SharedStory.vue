<template>
  <div class="card__story" @click="openModal">
    <div class="card__story-item">
      <img :src="props.card.img" alt="img" />
      <div class="card__story-followers">
        <nuxt-icon :name="props.card.play" filled />
        <div :style="{ color: props.isSecondCard ? 'black' : 'white' }">
          {{ props.card.followers }}
        </div>
      </div>
      <div v-if="props.isLastCard" class="overlay">
        <span class="overlay-text">Просмотрено</span>
      </div>
    </div>
  </div>
  <SharedModal v-if="isModalOpen" @close="isModalOpen = false">
    <p>Контент модального окна</p>
  </SharedModal>
</template>

<script setup lang="ts">
import type { ISharedStoryProps } from './SharedStory.types'

const props = defineProps<ISharedStoryProps>()

const isModalOpen = ref<boolean>(false)

function openModal() {
  isModalOpen.value = true
}
</script>
<style scoped src="./SharedStory.css"></style>
