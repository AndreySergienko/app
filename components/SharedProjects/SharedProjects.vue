<template>
  <div class="projects">
    <div v-for="(project, index) in projects" :key="index">
      <div class="projects__img">
        <img :src="project.img" alt="Projects" />
      </div>
      <div class="projects__info">
        <nuxt-link :to="`/projects/${project.id}`" class="projects__name">
          {{ project.name }}
        </nuxt-link>
        <div class="projects__link">
          <a class="projects__lead" href="#">Project Lead</a>
          <a class="projects__dev" href="#">Development</a>
        </div>
      </div>
    </div>
  </div>
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

<style>
.projects {
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
}

.projects__img {
  padding: 30px;
  border-radius: 10px;
  background-color: var(--gray);
}

.projects__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}

.projects__link {
  display: flex;
  gap: var(--gap-s);
}

.projects__lead,
.projects__dev {
  padding: 7px;
  border-radius: 3px;
  background-color: var(--gray);
  color: rgb(0 0 0 / 50%);
  font-size: var(--font-size-s);
  font-weight: var(--weight-regular);
  text-decoration: none;
  transition: color 0.3s ease;
}

.projects__lead:hover,
.projects__dev:hover {
  color: var(--black);
}

.projects__name {
  color: var(--black);
  font-size: var(--font-size-s);
  font-weight: var(--weight-medium);
  text-decoration: none;
}
</style>
