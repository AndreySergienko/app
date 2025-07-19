<template>
  <SharedText size="s">
    <div class="note">
      <strong class="note__label"><slot name="title" /></strong>
      <p class="note__text">
        <slot name="text" />
      </p>
    </div>
  </SharedText>
</template>

<script setup lang="ts">
import type { SharedNotesProps } from './SharedNotes.types'

defineProps<SharedNotesProps>()
</script>

<style scoped lang="scss" src="./SharedNotes.scss">
$colorLabel: v-bind(colorLabel);
$colorText: v-bind(colorText);
$colorBorder: v-bind(colorBorder);
$backgroundColor: v-bind(backgroundColor);
</style>
