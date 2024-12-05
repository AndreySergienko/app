<template>
  <div class="card__story" @click="handleClickCard">
    <div class="card__story-item">
      <div class="card__story-block__img">
        <div class="card__story-img">
          <img :src="props.card.img" alt="img" />
        </div>
      </div>
      <div class="card__story-followers">
        <nuxt-icon :name="props.card.play" filled />
        <div :style="{ color: props.isSecondCard ? 'black' : 'white' }">
          {{ props.card.followers }}
        </div>
      </div>
      <div v-if="isViewed" class="overlay">
        <span class="overlay-text">Просмотрено</span>
      </div>
    </div>
  </div>
  <SharedModal v-if="isModalOpen" @close="closeModal">
    <p>Контент модального окна</p>
  </SharedModal>
</template>

<script setup lang="ts">
import type { ISharedStoryProps } from './SharedStory.types'

const props = defineProps<ISharedStoryProps>()

const isModalOpen = ref<boolean>(false)
const isViewed = ref<boolean>(false)

function handleClickCard() {
  if (!isViewed.value) {
    openModal()
  }
}

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  isViewed.value = true
}
</script>
<style scoped src="./SharedStory.css"></style>
