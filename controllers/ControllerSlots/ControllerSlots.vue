<template>
  <div class="slots">
    <SharedTitle class="slots__title">
      <div class="tabs">
        <SharedTab
          v-for="tab in tabs"
          :key="tab"
          :tab="tab"
          :to="tab === 'Posts' ? '/posts' : '/projects'"
        />
      </div>
    </SharedTitle>
    <div class="controller">
      <slot />
    </div>
  </div>
</template>
<script setup>
const tabs = ['Posts', 'Projects']
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
