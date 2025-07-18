interface IArgs {
  slider: Ref<HTMLElement | null>
  sliderList: Ref<HTMLElement | null>
  updateScroll: (value: number) => void
}

export function useSliderDragSpinMobile({
  slider,
  sliderList,
  updateScroll
}: IArgs) {
  let isDown = false
  let startX = 0
  let counterScrollLeft = 0

  let lastX = 0
  let lastTime = 0
  let velocity = 0
  let momentumFrame: number | null = null

  function applyMomentum() {
    const friction = 0.95 // сопротивление, чем ниже — тем длиннее "спин"
    const minVelocity = 0.05

    if (!sliderList.value) return

    function step() {
      if (Math.abs(velocity) < minVelocity) {
        cancelAnimationFrame(momentumFrame!)
        return
      }

      const counter = sliderList.value!.scrollLeft - velocity * 20
      updateScroll(counter)
      velocity *= friction

      momentumFrame = requestAnimationFrame(step)
    }

    momentumFrame = requestAnimationFrame(step)
  }

  function onTouchStart(e: TouchEvent) {
    const target = e.target as HTMLElement

    if (target.closest('.arrow') || target.closest('svg')) {
      return
    }

    e.preventDefault()
    isDown = true
    const x = e.touches[0].pageX - sliderList.value!.offsetLeft
    startX = x
    lastX = x
    lastTime = performance.now()

    counterScrollLeft = sliderList.value!.scrollLeft
    velocity = 0
    // counterScrollLeft = sliderList.value!.scrollLeft
  }

  function onTouchDown() {
    isDown = false
    applyMomentum()
  }

  function onTouchMove(e: TouchEvent) {
    const target = e.target as HTMLElement

    if (target.closest('.arrow') || target.closest('svg')) {
      return
    }

    e.preventDefault()
    if (!isDown) return
    const x = e.touches[0].pageX - sliderList.value!.offsetLeft
    const walk = x - startX
    updateScroll(counterScrollLeft - walk)

    // === Расчёт скорости ===
    const now = performance.now()
    const dx = x - lastX
    const dt = now - lastTime || 1
    velocity = dx / dt
    lastX = x
    lastTime = now
  }

  function initMobileScroll() {
    if (!slider.value) return
    slider.value.addEventListener('touchstart', onTouchStart, {
      passive: false
    })
    slider.value.addEventListener('touchend', onTouchDown, { passive: false })
    slider.value.addEventListener('touchmove', onTouchMove, { passive: false })
  }
  function removeMobileScroll() {
    if (!slider.value) return
    slider.value.removeEventListener('touchstart', onTouchStart)
    slider.value.removeEventListener('touchend', onTouchDown)
    slider.value.removeEventListener('touchmove', onTouchMove)
  }

  return {
    initMobileScroll,
    removeMobileScroll
  }
}
