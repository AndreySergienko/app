<template>
  <nuxt-link :to="`/projects/${project.id}`" class="project">
    <div class="project__wrapper">
      <div class="project__wrapper-image">
        <NuxtImg
          class="project__image"
          :src="project.img"
          :alt="`${project.title}-image`"
        />
      </div>
      <div class="project__info">
        <span class="project__title">
          {{ project.title }}
        </span>
        <div class="project__professions">
          <span
            class="project__profession"
            v-for="professional in project.professionals"
            :key="professional"
            >{{ professional }}</span
          >
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import type { ISharedProjectProps } from './SharedProject.types'

defineProps<{
  project: ISharedProjectProps
}>()
</script>

<style scoped src="./SharedProject.scss"></style>
