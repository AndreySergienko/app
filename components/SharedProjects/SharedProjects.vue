<template>
  <div class="projects">
    <div v-for="(project, index) in projects" :key="index">
      <div class="projects__img">
        <img :src="project.img" alt="Projects" />
      </div>
      <div class="projects__info">
        <h3 class="projects__name">{{ project.name }}</h3>
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
    img: Projects,
    name: 'Promptopia Web-site'
  },
  {
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
  background-color: var(--gray);
  padding: 30px;
  border-radius: 10px;
}

.projects__info {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projects__link {
  display: flex;
  gap: var(--gap-s);
}

.projects__lead,
.projects__dev {
  padding: 7px;
  font-size: var(--font-size-s);
  font-weight: var(--weight-regular);
  background-color: var(--gray);
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border-radius: 3px;
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
}
</style>
