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
          <SharedTab />
        </div>
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

.tabs {
  max-width: 680px;
  width: 100%;
  margin-bottom: var(--gap-l);
}

.stories,
.announcements {
  margin-bottom: var(--gap-xl);
}
</style>
