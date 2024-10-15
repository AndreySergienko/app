<template>
  <div>
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab__content">
      <div v-if="activeTab === 'Posts'">
        <SharedPosts />
      </div>
      <div v-if="activeTab === 'Projects'">
        <SharedProjects />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SharedPosts from '../SharedPosts/SharedPosts.vue'
import SharedProjects from '../SharedProjects/SharedProjects.vue'

const tabs = ['Posts', 'Projects']
const activeTab = ref('Posts')
</script>

<style>
.tabs {
  margin-top: 40px;
  display: flex;
  gap: 20px;
}

.tab {
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s ease;
}

.tab.active {
  color: rgba(0, 0, 0, 1);
}

.tab__content {
  max-width: 670px;
  margin-top: 20px;
}
</style>
