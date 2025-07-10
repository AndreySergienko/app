<template>
  <ul class="list" ref="listRoot">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'list__item fade-in-up': hasVisible }"
      :style="`animation-delay: ${index * 150}ms`"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: object[]
  hasVisible: boolean
}>()

// ref на внутренний элемент
const listRoot = ref(null)

// Экспортируешь его наружу
defineExpose({
  listRoot
})
</script>

<style scoped lang="scss" src="./SharedList.scss"></style>
