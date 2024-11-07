<template>
  <div>
    <div class="tabs">
      <nuxt-link
        v-for="tab in tabs"
        :key="tab"
        :to="tab === 'Posts' ? '/posts' : '/projects/projects'"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const tabs = ['Posts', 'Projects']
const activeTab = ref('Posts')
</script>

<style>
.tabs {
  display: flex;
  gap: 20px;
}

.tab {
  color: rgb(0 0 0 / 40%);
  cursor: pointer;
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  transition: color 0.3s ease;
  text-decoration: none;
}

.tab.active {
  color: rgb(0 0 0 / 100%);
}

.tab__content {
  max-width: 670px;
  margin-top: 20px;
}
</style>
