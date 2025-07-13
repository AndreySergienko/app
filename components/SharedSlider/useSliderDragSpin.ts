interface IArgs {
  slider: Ref<HTMLElement | null>
  sliderList: Ref<HTMLElement | null>
  updateScroll: (value: number) => void
}

export function useSliderDragSpin({ sliderList, slider, updateScroll }: IArgs) {
  let startX: number = 0
  let isDown = false
  let counterScrollLeft = 0

  function onMouseMove(e: MouseEvent) {
    e.preventDefault()
    if (!sliderList.value) return
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - sliderList.value!.offsetLeft
    const walk = (x - startX) * 1.5 // Скорость прокрутки
    updateScroll(counterScrollLeft - walk)
    // sliderList.value!.scrollLeft = counterScrollLeft - walk
  }

  function onWheel(e: WheelEvent) {
    e.preventDefault()
    if (e.deltaY !== 0) {
      const updateX = sliderList.value!.scrollLeft + e.deltaY // Отключаем вертикальную прокрутку
      updateScroll(updateX)
      // sliderList.value!.scrollLeft += e.deltaY
      // scrollLeft.value = sliderList.value!.scrollLeft
    }
  }

  function onMouseUp(e: MouseEvent) {
    e.preventDefault()
    if (!slider.value) return
    isDown = false

    slider.value.removeEventListener('mousemove', onMouseMove)
    slider.value.removeEventListener('mouseup', onMouseUp)
    slider.value.removeEventListener('mouseleave', onMouseUp)
    slider.value.removeEventListener('touchstart', onTouchStart)
    slider.value.removeEventListener('touchend', onTouchDown)
    slider.value.removeEventListener('touchmove', onTouchMove)
  }

  function onTouchStart(e: TouchEvent) {
    isDown = true
    startX = e.touches[0].pageX - sliderList.value!.offsetLeft
    counterScrollLeft = sliderList.value!.scrollLeft
  }

  function onTouchDown() {
    isDown = false
  }

  function onTouchMove(e: TouchEvent) {
    if (!isDown) return
    const x = e.touches[0].pageX - sliderList.value!.offsetLeft
    const walk = x - startX
    updateScroll(counterScrollLeft - walk)
  }

  function onMouseDown(e: MouseEvent) {
    e.preventDefault()
    if (!sliderList.value || !slider.value) return
    isDown = true
    startX = e.pageX - sliderList.value!.offsetLeft
    counterScrollLeft = sliderList.value!.scrollLeft
    slider.value.addEventListener('mouseup', onMouseUp)
    slider.value.addEventListener('mousemove', onMouseMove)
    slider.value.addEventListener('mouseleave', onMouseUp)
    slider.value.addEventListener('touchstart', onTouchStart)
    slider.value.addEventListener('touchend', onTouchDown)
    slider.value.addEventListener('touchmove', onTouchMove)
  }

  function initWheel() {
    if (!slider.value) return
    slider.value.addEventListener('wheel', onWheel, { passive: false })
  }

  function removeWheel() {
    if (!slider.value) return
    slider.value.removeEventListener('wheel', onWheel)
  }

  return {
    initWheel,
    removeWheel,
    onMouseDown
  }
}
