<template>
  <div class="default-layout">
    <header class="header">
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories class="stories" />
        <ControllerAnnouncements class="announcements" />
        <ControllerSlots class="slots">
          <slot />
        </ControllerSlots>
        <SharedEnd />
      </SharedContainer>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.default-layout {
  display: flex;
}

@media (width <= 1024px) {
  .default-layout {
    flex-direction: column;
  }
}

.header {
  position: fixed;
  max-width: 250px;
}

main {
  margin-left: 250px;
}

@include media.media-breakpoint-down(l) {
  main {
    margin-left: 0;
  }

  .header {
    position: relative;
  }
}

.stories,
.announcements {
  margin-bottom: var(--gap-xxl);
}

@include media.media-breakpoint-down(l) {
  .announcements,
  .slots {
    width: 100%;
  }
}
</style>
