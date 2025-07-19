<template>
  <ul class="list" ref="listRoot">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="['list__item', hasVisible && 'fade-in-up']"
      :style="`animation-delay: ${index * 150}ms`"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SharedListExpose, SharedListProps } from './SharedList.types'

defineProps<SharedListProps>()

// ref на внутренний элемент
const listRoot = ref<HTMLElement | null>(null)

// Экспортируешь его наружу
defineExpose<SharedListExpose>({
  listRoot
})
</script>

<style scoped lang="scss" src="./SharedList.scss"></style>
