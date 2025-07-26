<template>
  <section class="controller-posts">
    <SharedCard
      size="l"
      :img="{ src: '/posts/introduction.webp', alt: 'Просто картинка' }"
      date="Июль 15, 2025"
    >
      <template #title>Привет!</template>
      <template #text>
        <span>
          Меня зовут Андрей. Я занимаюсь веб разработкой на протяжении 6 лет.
          Моя специфика это фронтенд, в частности, это высоконагруженные
          сервисы. И да - я могу писать бэк, но для приложений среднего
          масштаба, без аркестрирования выскокой нагрузки. Кстати, не так давно,
          а чуть менее года я активно практикуюсь и на мобильной разработке,
          используя Flutter.
          <span class="line" />
          <SharedText>
            <i>
              p.s Честно говоря, задача сайта познакомить вас с моими работами,
              так вы можете наглядно ознакомиться с моими наработками и ощутить
              наяву.
            </i>
          </SharedText>
        </span>
      </template>
    </SharedCard>

    <SharedCard
      :img="{ src: '/posts/how-work.webp', alt: 'Просто картинка' }"
      date="Июль 19, 2025"
    >
      <template #title>Сфера моей работы</template>
      <template #text>
        <SharedList
          ref="listWork"
          class="drop__redesign"
          :items="workItems"
          :has-visible="!!interestedList[0]"
        >
          <template #default="{ item }">
            <SharedText size="m">{{ item }}</SharedText>
          </template>
        </SharedList>
      </template>
    </SharedCard>
  </section>
</template>

<script setup lang="ts">
import type { ListRoot } from '~/components/SharedList/SharedList.types'

const listWork = ref<ListRoot>()
const workItems = [
  '🌐 Веб приложения любой сложности',
  '🤖 Телеграмм бот',
  '🛠️ Админ панель',
  '⚙️ Бэкенд на Node для приложений среднего масштаба',
  '📱 Мобильное приложение'
]

const { interestedList, conntect, disconnect, preCalculated } =
  useAnimationList()

onMounted(() => {
  if (!listWork.value) return
  const $work = listWork.value.listRoot

  const lists = preCalculated([$work])
  conntect(lists)
})

onUnmounted(disconnect)
</script>

<style scoped lang="scss">
.controller-posts {
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);

  &:deep(ul) {
    gap: var(--gap-s);
  }
}

.line {
  display: block;
  margin: 1rem 0;
  height: 0.1rem;
  width: 100%;
  background-color: var(--dark-gray);
}
</style>
