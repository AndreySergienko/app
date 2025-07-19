<template>
  <div class="project-layout">
    <header>
      <SharedSidebar class="sidebar" />
    </header>
    <div class="project-layout__inner">
      <SharedContainer class="project-layout__wrapper">
        <button class="project-layout__button" @click="$router.back()">
          <nuxt-icon name="arrow_back" filled />
          Back
        </button>
        <h1 class="project-layout__title" v-html="$route.meta.title" />
        <ControllerDescription />

        <main><slot /></main>
        <SharedShare />
      </SharedContainer>
    </div>
    <div class="project-layout__anchors">
      <ControllerAnchor />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.project-layout {
  display: flex;

  &__inner {
    padding-left: 24rem;
    width: 100%;

    @include media.media-breakpoint-down(l) {
      padding-left: 0;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xxl);

    @include media.media-breakpoint-down(l) {
      gap: var(--gap-xl);
    }

    @include media.media-breakpoint-down(md) {
      gap: var(--gap-l);
    }
  }

  &__button {
    display: flex;
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: var(--font-size-s);
    font-weight: var(--weight-medium);

    &:deep(svg) {
      margin-right: 1rem;
      width: 2.2rem;
    }
  }

  &__anchors {
    position: fixed;
    right: 15rem;
    top: 10rem;
    z-index: 1;

    @include media.media-breakpoint-down(xl) {
      display: none;
    }
  }

  &__title {
    font-size: 2.4rem;
  }

  @include media.media-breakpoint-down(l) {
    flex-direction: column;
  }
}
</style>
