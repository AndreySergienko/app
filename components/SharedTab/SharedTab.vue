<template>
  <nuxt-link :to="props.to" :class="['tab', { active: isActive }]">
    {{ props.tab }}
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ISharedTabProps } from './SharedTab.types'

const props = defineProps<ISharedTabProps>()

const route = useRoute()
const isActive = computed(() => route.path === props.to)
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
