<template>
  <WidgetContainerProject>
    <WidgetSectionProject id="intro">
      <SharedTitle size="m" class="drop__text-wrapper">
        👋
        <span class="drop__text">О проекте и моей роли</span>
      </SharedTitle>
      <SharedText size="m">
        Привет! Я был
        <b>TechLead / TeamLead</b>
        фронтенд-команды на проекте
        <i>TastyDrop</i>
        — занимался глобальным редизайном, техническим обновлением и
        выстраиванием процессов.
      </SharedText>

      <SharedText size="m">
        Проект прошёл полный апгрейд: от архитектуры и визуала до команды и
        документации.
      </SharedText>
      <SharedList
        ref="listBenfits"
        class="drop__benefits"
        :items="items"
        :has-visible="!!interestedList[0]"
      >
        <template #default="{ item }">
          <SharedText size="m">{{ item }}</SharedText>
        </template>
      </SharedList>

      <WidgetImageAnimation
        src="/projects/tastydrop/main-page.webp"
        alt="Скриншот главной"
      />
    </WidgetSectionProject>

    <WidgetSectionProject id="redesign">
      <SharedTitle size="m" class="drop__text-wrapper">
        🔧
        <span class="drop__text">Редизайн и переосмысление фронтенда</span>
      </SharedTitle>
      <SharedText size="m">
        Вместо старого монолита на Vue 2 мы выстроили новый стек:
        <i>Nuxt 3 + TypeScript + Storybook</i>
        . Это дало нам гибкость, стабильность и скорость.
      </SharedText>

      <SharedList
        ref="listProcess"
        class="drop__redesign"
        :items="redesignItems"
        :has-visible="!!interestedList[1]"
      >
        <template #default="{ item }">
          <SharedText size="m">{{ item }}</SharedText>
        </template>
      </SharedList>

      <SharedText size="m" class="note-gradient">
        Это был не просто рефакторинг — мы заново выстроили архитектуру,
        адаптируя FSD подход под реалии Nuxt 3 и наши задачи.
      </SharedText>

      <WidgetImageAnimation
        src="/projects/tastydrop/mission-page.webp"
        alt="Скриншот главной"
      />
    </WidgetSectionProject>

    <WidgetSectionProject id="process">
      <SharedTitle size="m" class="drop__text-wrapper">
        🎯
        <span class="drop__text">Фишки</span>
      </SharedTitle>
      <SharedText size="m">
        Я отвечал за все анимации, звуки и пользовательские «вау»-моменты.
        Например,
        <b>рулетка</b>
        с кейсами — полностью мой фронт.
      </SharedText>

      <SharedText size="m">
        Занимался сложными анимациями без сторонних библиотек, работа со звуком
        в момент рендера несколько 10-100 элементов, а также оптимизация
        мультирулеток(5), важно было сохранять качественное исполнение звука и
        очерёдность анимации.
      </SharedText>

      <SharedText size="m" class="note-gradient">
        P.S Оптимизация мультирулеток осуществлялась в рамках одного потока, без
        использования Worker
      </SharedText>

      <WidgetImageAnimation
        src="/projects/tastydrop/battles-page.webp"
        alt="Скриншот кейс батлов"
      />
    </WidgetSectionProject>

    <WidgetSectionProject id="commands">
      <SharedTitle size="m" class="drop__text-wrapper">
        👥
        <span class="drop__text">Команда и процессы</span>
      </SharedTitle>
      <SharedText size="m">
        Под моим руководством было 11 frontend-разработчиков. Улучшение
        процессов, в силу высокой погруженности проект принимал архитектурные
        решения, разбил кодовую базу на зоны ответственности, поддержку
        документации.
      </SharedText>

      <SharedList
        ref="listRedesign"
        class="drop__redesign"
        :items="processesItems"
        :has-visible="!!interestedList[2]"
      >
        <template #default="{ item }">
          <SharedText size="m">{{ item }}</SharedText>
        </template>
      </SharedList>
    </WidgetSectionProject>
  </WidgetContainerProject>
</template>
<script setup lang="ts">
import { WidgetContainerProject } from '#components'
import type { ListRoot } from '~/components/SharedList/SharedList.types'
import {
  items,
  processesItems,
  redesignItems
} from '~/utils/constants/tastydrop.data'

const listBenfits = ref<ListRoot>()
const listProcess = ref<ListRoot>()
const listRedesign = ref<ListRoot>()

const { interestedList, conntect, disconnect, preCalculated } =
  useAnimationList()

onMounted(() => {
  if (!listBenfits.value || !listProcess.value || !listRedesign.value) return
  const $benefits = listBenfits.value.listRoot
  const $process = listProcess.value.listRoot
  const $redesign = listRedesign.value.listRoot
  const lists = preCalculated([$benefits, $process, $redesign])
  conntect(lists)
})

onUnmounted(disconnect)

useHead({
  meta: [
    {
      property: 'og:image',
      content: '/og-image-tasty.png'
    }
  ]
})
definePageMeta({
  layout: 'project',
  anchors: [
    { link: 'intro', text: 'О проекте и моей роли' },
    { link: 'redesign', text: 'Редизайн системы' },
    { link: 'process', text: 'Фишки и фишечки' },
    {
      link: 'commands',
      text: 'Команда и управление'
    }
  ],
  info: [
    { text: '18.06.2023' },
    { text: 'Team Lead / Tech Lead / Developer' },
    {
      link: 'https://tastydrop.com',
      text: 'tastydrop.com'
    }
  ],
  title: '🛠 Проект: TastyDrop | TastyGo'
})
</script>

<style scoped lang="scss" src="./tastydrop.scss"></style>
