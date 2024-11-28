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

      <SharedTitle
        v-if="size === 'm' || size === 'l'"
        size="s"
        theme="light"
        @click="emit('read-more')"
      >
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
  m: 'medium',
  l: 'large'
}
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.shared-card {
  position: relative;
  padding: var(--gap-xxl);
  border-radius: 10px;
  background-color: var(--gray);
  overflow: hidden;
}

.shared-card.small {
  width: 325px;
  padding: var(--gap-xxl);
}

.shared-card.large {
  max-width: 670px;
  width: 100%;
  padding: 0;
  margin-bottom: var(--gap-l);
}

.shared-card__image {
  height: calc(160px - var(--gap-xl));
  border-top: 4px solid var(--black);
  border-right: 4px solid var(--black);
  border-left: 4px solid var(--black);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform linear calc(var(--duration) / 1);
  overflow: hidden;
}

.shared-card__image img {
  min-width: 237px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.shared-card__image.large {
  max-width: 670px;
  width: 100%;
  height: 298px;
  border: none;
}

.shared-card__image.large .picture {
  width: 100%;
  height: 100%;
}

.picture {
  width: calc(325px - 60px);
  height: 130px;
}

.shared-card__content {
  display: flex;
  flex-direction: column;
  padding-top: var(--gap-xxl);
  gap: var(--gap-xxl);
}

.shared-card__content.small {
  padding-top: var(--gap-xl);
  gap: var(--gap-l);
}

.shared-card__content.large {
  padding: var(--gap-xxl);
  gap: var(--gap-xl);
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

@include media.media-breakpoint-down(l) {
  .shared-card.large {
    max-width: 100%;
  }
  .shared-card__image.large {
    max-width: 100%;
    height: 100%;
  }
  .shared-card.small {
    width: 100%;
  }
}

@include media.media-breakpoint-down(sm) {
  .shared-card__image img {
    min-width: 180px;
  }
}
</style>
