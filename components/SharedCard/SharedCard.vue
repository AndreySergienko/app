<template>
  <div :class="['shared-card', classes[size]]">
    <div v-if="img" :class="['shared-card__image', classes[size]]">
      <img :src="img.src" :alt="img.alt || 'picture'" class="picture" />
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
  padding: var(--gap-xl);
  background-color: var(--gray);
  border-radius: 10px;
}

.shared-card.small {
  padding: var(--gap-l);

  width: 325px;
}

.shared-card__image {
  height: calc(160px - var(--gap-l));
  overflow: hidden;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 4px solid var(--black);
  border-right: 4px solid var(--black);
  border-left: 4px solid var(--black);

  transition: transform linear calc(var(--duration) / 1);
}

.picture {
  width: calc(325px - 60px);
  height: 130px;
}

.shared-card__content {
  padding-top: var(--gap-l);
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);
}

.shared-card__content.small {
  padding-top: var(--gap-m);
  gap: var(--gap-m);
}

.shared-card__title {
  transition: color linear calc(var(--duration));
}

.shared-card:hover .shared-card__title {
  color: var(--blue);
}

.shared-card:hover .shared-card__image {
  transform: scale(1.05);
}
</style>
