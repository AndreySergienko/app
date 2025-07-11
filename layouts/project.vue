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

        <slot />
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
    right: 20rem;
    top: 15rem;
    z-index: 1;

    @include media.media-breakpoint-down(xl) {
      top: 7rem;
      right: 10rem;
    }

    @include media.media-breakpoint-down(l) {
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
// .project__share-icons {
//   display: flex;
//   gap: 1.3rem;
//   font-size: var(--font-size-xxl);
// }

//@include media.media-breakpoint-down(xl) {
//  .projects-layout__nav {
//    right: 100px;
//  }
//}
//
//@include media.media-breakpoint-down(md) {
//  .projects-layout__nav {
//    display: none;
//  }
//}
//
//.projects-layout__nav-item {
//  padding: 7px;
//  border-left: 2px solid var(--dark-gray);
//  color: var(--dark-gray);
//  cursor: pointer;
//}
//
//.projects-layout__nav-item.active {
//  border-left: 2px solid var(--black);
//  color: var(--black);
//}
//
//@include media.media-breakpoint-down(l) {
//  .sidebar {
//    display: none;
//  }
//
//  .projects-layout__button {
//    left: 30px;
//  }
//}
//
//@include media.media-breakpoint-down(md) {
//  .projects-layout__button {
//    left: 20px;
//  }
//}
</style>
