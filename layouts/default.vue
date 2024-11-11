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

<style scoped>
.default-layout {
  display: flex;
}

@media (width <= 1024px) {
  .default-layout {
    flex-direction: column;
  }
}

@media (max-width: 960px) {
  .default-layout {
    align-items: center;
  }
}

.tabs {
  max-width: 680px;
  width: 100%;
  margin-bottom: var(--gap-l);
}

.stories,
.announcements {
  margin-bottom: var(--gap-xxl);
}

@media (max-width: 705px) {
  .stories,
  .announcements,
  .slots {
    width: 100vw;
    padding: 0 25px;
  }
}

@media (max-width: 430px) {
  .stories,
  .announcements,
  .slots {
    padding: 0 5px;
  }
}
</style>
