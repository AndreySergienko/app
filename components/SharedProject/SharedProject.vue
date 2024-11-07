<template>
  <div class="projects">
    <div>
      <div class="projects__img p-30">
        <img :src="project.img" alt="Projects" />
      </div>
      <div class="projects__info pt-10">
        <nuxt-link :to="`/projects/${props.project.id}`" class="projects__name">
          {{ props.project.name }}
        </nuxt-link>
        <div class="projects__link">
          <a class="projects__lead" href="#">Project Lead</a>
          <a class="projects__dev" href="#">Development</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ProjectProps } from './SharedProject.types'

const props = defineProps<{
  project: ProjectProps
}>()
</script>

<style scoped src="./SharedProject.css"></style>
