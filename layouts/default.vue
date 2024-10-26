<template>
  <div class="default-layout">
    <header>
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories class="stories" />
        <ControllerAnnouncements class="announcements" />

        <div class="tabs">
          <SharedLink v-for="tab in tabs" :key="tab.title" class="tabs_item" :to="tab.to">
            {{ tab.title }}
          </SharedLink>
        </div>

        <slot />
        <SharedEnd />
      </SharedContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  {
    title: 'Posts',
    to: '/posts'
  },
  {
    title: 'Projects',
    to: '/projects'
  }
]
</script>

<style scoped>
.default-layout {
  display: flex;

  @media (width <= 1024px) {
    flex-direction: column;
  }
}

.stories,
.announcements {
  margin-bottom: var(--gap-xl);
}

.tabs {
  display: flex;
  gap: var(--gap-m);
}

.tabs_item {
  transition: var(--duration);
}

.tabs__item:hover {
  color: var(--black);
}
</style>
