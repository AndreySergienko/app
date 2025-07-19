<template>
  <div :class="['shared-card', classes[size]]">
    <div :class="['shared-card__block-image', classes[size]]">
      <NuxtImg
        v-if="img"
        :src="img.src as string"
        :alt="img.alt || 'picture'"
        loading="eager"
        class="shared-card__image"
      />
    </div>
    <div :class="['shared-card__content', classes[size]]">
      <SharedTitle size="s" theme="light">{{ date }}</SharedTitle>
      <SharedTitle size="m" theme="dark" class="shared-card__title">
        <slot name="title" />
      </SharedTitle>
      <SharedText size="m" theme="dark"><slot name="text" /></SharedText>

      <!--      <SharedTitle-->
      <!--          v-if="size === 'm' || size === 'l'"-->
      <!--          size="s"-->
      <!--          theme="light"-->
      <!--          @click="emit('read-more')"-->
      <!--      >-->
      <!--        Read more-->
      <!--      </SharedTitle>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedCardProps } from '~/components/SharedCard/SharedCard.types'
import type { ComponentSizesWithElement } from '~/types/component.types'

withDefaults(defineProps<Partial<SharedCardProps>>(), {
  size: 'm'
})
// const emit = defineEmits<SharedCardEmits>()

const classes: Partial<ComponentSizesWithElement<string>> = {
  s: '',
  m: 'medium',
  l: 'large'
}
</script>

<style scoped lang="scss" src="./SharedCard.scss"></style>
