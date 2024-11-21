<template>
  <div class="projects">
    <div>
      <div class="projects__img">
        <img :src="project.img" alt="Projects" />
      </div>
      <div class="projects__info">
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
import type { ISharedProjectProps } from './SharedProject.types'

const props = defineProps<{
  project: ISharedProjectProps
}>()
</script>

<style scoped src="./SharedProject.scss"></style>
