<template>
  <ClientOnly v-if="$route.meta.anchors">
    <div class="anchors" ref="anchors">
      <span class="line" />
      <span class="line-active" />
      <SharedLink
        v-for="(anchor, idx) in $route.meta.anchors"
        :href="`#${anchor.link}`"
        :key="anchor.link"
        class="anchors__link"
        @click="animateTo(idx)"
      >
        {{ anchor.text }}
      </SharedLink>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const top = ref<string>('0')
const anchors = ref<HTMLElement>()

const route = useRoute()

const animateTo = (idx: number) => {
  if (!anchors.value) return
  const heightItem =
    Math.ceil(anchors.value.getBoundingClientRect().height / route.meta.anchors.length) / 10 + 0.2
  if (idx === 0) top.value = '0'
  else top.value = idx * heightItem + 'rem'
}
</script>

<style scoped lang="scss" src="./ControllerAnchor.scss">
$top: v-bind(top);
</style>
