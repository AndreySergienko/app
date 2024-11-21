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
        v-for="(item, id) in items"
        :key="id"
        class="projects-layout__nav-item"
        :class="{ active: activeIndex === item.id }"
        @click="setActive(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface IItem {
  name: string
  id: number
}

const items: IItem[] = [
  {
    name: 'Promtopia',
    id: 0
  },
  {
    name: 'Control',
    id: 1
  },
  {
    name: 'Main idea',
    id: 2
  },
  {
    name: 'Challenge',
    id: 3
  }
]
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

.projects-layout__nav-item {
  padding: 7px;
  border-left: 2px solid var(--dark-gray);
  color: var(--dark-gray);
  cursor: pointer;
}

.projects-layout__nav-item.active {
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
