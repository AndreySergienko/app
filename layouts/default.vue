<template>
  <div class="default-layout">
    <header class="header">
      <SharedSidebar />
    </header>
    <div class="default-layout__inner">
      <SharedContainer>
        <!-- <ControllerStories /> -->
        <ControllerAnnouncements />
        <div>
          <div class="tabs">
            <SharedTab to="/posts" :is-active="isActivePostsTab">
              Посты
            </SharedTab>
            <SharedTab to="/projects">Описание проектов</SharedTab>
          </div>
        </div>

        <main>
          <slot />
        </main>

        <SharedEnd />
      </SharedContainer>
    </div>
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

  &__inner {
    padding-left: 24rem;
    width: 100%;

    @include media.media-breakpoint-down(l) {
      padding-left: 0;
    }
  }

  &__container {
    width: 100%;
  }

  &__announcements {
    margin-top: var(--gap-xxl);
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

.tabs {
  display: flex;
  gap: var(--gap-l);
  margin-bottom: var(--gap-l);
  margin-top: var(--gap-xxl);
  justify-content: flex-start;
}
</style>
