<template>
  <div>
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab__content">
      <div v-if="activeTab === 'Posts'" class="tab__content-items">
        <div class="tab__content-item">
          <img class="tab__content-img" src="~/assets/images/Post.png" alt="Post">
          <div class="tab__content-inner">
            <div class="tab__content-date">September 17, 2024</div>
            <div class="tab__content-title">Exploring the Trails: A Guide to Hiking Adventures</div>
            <div class="tab__content-text">Nature's mountains stand as majestic monuments, towering over the landscapes that stretch far and wide. 
              Hiking through these natural wonders offers an escape to the serene and untouched corners of the earth. 
              Each step taken on a mountain trail is a step closer to discovering the breathtaking beauty of the wild. 
              Surrounded by the fresh, crisp air and the tranquil sounds of nature, hikers find a unique peace and a profound connection to the earth. 
              Mountains challenge and inspire, urging us to explore further, climb higher, and appreciate the natural world in its grandest form...
            </div>
            <a href="#" class="tab__content-link">Read more</a>
          </div>
        </div>
        <div class="tab__content-item">
          <div class="tab__content-inner">
            <div class="tab__content-date">September 17, 2024</div>
            <div class="tab__content-title">ON-DEVELOPER: New Ad Platform to Fulfill Your Needs</div>
            <div class="tab__content-text"> I was faced with the same dilemma a few months ago.
              I finally had the motivation to create a new personal website, but wasn't sure where to start.
              I decided to keep things simple, I'd write it with a library I knew very well: React.
            </div>
            <a href="#" class="tab__content-link">Read more</a>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'Projects'">
        <div>Here is a projects...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Posts', 'Projects']
const activeTab = ref('Posts')
</script>

<style>
.tabs {
  margin-top: 40px;
  display: flex;
  gap: 20px;
}

.tab {
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s ease;
}

.tab.active {
  color: rgba(0, 0, 0, 1);
}

.tab__content {
  max-width: 670px;
  margin-top: 20px;
}

.tab__content-items {
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
}

.tab__content-item {
  background-color: var(--gray);
}

.tab__content-inner {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);
}

.tab__content-date, .tab__content-link {
  font-size: var(--font-size-s);
  font-weight: var(--weight-medium);
  color: var(--dark-gray);
}

.tab__content-title {
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  color: var(--dark);
}

.tab__content-text {
  font-size: var(--font-size-s);
  font-weight: var(--weight-regular);
  color: var(--dark);
  line-height: 18px;
}

.tab__content-link {
  text-decoration: none;
  transition: color 0.3s ease;
}

.tab__content-link:hover {
  color: var(--dark);
}

</style>

