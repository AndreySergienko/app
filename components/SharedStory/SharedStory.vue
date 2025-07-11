<template>
  <div class="card__story">
    <div class="card__story-item">
      <img class="card__story-img" :src="card.img" :alt="alt" />
      <div v-if="!card.isViewed" class="card__story-followers">
        {{ card.id }}
        <nuxt-icon name="white_play" filled />
      </div>
      <div v-if="card.isViewed" class="overlay">
        <span class="overlay-text">Просмотрено</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISharedStoryProps } from './SharedStory.types'

const props = defineProps<ISharedStoryProps>()
const { card } = toRefs(props)

const alt = computed<string>(() => `stories-${card.value.id}`)
</script>

<style scoped src="./SharedStory.scss"></style>
