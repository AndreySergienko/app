<template>
  <div class="project">
    <div class="project__container">
      <div class="project__img">
        <img :src="img" alt="Projects" />
      </div>
      <div class="project__info">
        <nuxt-link :to="`/projects/${id}`" class="project__name">
          {{ name }}
        </nuxt-link>
        <ul class="project__footer" v-if="projectItems.length">
          <li v-for="item in projectItems" :key="item" class="project__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SharedProjectProps } from './SharedProject.types'

withDefaults(defineProps<SharedProjectProps>(), {
  projectItems: () => []
})
</script>

<style scoped src="./SharedProject.scss"></style>
