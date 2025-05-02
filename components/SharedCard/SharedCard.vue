<template>
  <div :class="['shared-card', classes[size]]">
    <div :class="['shared-card__block-image', size === 'l' && 'large']">
      <div v-if="img" :class="['shared-card__image', classes[size]]">
        <img :src="img.src" :alt="img.alt || 'picture'" class="picture" />
      </div>
    </div>
    <div :class="['shared-card__content', classes[size]]">
      <SharedTitle size="s" theme="light">{{ date }}</SharedTitle>
      <SharedTitle class="shared-card__title" size="m" theme="dark">
        <slot name="title" />
      </SharedTitle>
      <SharedText v-if="$slots.text" size="m" theme="dark"
        ><slot name="text"
      /></SharedText>

      <!--      <SharedTitle-->
      <!--        v-if="size === 'm' || size === 'l'"-->
      <!--        size="s"-->
      <!--        theme="light"-->
      <!--        @click="emit('read-more')"-->
      <!--      >-->
      <!--        Read more-->
      <!--      </SharedTitle>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  SharedCardEmits,
  SharedCardProps
} from '~/components/SharedCard/SharedCard.types'
import type { ComponentSizesWithElement } from '~/types/component.types'

withDefaults(defineProps<Partial<SharedCardProps>>(), {
  size: 'm'
})

defineEmits<SharedCardEmits>()

const classes: Partial<Omit<ComponentSizesWithElement<string>, 's'>> = {
  m: 'medium',
  l: 'large'
}
</script>

<style scoped src="./SharedCard.scss"></style>
