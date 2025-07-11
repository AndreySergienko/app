<template>
  <div class="drop">
    <section id="intro" class="drop__section">
      <SharedTitle size="m" class="drop__text-wrapper"
        >👋 <span class="drop__text">О проекте и моей роли</span></SharedTitle
      >
      <SharedText size="m"
        >Привет! Я был <b>TechLead / TeamLead</b> фронтенд-команды на проекте
        <i>TastyDrop</i> — занимался глобальным редизайном, техническим
        обновлением и выстраиванием процессов.</SharedText
      >

      <SharedText size="m"
        >Проект прошёл полный апгрейд: от архитектуры и визуала до команды и
        документации.</SharedText
      >
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

      <WidgetImageAnimation :src="MainPage" alt="Скриншот главной" />
    </section>

    <section id="redesign" class="drop__section">
      <SharedTitle size="m" class="drop__text-wrapper"
        >🔧
        <span class="drop__text"
          >Редизайн и переосмысление фронтенда</span
        ></SharedTitle
      >
      <SharedText size="m"
        >Вместо старого монолита на Vue 2 мы выстроили новый стек:
        <i>Nuxt 3 + TypeScript + Storybook</i>. Это дало нам гибкость,
        стабильность и скорость.</SharedText
      >

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

      <SharedText size="m" class="note-gradient"
        >Это был не просто рефакторинг — мы заново выстроили архитектуру,
        ориентируясь на масштабирование.</SharedText
      >

      <WidgetImageAnimation :src="MissionPage" alt="Скриншот главной" />
    </section>

    <section id="process" class="drop__section">
      <SharedTitle size="m" class="drop__text-wrapper"
        >🎯 <span class="drop__text">Фишки и фишечки</span></SharedTitle
      >
      <SharedText size="m"
        >Я отвечал за все анимации, звуки и пользовательские «вау»-моменты.
        Например, <b>рулетка</b> с кейсами — полностью мой фронт.</SharedText
      >

      <SharedText size="m"
        >Занимался сложными анимациями без сторонних библиотек, работа со звуком
        в момент рендера несколько 10-100 элементов, а также оптимизация
        мультирулеток(5), важно было сохранять качественное исполнение звука и
        очерёдность анимации.</SharedText
      >

      <SharedText size="m" class="note-gradient"
        >P.S Оптимизация мультирулеток осуществлялась в рамках одного потока,
        без использования Worker</SharedText
      >

      <WidgetImageAnimation :src="BattlesPage" alt="Скриншот кейс батлов" />
    </section>

    <section id="commands" class="drop__section">
      <SharedTitle size="m" class="drop__text-wrapper"
        >👥 <span class="drop__text">Команда и процессы</span></SharedTitle
      >
      <SharedText size="m"
        >Под моим руководством было 11 frontend-разработчиков. Улучшение
        процессов, в силу высокой погруженности проект принимал архитектурные
        решения, разбил кодовую базу на зоны ответственности, поддержку
        документации.</SharedText
      >

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
    </section>
  </div>
</template>
<script setup>
import SharedTitle from '~/components/SharedTitle/SharedTitle.vue'
import MainPage from '~/assets/images/projects/tastydrop/main-page.png'
import MissionPage from '~/assets/images/projects/tastydrop/mission-page.png'
import BattlesPage from '~/assets/images/projects/tastydrop/battles-page.png'
import { items, processesItems, redesignItems } from './tastydropme.data'

const listBenfits = ref()
const listProcess = ref()
const listRedesign = ref()
const interestedList = ref([])

let observer

const initObserver = (lists) => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        interestedList.value.push(entry)
        if (interestedList.value.length > lists.length) {
          observer.disconnect()
        }
      }
    },
    { threshold: 0.2 }
  )
}

onMounted(() => {
  const $benefits = listBenfits.value?.listRoot
  const $process = listProcess.value?.listRoot
  const $redesign = listRedesign.value?.listRoot
  const lists = [$benefits, $process, $redesign]
  initObserver(lists)
  lists.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})

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
      text: 'tasty-drop.xx'
    }
  ],
  title: '🛠 Проект: TastyDrop | TastyGo'
})
</script>

<style scoped lang="scss" src="./tastydropme.scss"></style>
