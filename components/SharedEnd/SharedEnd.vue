<template>
  <div class="shared-end">
    <SvgoHeart class="shared-end__heart" />
    <SharedTitle theme="light">Thank you!</SharedTitle>
    <SharedTitle theme="light">You’ve reached the end</SharedTitle>
  </div>
</template>

<style scoped>
.shared-end {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--gap-xl) auto 0;
}

.shared-end__heart {
  width: 26px;
  height: 26px;
  margin-bottom: var(--gap-m);
}
</style>
