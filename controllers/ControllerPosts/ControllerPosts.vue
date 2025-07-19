<template>
  <SharedCard
    size="l"
    :img="{ src: '/post.webp', alt: 'post' }"
    date="Июль 30, 2025"
  >
    <template #title>Привет!</template>
    <template #text>
      <span>
        Меня зовут Андрей. Я занимаюсь веб разработкой на протяжении 6 лет. Моя
        специфика это фронтенд, в частности, это высоконагруженные сервисы. И да
        - я могу писать бэк, но для приложений среднего масштаба, без
        аркестрирования выскокой нагрузки. Кстати, не так давно, а чуть менее
        года я активно практикуюсь и на мобильной разработке, используя Flutter.
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
</template>

<style scoped lang="scss">
.line {
  display: block;
  margin: 1rem 0;
  height: 0.1rem;
  width: 100%;
  background-color: var(--dark-gray);
}
</style>
