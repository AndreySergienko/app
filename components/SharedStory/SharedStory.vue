<template>
  <div class="card__story" @click="openModal">
    <div class="card__story-item">
      <img class="card__story-img" :src="card.img" :alt="alt" />
      <div v-if="!card.isViewed" class="card__story-followers">
        <nuxt-icon name="white_play" filled />
      </div>
      <div v-if="card.isViewed" class="overlay">
        <span class="overlay-text">Просмотрено</span>
      </div>
    </div>
  </div>

  <teleport to="body">
    <SharedModal v-if="isModalOpen" @close="isModalOpen = false">
      <img :src="card.img" :alt="alt" />
    </SharedModal>
  </teleport>
</template>

<script setup lang="ts">
import type {ISharedStoryProps} from './SharedStory.types'

const props = defineProps<ISharedStoryProps>()
const {card} = toRefs(props)

const isModalOpen = ref<boolean>(false)

const alt = computed<string>(() => `stories-${card.value.id}`)

function openModal() {
  isModalOpen.value = true
}
</script>

<style scoped src="./SharedStory.scss"></style>
