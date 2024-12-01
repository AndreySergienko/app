<template>
  <div class="shared-end">
    <nuxt-icon name="Heart" class="shared-end__heart" filled />
    <SharedTitle theme="light">Thank you!</SharedTitle>
    <SharedTitle theme="light">You’ve reached the end</SharedTitle>
    <p class="shared-end__footer">© 2024, IE Andrey Sergienko</p>
  </div>
</template>

<style scoped>
.shared-end {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--gap-xxl) auto 0;
}

.shared-end__heart {
  width: 26px;
  height: 26px;
  margin-bottom: var(--gap-xxl);
}

.shared-end__footer {
  padding: var(--gap-xxl) 0;
  font-size: var(--font-size-xs);
  font-weight: var(--weight-regular);
}
</style>
