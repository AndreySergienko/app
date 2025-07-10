<template>
  <ClientOnly v-if="$route.meta.anchors">
    <div class="anchors">
      <span class="line" />
      <span class="line-active" />
      <SharedLink
        :href="`#${anchor.link}`"
        v-for="(anchor, idx) in $route.meta.anchors"
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
const HEIGHT_BLOCK = 2
const top = ref<string>('0')

const animateTo = (idx: number) => {
  if (idx === 0) top.value = '0'
  else top.value = idx * HEIGHT_BLOCK + 'rem'
}
</script>

<style scoped lang="scss" src="./ControllerAnchor.scss">
$top: v-bind(top);
</style>
