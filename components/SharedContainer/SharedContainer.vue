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
}

@media (max-width: 1433px) {
  .shared-container {
    min-width: 100vw;
  }
}

@media (max-width: 1186px) {
  .shared-container {
    padding: 20px 20px 20px 250px;
  }
}

@media (max-width: 960px) {
  .shared-container {
    padding: 25px;
  }
}
</style>
