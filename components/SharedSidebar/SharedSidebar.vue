<template>
  <nav class="shared-sidebar">
    <div class="shared-sidebar__inner">
      <div>
        <img class="shared-sidebar__img" src="~/assets/images/avatar.jpg" alt="Andrey Sergienko" />
        <SharedTitle class="shared-sidebar__title" size="m">Andrey Sergienko</SharedTitle>
        <SharedText class="shared-sidebar__text" size="m">Frontend Head, Project Lead</SharedText>

        <div v-if="isDesktop" class="shared-sidebar__links">
          <SharedLink
            v-for="link in links"
            :key="link.title"
            class="shared-sidebar__link"
            v-bind="link"
          >
            <SvgoArrow />
            {{ link.title }}
          </SharedLink>
        </div>
      </div>

      <div v-if="isDesktop" class="shared-sidebar__footer">
        <SharedText
          v-for="(item, idx) in footerInfo"
          :key="item.text"
          :class="{ ogrn: idx === 1 }"
          v-bind="themeFooter"
        >
          {{ item.text }}
        </SharedText>
      </div>

      <div v-if="!isDesktop">
        <SharedLink
          v-for="link in links"
          :key="link.title"
          class="shared-sidebar__link"
          v-bind="link"
        >
          <SvgoArrow class="shared-sidebar__icons" />
          {{ link.title }}
        </SharedLink>
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
  </nav>
</template>

<script setup lang="ts">
import type { LinkType } from '~/utils/component.utils'
import type { SharedComponentThemeAndSize } from '~/types/component.types'
import type { FooterTextTypes } from '~/components/SharedSidebar/SharedSidebar.types'

const isDesktop = true

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
    text: '© 2024, IE Andrey Sergienko'
  }
]
</script>

<style scoped>
.shared-sidebar {
  max-width: 250px;
  padding: var(--gap-xl);
  border-right: 1px solid var(--light-gray);
}

.shared-sidebar__inner {
  display: flex;
  height: 100%;
  min-height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: space-between;
}

.shared-sidebar__img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-bottom: var(--gap-m);
}

.shared-sidebar__title {
  margin-bottom: var(--gap-s);
}

.shared-sidebar__text {
  margin-bottom: var(--gap-xl);
}

.shared-sidebar__links {
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
}

.shared-sidebar__link {
  display: flex;
  align-items: center;
  gap: 5px;
}

.shared-sidebar__link:deep(svg) {
  width: 8px;
  height: 8px;
}

.ogrn {
  margin-top: var(--gap-s);
  margin-bottom: var(--gap-m);
}
</style>
