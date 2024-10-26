<template>
  <div :class="['shared-card', classes[size]]">
    <div class="shared-card__block-image">
      <div v-if="img" :class="['shared-card__image', classes[size]]">
        <img :src="img.src" :alt="img.alt || 'picture'" class="picture" />
      </div>
    </div>
    <div :class="['shared-card__content', classes[size]]">
      <SharedTitle size="s" theme="light">{{ date }}</SharedTitle>
      <SharedTitle class="shared-card__title" size="m" theme="dark">
        {{ title }}
      </SharedTitle>
      <SharedText v-if="text" size="m" theme="dark">{{ text }}</SharedText>

      <SharedTitle v-if="size === 'm'" size="s" theme="light" @click="emit('read-more')">
        Read more
      </SharedTitle>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedCardEmits, SharedCardProps } from '~/components/SharedCard/SharedCard.types'
import type { ComponentSizesWithElement } from '~/types/component.types'

withDefaults(defineProps<Partial<SharedCardProps>>(), {
  size: 'm'
})

const emit = defineEmits<SharedCardEmits>()

const classes: Partial<ComponentSizesWithElement<string>> = {
  s: 'small',
  m: 'medium'
}
</script>

<style scoped>
.shared-card {
  border-radius: 10px;
  background-color: var(--gray);
}

.shared-card.small {
  width: 325px;
}

.shared-card__block-image {
  height: 160px;
  padding-top: var(--gap-l);
  overflow: hidden;
}

.shared-card__image {
  display: flex;
  justify-content: center;
}

.picture {
  width: calc(325px - 60px);
  height: 130px;

  border-top: 4px solid var(--black);
  border-right: 4px solid var(--black);
  border-left: 4px solid var(--black);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  transition: transform linear calc(var(--duration) / 1);
}

.shared-card__content {
  display: flex;
  flex-direction: column;
  padding: var(--gap-l) var(--gap-xl) var(--gap-xl) var(--gap-xl);
  gap: var(--gap-l);
}

.shared-card__content.small {
  padding: var(--gap-m) var(--gap-l) var(--gap-l) var(--gap-l);
  gap: var(--gap-m);
}

.shared-card__title {
  transition: color linear calc(var(--duration));
}

.shared-card:hover .shared-card__title {
  color: var(--blue);
}

.shared-card:hover .picture {
  transform: scale(1.05);
}
</style>
