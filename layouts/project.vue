<template>
  <div class="projects-layout">
    <header>
      <SharedSidebar />
    </header>
    <div class="projects-layout__button">
      <button @click="main">
        <nuxt-icon name="arrow_back" filled />
        Back
      </button>
    </div>
    <div class="projects-layout__nav">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      >
        {{ item }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const items = ['Promtopia', 'Control', 'Main idea', 'Challenge']
const activeIndex = ref(0)

function setActive(index) {
  activeIndex.value = index

  const section = document.getElementById(`section-${index}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const router = useRouter()

const main = () => {
  router.push('/')
}
</script>

<style>
.projects-layout {
  display: flex;
  gap: 250px;
}

.projects-layout__button {
  position: absolute;
  top: 60px;
  left: 490px;
  cursor: pointer;
}

.projects-layout__button button {
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: var(--font-size-s);
  font-weight: var(--weight-medium);
}

.projects-layout__button svg {
  width: 22px;
}

.projects-layout__nav {
  position: fixed;
  top: 187px;
  right: 170px;
  display: flex;
  flex-direction: column;
}

.projects-layout__nav div {
  padding: 7px;
  border-left: 2px solid var(--dark-gray);
  color: var(--dark-gray);
  cursor: pointer;
}

.projects-layout__nav div.active {
  border-left: 2px solid var(--black);
  color: var(--black);
}
</style>
