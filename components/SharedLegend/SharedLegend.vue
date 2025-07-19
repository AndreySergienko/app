<template>
  <div class="legend">
    <NuxtIcon class="legend__icon" name="question" filled />
    <div class="legend__tooltip">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.legend {
  position: relative;
  display: inline-block;
  cursor: pointer;

  &__icon {
    font-size: 2rem;
    background-color: var(--gray);
    border-radius: 50%;
    color: var(--dark-gary);
  }

  &__tooltip {
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 20rem;
    padding: 0.5rem;
    background-color: white;
    color: var(--black);
    border: 1px solid var(--dark-gray);
    border-radius: 1rem;
    font-size: 1.2rem;
    line-height: 1.3;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 10;
    white-space: normal;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -0.6rem;
      border-width: 0.6rem;
      border-style: solid;
      border-color: var(--dark-gray) transparent transparent transparent;
    }
  }
}

.legend:hover .legend__tooltip {
  opacity: 1;
  pointer-events: auto;
}
</style>
