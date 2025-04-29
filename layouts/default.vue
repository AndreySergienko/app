<template>
  <div class="default-layout">
    <header class="header">
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories />
        <div class="default-layout__announcements">
          <ControllerAnnouncements />
        </div>
        <div class="default-layout__tab">
          <SharedTab :class="{ active: route.path === '/' }" to="posts"
            >Posts</SharedTab
          >
          <SharedTab to="projects">Project</SharedTab>
        </div>
        <slot />
      </SharedContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.default-layout {
  display: flex;

  &__announcements {
    margin-top: var(--gap-l);
    margin-bottom: var(--gap-xxl);
  }

  &__tab {
    display: flex;
    gap: var(--gap-l);
    margin-bottom: var(--gap-l);
  }

  @include media.media-breakpoint-down(l) {
    flex-direction: column;
  }
}
</style>
