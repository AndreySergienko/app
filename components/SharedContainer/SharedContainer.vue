<template>
  <div class="shared-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.shared-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: calc(100vw - 250px);
  padding: var(--gap-l);
  margin: 0 auto;
}

@include media.media-breakpoint-down(xl) {
  .shared-container {
    min-width: 100vw;
  }
}

@include media.media-breakpoint-down(l) {
  .shared-container {
    padding: 25px;
    align-items: flex-start;
  }
}
</style>
