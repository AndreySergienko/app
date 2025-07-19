<template>
  <section class="projects">
    <SharedProject
      v-for="(project, id) in projects"
      :key="id"
      :project="project"
    />
  </section>
</template>
<script setup lang="ts">
import type { ISharedProjectProps } from '~/components/SharedProject/SharedProject.types'

const projects = reactive<Array<ISharedProjectProps>>([
  {
    id: 'tastydrop',
    img: '/projects/tastydrop/tastydrop-preview.png',
    title: 'TastyDrop',
    professionals: ['Team Lead', 'Tech Lead', 'Senior developer']
  },
  {
    id: 'eterna',
    img: '/projects/eterna/eterna-preview.webp',
    title: 'Eterna',
    professionals: ['Team Lead', 'Senior developer']
  }
])
</script>

<style scoped>
.projects {
  display: grid;
  max-width: 67rem;
  gap: var(--gap-xl);
}
</style>
