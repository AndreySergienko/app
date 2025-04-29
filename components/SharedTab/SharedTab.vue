<template>
  <nuxt-link :to="to" class="tab" active-class="active">
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ISharedTabProps } from './SharedTab.types'
defineProps<ISharedTabProps>()
</script>

<style>
.tab {
  color: rgb(0 0 0 / 40%);
  cursor: pointer;
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  text-decoration: none;
  transition: color 0.3s ease;
}

.tab.active {
  color: rgb(0 0 0 / 100%);
}

.tab__content {
  max-width: 670px;
  margin-top: var(--gap-l);
}
</style>
