<template>
  <div>
    <SharedTab />
    <SharedSlider :slides="mySlides" :slides-to-show="2">
      <template #default="{ slide }">
        <div class="my-slide-content">
          <p>{{ slide }}</p>
        </div>
      </template>
    </SharedSlider>
  </div>
</template>
<script setup>
const mySlides = ref([
  'Slide 1 Content',
  'Slide 2 Content',
  'Slide 3 Content',
  'Slide 4 Content',
  'Slide 5 Content',
  'Slide 6 Content',
  'Slide 7 Content',
  'Slide 8 Content',
  'Slide 9 Content',
  'Slide 10 Content'
])
</script>
