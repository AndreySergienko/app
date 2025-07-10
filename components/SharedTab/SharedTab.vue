<template>
  <nuxt-link :to="props.to" :class="{'tab': true, active: isActive}" active-class="active">
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
import type {ISharedTabProps} from './SharedTab.types'

const props = defineProps<ISharedTabProps>()
</script>

<style src="./SharedTab.scss" lang="scss" scoped></style>
