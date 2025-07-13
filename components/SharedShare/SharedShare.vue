<template>
  <div class="share">
    <SharedTitle size="m">Share</SharedTitle>
    <div class="share__container">
      <nuxt-icon name="vk" filled @click="share(Keys.vk)" />
      <nuxt-icon name="telegram" filled @click="share(Keys.telegram)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedTitle from '../SharedTitle/SharedTitle.vue'

enum Keys {
  'vk',
  'telegram'
}

const share = (key: Keys) => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(document.title)
  const imageMeta = document.querySelector('meta[property="og:image"]')
  let image = ''

  if (imageMeta instanceof HTMLMetaElement && imageMeta.content) {
    image = encodeURIComponent(imageMeta.content)
  }
  let shareUrl = ''
  switch (key) {
    case Keys.vk:
      shareUrl = `https://vk.com/share.php?url=${url}&image=${image}`
      break
    case Keys.telegram:
      shareUrl = `https://t.me/share/url?url=${url}&text=${title}`
      break
    default:
      throw new Error('Keys is not defined')
  }

  window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500')
}
</script>

<style scoped lang="scss" src="./SharedShare.scss"></style>
