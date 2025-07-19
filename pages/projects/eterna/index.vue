<template>
  <WidgetContainerProject>
    <WidgetSectionProject id="intro">
      <SharedTitle size="m">
        🧙‍♂️
        <span>О проекте и моей роли</span>
      </SharedTitle>
      <SharedText size="m">
        Привет! Я был
        <b>TeamLead</b>
        фронтенд-команды на проекте
        <i>Eterna</i>
        — занимался проектированием, начиная от оценки и выстраиванием
        процессов, до реализации и деплоя проекта.
      </SharedText>

      <SharedText size="m">
        Несмотря на то, что данный проект является не очень сложным с точки
        зрения разработки системы, но он нестандартен в разработке анимаций и
        пользовательского интерфейса.
      </SharedText>
    </WidgetSectionProject>
    <WidgetSectionProject id="analytics">
      <SharedTitle size="m">
        📊
        <span>Аналитика</span>
      </SharedTitle>
      <SharedText size="m">
        В этом разделе я бы хотел поделиться сложностями с которыми мы
        столкнулись, и кончно же, они были решены без вреда проекту.
      </SharedText>

      <SharedList
        ref="listDifficulties"
        :items="items"
        :has-visible="!!interestedList[0]"
      >
        <template #default="{ item }">
          <SharedText size="m">{{ item }}</SharedText>
        </template>
      </SharedList>
    </WidgetSectionProject>

    <WidgetSectionProject id="success">
      <SharedTitle size="m">
        🏆
        <span>Успех</span>
      </SharedTitle>

      <div class="eterna__chart">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </WidgetSectionProject>
  </WidgetContainerProject>
</template>

<script setup lang="ts">
import type { ListRoot } from '~/components/SharedList/SharedList.types'
import { items } from '~/utils/constants/eterna.data'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

const listDifficulties = ref<ListRoot>()

const { interestedList, conntect, disconnect, preCalculated } =
  useAnimationList()

onMounted(() => {
  if (!listDifficulties.value) return
  const $difficulties = listDifficulties.value.listRoot
  const lists = preCalculated([$difficulties])
  conntect(lists)
})

onUnmounted(disconnect)

definePageMeta({
  layout: 'project',
  anchors: [
    { link: 'intro', text: 'О проекте и моей роли' },
    { link: 'analytics', text: 'Аналитика' },
    { link: 'success', text: 'Успех' }
  ],
  info: [
    { text: '05.07.2025' },
    { text: 'Team Lead / Developer' },
    {
      link: 'https://www.aeterna.tv/',
      text: 'aterna.tv'
    }
  ],
  title: '🪄 Проект: Eterna'
})

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const chartData = {
  labels: ['⏱ Время', '📅 Релиз', '🎯 Результат'],
  datasets: [
    {
      label: 'План',
      data: [100, 50, 80],
      backgroundColor: '#CFAE74' // Золотистый
    },
    {
      label: 'Факт',
      data: [95, 40, 95],
      backgroundColor: '#6A1C1F' // Бордовый
    }
  ]
}

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>

<style scoped lang="scss" src="./eterna.scss"></style>
