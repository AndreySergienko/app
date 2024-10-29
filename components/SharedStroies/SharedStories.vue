<template>
  <div class="card__story">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card__story-item"
      @click="openModal(card)"
    >
      <img :src="card.img" alt="img" />
      <div class="card__story-followers">
        <nuxt-icon :name="card.play" filled />
        <div :style="{ color: index === 1 ? 'black' : 'white' }">{{ card.followers }}</div>
      </div>
      <div v-if="index === 4" class="overlay">
        <span class="overlay-text">Просмотрено</span>
      </div>
    </div>
  </div>
  <div v-if="isModalOpen" class="modal">
    <nuxt-icon class="close" name="close" filled @click="closeModal" />
    <div class="modal__content">
      <nuxt-icon class="modal__icon" name="prev" filled />
      <div
        class="progress-bar"
        :style="{ width: progress + '%' }"
        @mousedown="pauseProgress"
        @mouseup="resumeProgress"
      ></div>
      <img class="modal__img" src="../../assets/images/ModalStories.png" alt="img" />
      <nuxt-icon class="modal__icon" name="next" filled />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Stories1 from '@/assets/images/Stories_1.png'
import Stories2 from '@/assets/images/Stroies_2.png'
import Stories3 from '@/assets/images/Stories_3.png'

const isModalOpen = ref(false)
const selectedCard = ref(null)

function openModal(card) {
  selectedCard.value = card
  isModalOpen.value = true
  setTimeout(() => {
    closeModal()
  }, 3000)
}

function closeModal() {
  isModalOpen.value = false
  selectedCard.value = null
}

const cards = reactive([
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories2,
    followers: '16,2 K',
    play: 'dark_play'
  },
  {
    img: Stories3,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  },
  {
    img: Stories1,
    followers: '16,2 K',
    play: 'white_play'
  }
])
</script>
<style scoped src="./SharedStories.css"></style>
