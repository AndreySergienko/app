<template>
  <ClientOnly v-if="$route.meta.anchors">
    <div v-if="$route?.meta?.anchors" class="anchors" ref="anchors">
      <span class="line" />
      <span class="line-active" />
      <SharedLink
        v-for="(anchor, idx) in $route.meta.anchors"
        :href="`#${anchor.link}`"
        :key="anchor.link"
        :class="['anchors__link', activeId === anchor.link]"
        @click="toAnchor(idx, anchor.link)"
      >
        {{ anchor.text }}
      </SharedLink>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const top = ref<string>('0')
const anchors = ref<HTMLElement>()
const activeId = ref<string>('')
const toLink = ref<string>('')

const observer = ref<IntersectionObserver | null>(null)

const route = useRoute()

const toAnchor = (idx: number, link: string) => {
  toLink.value = link
  animateTo(idx)
}

const animateTo = (idx: number) => {
  if (!anchors.value) return

  const heightItem =
    Math.ceil(
      anchors.value.getBoundingClientRect().height / route.meta.anchors.length
    ) /
      10 +
    0.2
  if (idx === 0) top.value = '0'
  else top.value = idx * heightItem + 'rem'
}

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries.find((e) => e.isIntersecting)
      if (!visibleEntry) return
      if (toLink.value) {
        if (visibleEntry?.target.id === toLink.value) {
          toLink.value = ''
        }
        return
      }

      activeId.value = visibleEntry.target.id
      const idx = route.meta.anchors.findIndex(
        ({ link }) => link === activeId.value
      )
      animateTo(idx)
    },
    {
      rootMargin: '10% 0px 0px 0px',
      threshold: 1
    }
  )

  sections.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<style scoped lang="scss" src="./ControllerAnchor.scss">
$top: v-bind(top);
</style>
