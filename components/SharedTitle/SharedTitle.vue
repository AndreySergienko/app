<template>
  <component
    :is="components[props.size]"
    :class="['shared-title hover', defaultClassesForElement[props.size]]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {
  ComponentSizesWithElement,
  SharedComponentThemeAndSize
} from '~/types/component.types'
import { defaultClassesForElement } from '~/utils/component.utils'
import { useThemesText } from '~/composables/useThemesText'

const props = withDefaults(defineProps<Partial<SharedComponentThemeAndSize>>(), {
  theme: 'dark',
  size: 's'
})

const components: ComponentSizesWithElement<string> = {
  s: 'h3',
  m: 'h2',
  l: 'h1'
}

const { color } = useThemesText(props.theme)
</script>

<style scoped>
.shared-title {
  color: v-bind('color');
  font-weight: var(--weight-medium);
}

.shared-title.small {
  font-size: var(--font-size-s);
}

.shared-title.medium {
  font-size: var(--font-size-m);
  line-height: 150%;
}

.shared-title.hover:hover {
  color: v-bind('hover');
  cursor: pointer;
}

.shared-title.small:hover {
  color: var(--dark-gray);
}
</style>
