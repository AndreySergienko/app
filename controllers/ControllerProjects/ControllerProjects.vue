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
import TastyDropPreview from '~/assets/images/projects/tastydrop-preview.png'

const projects = reactive<Array<ISharedProjectProps>>([
  {
    id: 'tastydropme',
    img: TastyDropPreview,
    title: 'TastyDrom me',
    professionals: ['Team Lead', 'Tech Lead', 'Senior developer']
  }
])
</script>

<style scoped>
.projects {
  display: grid;
  max-width: 67rem;
  gap: var(--gap-l);
}
</style>
