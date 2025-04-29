interface IArgs {
  move: (value: number) => void
  currentOffset: Ref<number>
  maxOffset: Ref<number>
}

export function useSliderDragSpin({ currentOffset, maxOffset, move }: IArgs) {
  const startX = ref(0)
  const lastX = ref(0)
  const velocity = ref(0)
  const lastTime = ref(0)
  const isDragging = ref(false)

  // function startInertiaScroll() {
  // const dragDistance = lastX.value - startX.value
  // const inertiaMultiplier = 2
  //
  // const inertiaDistance = -dragDistance * inertiaMultiplier
  // let targetX = currentOffset.value + inertiaDistance
  // targetX = Math.max(0, Math.min(targetX, maxOffset.value))
  // // move(targetX)
  // velocity.value = 0
  // }

  function onMouseMove(e: MouseEvent) {
    if (isDragging.value) return
    // isDragging.value = true

    const dx = e.clientX - lastX.value
    const now = performance.now()
    const dt = now - lastTime.value

    velocity.value = (dx / dt) * 16 // нормализация под 60fps

    const newOffset = currentOffset.value - dx
    currentOffset.value = Math.max(0, Math.min(newOffset, maxOffset.value))
    move(currentOffset.value)

    lastX.value = e.clientX
    lastTime.value = now
  }

  // e: MouseEvent
  function onMouseUp() {
    isDragging.value = false
    // lastX.value = e.clientX
    //
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    // startInertiaScroll()
  }

  function onMouseDown(e: MouseEvent) {
    startX.value = e.clientX
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)
  }

  return {
    onMouseDown
  }
}
