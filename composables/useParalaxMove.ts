export function useParalaxMove(
  container: Ref<HTMLElement | null>,
  img: Ref<HTMLElement | null>
) {
  function _move(e: MouseEvent) {
    const rect = container.value!.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = (y / rect.height - 0.5) * -10 // up/down
    const rotateY = (x / rect.width - 0.5) * 10 // left/right
    img.value!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  function _transform() {
    img.value!.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`
  }

  const _addMouseMove = () =>
    container.value!.addEventListener('mousemove', _move)
  const _addMouseLeave = () =>
    container.value!.addEventListener('mouseleave', _transform)

  const addListener = () => {
    if (!container.value || !img.value) return
    _addMouseMove()
    _addMouseLeave()
  }

  const clearListener = () => {
    if (!container.value || !img.value) return
    container.value!.removeEventListener('mousemove', _move)
    container.value!.removeEventListener('mouseleave', _transform)
  }

  return {
    addListener,
    clearListener
  }
}
