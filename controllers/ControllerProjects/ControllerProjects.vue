<template>
  <SharedProject v-for="(project, index) in projects" :key="index" :project="project" />
</template>
<script setup>
import { reactive } from 'vue'
import Projects from '~/assets/images/Projects.png'

const projects = reactive([
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
