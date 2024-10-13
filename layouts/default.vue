<template>
  <div class="default-layout">
    <header>
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories class="stories" />
        <ControllerAnnouncements class="announcements" />
        <slot />
        <SharedEnd />
      </SharedContainer>
    </main>
  </div>
</template>

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
</style>
