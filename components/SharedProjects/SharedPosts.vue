<template>
  <div class="posts">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <img v-if="post.img" :src="post.img" alt="Post" />
      <div class="post__inner">
        <p class="post__date">{{ post.date }}</p>
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__text">{{ post.text }}</p>
        <a :href="post.link" class="post__link">Read more</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import Post from '@/assets/images/Post.png'

const posts = reactive([
  {
    img: Post,
    title: 'Exploring the Trails: A Guide to Hiking Adventures',
    text: "Nature's mountains stand as majestic monuments, towering over the landscapes\
            that stretch far and wide. Hiking through these natural wonders offers an escape to\
            the serene and untouched corners of the earth. Each step taken on a mountain trail\
            is a step closer to discovering the breathtaking beauty of the wild. Surrounded by\
            the fresh, crisp air and the tranquil sounds of nature, hikers find a unique peace\
            and a profound connection to the earth. Mountains challenge and inspire, urging us\
            to explore further, climb higher, and appreciate the natural world in its grandest\
            form...",
    date: 'September 17, 2024',
    link: '#'
  },
  {
    img: '',
    title: 'ON-DEVELOPER: New Ad Platform to Fulfill Your Needs',
    text: "I was faced with the same dilemma a few months ago. I finally had the motivation\
            to create a new personal website, but wasn't sure where to start. I decided\
            to keep things simple, I'd write it with a library I knew very well: React.",
    date: 'September 17, 2024',
    link: '#'
  }
])
</script>
<style>
.posts {
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
}

.post {
  background-color: var(--gray);
}

.post__inner {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);
}

.post__date,
.post__link {
  font-size: var(--font-size-s);
  font-weight: var(--weight-medium);
  color: var(--dark-gray);
}

.post__title {
  font-size: var(--font-size-m);
  font-weight: var(--weight-medium);
  color: var(--dark);
}

.post__text {
  font-size: var(--font-size-s);
  font-weight: var(--weight-regular);
  color: var(--dark);
  line-height: 18px;
}

.post__link {
  text-decoration: none;
  transition: color 0.3s ease;
}

.post__link:hover {
  color: var(--dark);
}
</style>
