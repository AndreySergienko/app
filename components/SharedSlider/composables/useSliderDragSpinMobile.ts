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

  function onTouchStart(e: TouchEvent) {
    e.preventDefault()
    isDown = true
    startX = e.touches[0].pageX - sliderList.value!.offsetLeft
    counterScrollLeft = sliderList.value!.scrollLeft
  }

  function onTouchDown() {
    isDown = false
  }

  function onTouchMove(e: TouchEvent) {
    e.preventDefault()
    if (!isDown) return
    const x = e.touches[0].pageX - sliderList.value!.offsetLeft
    const walk = x - startX
    updateScroll(counterScrollLeft - walk)
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
