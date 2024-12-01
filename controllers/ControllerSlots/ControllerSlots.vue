<template>
  <div class="slots">
    <SharedTitle class="slots__title">
      <div class="tabs">
        <SharedTab v-for="tab in tabs" :key="tab.name" :tab="tab" />
      </div>
    </SharedTitle>
    <div class="controller">
      <slot />
    </div>
  </div>
</template>
<script setup>
const tabs = [
  { name: 'Posts', to: '/posts' },
  { name: 'Projects', to: '/projects' }
]
</script>
<style scoped>
.slots__title {
  margin-bottom: var(--gap-l);
}

.tabs {
  display: flex;
  gap: var(--gap-l);
}
</style>
