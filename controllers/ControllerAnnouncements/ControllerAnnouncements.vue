<template>
  <div class="announcements-controller">
    <SharedTitle size="m" class="announcements-controller__title">
      Скоро в публикации
    </SharedTitle>
    <SharedSlider
      :length="3"
      gap="var(--gap-l)"
      class="announcements-controller__wrapper"
    >
      <template #slide>
        <SharedAnnouncement
          size="s"
          :img="{ src: '/other.jpg', alt: 'book' }"
          date="Август 01, 2025"
        >
          <template #title>ON-DEVELOPER: Площадка для рекламы</template>
        </SharedAnnouncement>

        <SharedAnnouncement
          size="s"
          :img="{ src: '/other.jpg', alt: 'book' }"
          date="Сентябрь 01, 2025"
        >
          <template #title>ETERNA: Сайт для сериала Eterna</template>
        </SharedAnnouncement>

        <SharedAnnouncement
          size="s"
          :img="{ src: '/other.jpg', alt: 'book' }"
          date="Сентябрь 01, 2025"
        >
          <template #title>
            TENDER-SITNO: Тендерная площадка для агрохолдинга Sitno
          </template>
        </SharedAnnouncement>
      </template>
    </SharedSlider>
  </div>
</template>

<style scoped lang="scss" src="./ControllerAnnouncements.scss"></style>
