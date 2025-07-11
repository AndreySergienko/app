<template>
  <nav class="shared-sidebar">
    <SharedContainer class="shared-sidebar__container">
      <div class="shared-sidebar__inner">
        <div>
          <nuxt-link href="/" class="shared-sidebar__btn-main">
            <img
              class="shared-sidebar__img"
              src="~/assets/images/avatar.jpg"
              alt="Andrey Sergienko"
            />
            <div class="shared-sidebar__description">
              <SharedTitle class="shared-sidebar__title" size="m"
                >Andrey Sergienko</SharedTitle
              >
              <SharedText class="shared-sidebar__text" size="m"
                >Frontend Head, Project Lead</SharedText
              >
            </div>
          </nuxt-link>

          <div class="shared-sidebar__links">
            <SharedLink
              v-for="link in links"
              :key="link.title"
              class="shared-sidebar__link"
              v-bind="link"
            >
              <nuxt-icon name="Arrow" filled />
              {{ link.title }}
            </SharedLink>
          </div>
        </div>

        <div class="shared-sidebar__footer">
          <SharedText
            v-for="(item, idx) in footerInfo"
            :key="item.text"
            :class="{ ogrn: idx === 1 }"
            v-bind="themeFooter"
          >
            {{ item.text }}
          </SharedText>
        </div>
      </div>
    </SharedContainer>
  </nav>
</template>

<script setup lang="ts">
import type { FooterTextTypes } from '~/components/SharedSidebar/SharedSidebar.types'
import type { LinkType } from '~/utils/component.utils'
import type { SharedComponentThemeAndSize } from '~/types/component.types'

const links: LinkType[] = [
  {
    to: 'https://t.me/ensine',
    title: 'Telegram',
    target: '_blank'
  },
  {
    to: 'https://github.com/AndreySergienko',
    title: 'GitHub',
    target: '_blank'
  },
  {
    title: 'Email',
    href: 'mailto:email@andrey.aker899@gmail.com'
  }
]

const themeFooter: SharedComponentThemeAndSize = {
  theme: 'light',
  size: 'm'
}

const footerInfo: FooterTextTypes[] = [
  {
    text: 'ИНН: 777374778'
  },
  {
    text: 'ОГРН: 777374778'
  },
  {
    text: '© 2025, IE Andrey Sergienko'
  }
]
</script>

<style scoped src="./SharedSidebar.scss"></style>
