<template>
  <nuxt-link :to="props.tab.to" class="tab" active-class="active">
    {{ props.tab.name }}
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ISharedTabProps } from './SharedTab.types'

const props = defineProps<ISharedTabProps>()
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
