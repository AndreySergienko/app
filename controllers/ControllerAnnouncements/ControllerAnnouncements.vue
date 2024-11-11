<template>
  <div class="announcements">
    <SharedTitle size="m" class="mb-20">Announcements</SharedTitle>
    <div class="controller">
      <SharedCard
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
        title="ON-DEVELOPER: New Ad Platform to Fulfill Your Needs"
      >
      </SharedCard>

      <SharedCard
        size="s"
        :img="{ src: otherJpg, alt: 'book' }"
        date="September 30, 2024"
        title="ON-DEVELOPER: New Ad Platform to Fulfill Your Needs"
      >
      </SharedCard>
    </div>
  </div>
</template>

<script setup>
import otherJpg from '~/assets/images/other.jpg'
</script>

<style scoped>
.controller {
  display: flex;
  gap: var(--gap-l);
}

@media (max-width: 705px) {
  .controller {
    flex-direction: column;
    align-items: center;
  }
}
</style>
