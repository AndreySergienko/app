<template>
  <SharedProject v-for="(project, id) in projects" :key="id" v-bind="project" />
</template>
<script setup lang="ts">
import Projects from '~/assets/images/Projects.png'
import type { SharedProjectProps } from '~/components/SharedProject/SharedProject.types'

const projects = reactive<Array<SharedProjectProps>>([
  {
    id: 1,
    img: Projects,
    name: 'Promptopia Web-site',
    projectItems: ['Front-Head', 'Senior Frontend']
  },
  {
    id: 2,
    img: Projects,
    name: 'Promptopia Web-site'
  }
])
</script>
