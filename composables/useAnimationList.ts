export function useAnimationList() {
  const interestedList = ref<IntersectionObserverEntry[]>([])

  let observer: IntersectionObserver

  const initObserver = (lists: unknown) => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          interestedList.value.push(entry)
          if (!Array.isArray(lists)) return
          if (interestedList.value.length > lists.length) {
            observer.disconnect()
          }
        }
      },
      { threshold: 0.2 }
    )
  }

  function preCalculated<T extends (HTMLElement | null)[]>(
    list: T
  ): HTMLElement[] {
    return list.filter((el): el is HTMLElement => !!el)
  }

  function disconnect() {
    observer.disconnect()
  }

  function conntect(lists: HTMLElement[]) {
    initObserver(lists)
    lists.forEach((el) => observer.observe(el))
  }

  return {
    preCalculated,
    conntect,
    disconnect,
    interestedList
  }
}
