<template>
  <div :class="['shared-text', defaultClassesForElement[props.size]]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { SharedComponentThemeAndSize } from '~/types/component.types'
import { defaultClassesForElement } from '~/utils/component.utils'
import { useThemesText } from '~/composables/useThemesText'

const props = withDefaults(
  defineProps<Partial<SharedComponentThemeAndSize>>(),
  {
    theme: 'dark',
    size: 's'
  }
)

const { color } = useThemesText(props.theme)
</script>

<style scoped lang="scss">
.shared-text {
  color: v-bind('color');
  font-weight: var(--weight-regular);

  &.small {
    font-size: var(--font-size-xs);
  }

  &.medium {
    font-size: var(--font-size-s);
  }
}
</style>
