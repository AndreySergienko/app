<template>
  <div class="announcements">
    <SharedTitle size="m" class="announcements__title"
      >Announcements</SharedTitle
    >
    <div class="controller">
      <SharedAnnouncement
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
      >
        <template #title
          >ON-DEVELOPER: New Ad Platform to Fulfill Your Needs</template
        >
      </SharedAnnouncement>

      <SharedAnnouncement
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
      >
        <template #title
          >ON-DEVELOPER: New Ad Platform to Fulfill Your Needs</template
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

.announcements__title {
  margin-bottom: var(--gap-l);
}

.controller {
  display: flex;
  gap: var(--gap-l);
}

@include media.media-breakpoint-down(l) {
  .annoncements {
    width: 100%;
  }
}

@include media.media-breakpoint-down(md) {
  .controller {
    flex-direction: column;
  }
}
</style>
