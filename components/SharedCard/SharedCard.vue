<template>
  <div :class="['shared-card', classes[size]]">
    <div :class="['shared-card__block-image', classes[size]]">
      <img v-if="img" :src="img.src" :alt="img.alt || 'picture'" class="shared-card__image" />
    </div>
    <div :class="['shared-card__content', classes[size]]">
      <SharedTitle size="s" theme="light">{{ date }}</SharedTitle>
      <SharedTitle class="shared-card__title" size="m" theme="dark">
        {{ title }}
      </SharedTitle>
      <SharedText v-if="text" size="m" theme="dark">{{ text }}</SharedText>

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
import type {SharedCardEmits, SharedCardProps} from '~/components/SharedCard/SharedCard.types'
import type {ComponentSizesWithElement} from '~/types/component.types'

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
  border-radius: 10px;
  background-color: var(--gray);
  overflow: hidden;

  cursor: pointer;
}

.shared-card.small {
  width: 325px;
}

.shared-card.large {
  max-width: 670px;
  width: 100%;
  padding: 0;
  margin-bottom: var(--gap-l);
}

.shared-card__block-image {
  height: 300px;
  overflow: hidden;

  position: relative;
}

.shared-card__block-image.small {
  height: 160px;
  padding-right: var(--gap-xl);
  padding-left: var(--gap-xl);
  padding-top: var(--gap-xl);
}

.shared-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  transition: transform cubic-bezier(.22, .52, .79, .48) var(--duration);
}

.shared-card__block-image.small .shared-card__image {
  border: 5px solid black;
  position: relative;
  bottom: -5px;
}

.shared-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxl);
  padding: var(--gap-xxl);
}

.shared-card__content.small {
  padding: var(--gap-xl);
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
  transform: scale(1.09);
}

@include media.media-breakpoint-down(l) {
  .shared-card.large {
    max-width: 100%;
  }
  .shared-card__overlay.large {
    max-width: 100%;
    height: 100%;
  }
  .shared-card.small {
    width: 100%;
  }
}

@include media.media-breakpoint-down(sm) {
  .shared-card__overlay img {
    min-width: 180px;
  }
}
</style>
