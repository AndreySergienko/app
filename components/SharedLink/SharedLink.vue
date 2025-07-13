<template>
  <nuxt-link class="shared-link" v-bind="$props"><slot /></nuxt-link>
</template>

<script setup lang="ts">
import type { LinkType } from '~/types/component.types'

defineProps<Omit<LinkType, 'title'>>()
</script>

<style scoped>
.shared-link {
  color: var(--black);
  cursor: pointer;
  font-size: var(--font-size-s);
  text-decoration: none;
}
</style>
