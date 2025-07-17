<template>
  <div class="shared-announcement">
    <div class="shared-announcement__block-image">
      <div v-if="img" class="shared-announcement__image">
        <NuxtImg
          :src="img.src as string"
          :alt="img.alt || 'picture'"
          class="picture"
        />
      </div>
    </div>
    <div class="shared-announcement__content">
      <SharedTitle size="s" theme="light">{{ date }}</SharedTitle>
      <SharedTitle class="shared-announcement__title" size="s" theme="dark">
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

<script setup lang="ts">
import type { SharedAnnouncementProps } from '~/components/SharedAnnouncement/SharedAnnouncement.types'

defineProps<SharedAnnouncementProps>()
</script>

<style scoped src="./SharedAnnouncement.scss"></style>
