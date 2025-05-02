<template>
  <div class="shared-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.shared-container {
  width: 100%;
  max-width: 715px;
  padding: var(--gap-l);
  margin: 0 auto;
}

@include media.media-breakpoint-down(l) {
  .shared-container {
    padding: var(--gap-l);
    align-items: flex-start;
  }
}
</style>
