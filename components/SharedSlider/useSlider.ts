export function useSlider(move: (value: number) => void) {
  const currentOffset = ref<number>(0)
  const animationFrameId = ref<null | number>(null)
  const isAnimating = ref(false)

  const animateTo = (targetX: number) => {
    const startTime = performance.now()
    const startX = currentOffset.value
    const delta = targetX - startX

    if (targetX === currentOffset.value) return

    if (animationFrameId.value) return

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / 300, 1)

      const ease = 0.5 - Math.cos(progress * Math.PI) / 2

      const currentX = startX + delta * ease
      move(currentX)

      currentOffset.value = targetX
      if (progress < 1) {
        animationFrameId.value = requestAnimationFrame(step)
      } else {
        isAnimating.value = false
        animationFrameId.value = null
      }
    }

    animationFrameId.value = requestAnimationFrame(step)
  }

  return {
    animateTo,
    isAnimating,
    animationFrameId,
    currentOffset
  }
}
