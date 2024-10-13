<template>
  <div class="default-layout">
    <header>
      <SharedSidebar />
    </header>
    <main>
      <SharedContainer>
        <ControllerStories />
        <ControllerAnnouncements />
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
</style>
