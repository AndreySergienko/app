<template>
  <div class="default-layout">
    <header class="header">
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories />
        <ControllerAnnouncements />
        <slot />
      </SharedContainer>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.default-layout {
  display: flex;

  @include media.media-breakpoint-down(l) {
    flex-direction: column;
  }
}
</style>
