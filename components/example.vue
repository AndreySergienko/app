<template>
  <div class="slider-wrapper" ref="wrapper">
    <div class="slider-track" ref="track">
      <div class="card" v-for="(card, index) in cards" :key="index">
        {{ card }}
      </div>
    </div>
  </div>
  <button @click="slideNext">→</button>
</template>

<script setup>
const cards = [1, 2, 3, 4, 5, 6]
const visibleCount = 5

const wrapper = ref(null)
const track = ref(null)

const cardWidth = ref(0)
const gap = 10 // как в CSS
const currentOffset = ref(0)

const slideDuration = 400

const getCardFullWidth = () => {
  const cardEl = track.value?.querySelector('.card')
  return cardEl ? cardEl.offsetWidth + gap : 0
}

const animateTo = (targetX) => {
  const startX = currentOffset.value
  const delta = targetX - startX
  const startTime = performance.now()

  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / slideDuration, 1)
    const ease = 0.5 - Math.cos(progress * Math.PI) / 2

    const currentX = startX + delta * ease
    track.value.style.transform = `translateX(-${currentX}px)`

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      currentOffset.value = targetX
    }
  }

  requestAnimationFrame(step)
}

const slideNext = () => {
  const fullCardWidth = cardWidth.value
  const maxOffset = (cards.length - visibleCount) * fullCardWidth

  const nextOffset = Math.min(currentOffset.value + fullCardWidth, maxOffset)
  animateTo(nextOffset)
}

onMounted(() => {
  cardWidth.value = getCardFullWidth()
})
</script>

<style scoped>
.slider-wrapper {
  overflow: hidden;
  width: 675px;
}

.slider-track {
  display: flex;
  transition: transform 0s; /* отключаем transition, анимируем вручную */
}

.card {
  display: flex;
  min-width: 135px;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 10px;
  background: #ddd;
  font-size: 24px;
}
</style>
