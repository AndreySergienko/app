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
        <ControllerPosts />
      </div>
      <div v-if="activeTab === 'Projects'">
        <ControllerProjects />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ControllerPosts from '~/controllers/ControllerPosts/ControllerPosts.vue'
import ControllerProjects from '~/controllers/ControllerProjects/ControllerProjects.vue'

const tabs = ['Posts', 'Projects']
const activeTab = ref('Posts')
</script>

<style>
.tabs {
  display: flex;
  margin-top: 40px;
  gap: 20px;
}

.tab {
  color: rgb(0 0 0 / 40%);
  cursor: pointer;
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  transition: color 0.3s ease;
}

.tab.active {
  color: rgb(0 0 0 / 100%);
}

.tab__content {
  max-width: 670px;
  margin-top: 20px;
}
</style>
