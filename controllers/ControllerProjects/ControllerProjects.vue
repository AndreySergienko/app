<template>
  <SharedProject v-for="(project, id) in projects" :key="id" :project="project" />
</template>
<script setup lang="ts">
import Projects from '~/assets/images/Projects.png'
import type { ISharedProjectProps } from '~/components/SharedProject/SharedProject.types'

const projects = reactive<Array<ISharedProjectProps>>([
  {
    id: 1,
    img: Projects,
    name: 'Promptopia Web-site'
  },
  {
    id: 2,
    img: Projects,
    name: 'Promptopia Web-site'
  }
])
</script>
