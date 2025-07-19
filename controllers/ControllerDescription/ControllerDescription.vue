<template>
  <div
    v-if="Array.isArray($route.meta.info)"
    class="project__description description"
  >
    <div class="description__container">
      <h4 class="description__subtitle">Publish date</h4>
      <h3 class="description__title">{{ $route.meta.info[0]?.text }}</h3>
    </div>

    <div class="description__container">
      <h4 class="description__subtitle">Role in Project</h4>
      <h3 class="description__title">{{ $route.meta.info[1]?.text }}</h3>
    </div>

    <div class="description__container" v-if="$route.meta.info[2]">
      <h4 class="description__subtitle">Links</h4>
      <h3 class="description__title">
        <a target="_blank" :href="$route.meta.info[2]?.link">
          {{ $route.meta.info[2]?.text }}
        </a>
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.description {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__project__subtitle {
    font-size: var(--font-size-s);
    margin-bottom: var(--gap-m);
  }

  &__title,
  &__subtitle {
    font-size: var(--font-size-s);
    font-weight: var(--weight-medium);
    color: var(--dark-gray);
  }

  &__title {
    margin-top: var(--gap-m);
    color: var(--black);
  }
}
</style>
