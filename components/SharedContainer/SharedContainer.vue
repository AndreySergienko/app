<template>
  <div class="shared-container">
    <slot />
  </div>
</template>

<style scoped>
.shared-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: calc(100dvw - 250px);
  padding: 20px;
  margin: 0 auto;

  @media (width <= 1024px) {
    min-width: 100dvw;
  }
}
</style>
