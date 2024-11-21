<template>
  <div>
    <nuxt-link :to="props.to" :class="['tab', { active: props.active }]" @click="handleClick">
      {{ props.tab }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { ISharedTabProps } from './SharedTab.types'

const props = defineProps<ISharedTabProps>()
const emit = defineEmits(['updateActiveTab'])

const activeTab = ref('Posts')

function handleClick() {
  activeTab.value = props.tab
  emit('updateActiveTab', props.tab)
}
</script>

<style>
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
  margin-top: var(--gap-l);
}
</style>
