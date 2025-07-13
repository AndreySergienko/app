export function useSlider(
  $slides: Ref<HTMLElement | null>,
  updateScroll: (value: number) => void
) {
  const currentOffset = ref<number>(0)
  const animationFrameId = ref<null | number>(null)
  const isAnimating = ref(false)

  const animateTo = (targetX: number) => {
    if (!$slides.value) return
    const startTime = performance.now()
    const slider = $slides.value as HTMLElement
    const startX = slider.scrollLeft
    const delta = targetX - startX

    if (delta === 0) return
    if (animationFrameId.value) return

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / 300, 1)

      const ease = 0.5 - Math.cos(progress * Math.PI) / 2

      const currentX = startX + delta * ease
      updateScroll(currentX)
      currentOffset.value = targetX
      if (progress < 1) {
        animationFrameId.value = requestAnimationFrame(step)
      } else {
        updateScroll(targetX)
        isAnimating.value = false
        animationFrameId.value = null
      }
    }

    animationFrameId.value = requestAnimationFrame(step)
  }

  return {
    animateTo,
    currentOffset
  }
}
