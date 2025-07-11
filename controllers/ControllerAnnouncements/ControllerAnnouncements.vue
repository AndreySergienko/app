<template>
  <div class="announcements-controller">
    <SharedTitle size="m" class="announcements-controller__title"
      >Announcements</SharedTitle
    >
    <div class="announcements-controller__wrapper">
      <SharedAnnouncement
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
      >
        <template #title>
          ON-DEVELOPER: New Ad Platform to Fulfill Your Needs
        </template>
      </SharedAnnouncement>

      <SharedAnnouncement
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
      >
        <template #title>
          ON-DEVELOPER: New Ad Platform to Fulfill Your Needs
        </template
        >
      </SharedAnnouncement>
    </div>
  </div>
</template>

<script setup>
import otherJpg from '~/assets/images/other.jpg'
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.announcements-controller {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-l);
    justify-content: space-between;

    @include media.media-breakpoint-down(md) {
      justify-content: center;
    }
  }

  &__title {
    margin-bottom: var(--gap-l);
  }
}
</style>
