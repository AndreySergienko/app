<template>
  <div class="projects-layout">
    <header>
      <SharedSidebar class="sidebar" />
    </header>
    <div class="projects-layout__button">
      <button @click="navigateTo('/')">
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

<script setup lang="ts">
const items: string[] = ['Promtopia', 'Control', 'Main idea', 'Challenge']
const activeIndex = ref<number>(0)

function setActive(index: number) {
  activeIndex.value = index

  const section = document.getElementById(`section-${index}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.projects-layout {
  display: flex;
  gap: 250px;
}

.projects-layout__button {
  position: absolute;
  top: 60px;
  left: 25%;
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

@include media.media-breakpoint-down(xl) {
  .projects-layout__nav {
    right: 100px;
  }
}

@include media.media-breakpoint-down(md) {
  .projects-layout__nav {
    display: none;
  }
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

@include media.media-breakpoint-down(l) {
  .sidebar {
    display: none;
  }

  .projects-layout__button {
    left: 30px;
  }
}

@include media.media-breakpoint-down(md) {
  .projects-layout__button {
    left: 20px;
  }
}
</style>
