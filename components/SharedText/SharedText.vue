<template>
  <p :class="['shared-text', defaultClassesForElement[props.size]]">
    <slot />
  </p>
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

<style scoped>
.shared-text {
  color: v-bind('color');
  font-weight: var(--weight-regular);
}

.shared-text.small {
  font-size: var(--font-size-xs);
}

.shared-text.medium {
  font-size: var(--font-size-s);
}
</style>
