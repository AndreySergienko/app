<template>
  <div class="default-layout">
    <header class="header">
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <!--        <ControllerStories />-->
        <ControllerAnnouncements />
        <div class="tabs">
          <SharedTab to="/posts" :is-active="isActivePostsTab">Posts</SharedTab>
          <SharedTab to="/projects">Project</SharedTab>
        </div>
        <slot />
      </SharedContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isActivePostsTab = computed(() => route.path === '/')
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.default-layout {
  display: flex;

  @include media.media-breakpoint-down(l) {
    flex-direction: column;
  }
}

.tabs {
  display: flex;
  gap: var(--gap-s);
  margin-bottom: var(--gap-s);
}
</style>
