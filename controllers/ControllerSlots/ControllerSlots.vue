<template>
  <div class="slots">
    <SharedTitle class="mb-20">
      <div class="tabs">
        <SharedTab
          v-for="tab in tabs"
          :key="tab"
          :tab="tab"
          :to="tab === 'Posts' ? '/posts' : '/projects/projects'"
          :active="activeTab === tab"
          @update-active-tab="updateActiveTab"
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
const activeTab = ref('Posts')

function updateActiveTab(tab) {
  activeTab.value = tab
}
</script>
<style scoped>
.tabs {
  display: flex;
  gap: var(--gap-l);
}
</style>
