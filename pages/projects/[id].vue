<template>
  <div class="project-container">
    <div class="project__inner">
      <h3 id="section-0" class="project__name">Promptopia Web-site</h3>
      <div class="project__header">
        <div class="project__date">
          <h4>Publish date</h4>
          <p>10.09.2023</p>
        </div>
        <div class="project__role">
          <h4>Role in Project</h4>
          <p>Developer, project lead</p>
        </div>
        <div class="project__lead">
          <h4>Links</h4>
          <a href="#">Visit site</a>
        </div>
      </div>
      <div class="project__text">
        <p>
          Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection of
          high-quality prompts designed to optimize your ChatGPT interactions across a variety of
          fields, including marketing, education, healthcare, and beyond. These prompts are curated
          to help you get the most quality results out of Al, spark creativity, and streamline your
        </p>
        <p>
          Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection of
          high-quality prompts designed to optimize your ChatGPT.
        </p>
      </div>
      <div class="project__href">
        <img class="project__img" src="~/assets/images/Project__inner.png" alt="" />
        <div class="project__href-inner">
          <h4 id="section-1" class="project__href-title">Control</h4>
          <div class="project__href-text">
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT interactions across a
              variety offields, including marketing, education, healthcare, and beyond. These
              prompts are curated to help you get the most quality results out of Al, spark
              creativity, and streamline your
            </p>
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT.
            </p>
          </div>
        </div>
      </div>
      <div class="project__href">
        <img class="project__img" src="~/assets/images/Project__inner.png" alt="" />
        <div class="project__href-inner">
          <h4 id="section-2" class="project__href-title">Main idea</h4>
          <div class="project__href-text">
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT interactions across a
              variety offields, including marketing, education, healthcare, and beyond. These
              prompts are curated to help you get the most quality results out of Al, spark
              creativity, and streamline your
            </p>
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT.
            </p>
          </div>
        </div>
      </div>
      <div class="project__href">
        <div class="project__imgs">
          <img class="project__img" src="~/assets/images/Project__inner.png" alt="" />
          <img class="project__img" src="~/assets/images/Project__inner.png" alt="" />
        </div>
        <div class="project__href-inner">
          <h4 id="section-3" class="project__href-title">Challenges</h4>
          <div class="project__href-text">
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT interactions across a
              variety offields, including marketing, education, healthcare, and beyond. These
              prompts are curated to help you get the most quality results out of Al, spark
              creativity, and streamline your
            </p>
            <p>
              Welcome to the Best ChatGPT Prompts repository! Here, you'll find a growing collection
              of high-quality prompts designed to optimize your ChatGPT.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="project__share">
      <h4>Share</h4>
      <div class="project__share-icons">
        <nuxt-icon name="vk" filled />
        <nuxt-icon name="telegram" filled />
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'project'
})
</script>
<style>
.project-container {
  width: 60%;
  margin-top: 127px;
}
.project__inner {
  margin-bottom: 70px;
  border-bottom: 1px solid #ededed;
}
.project__name {
  margin-bottom: 50px;
  font-size: var(--font-size-m);
}
.project__header {
  display: flex;
  gap: 128px;
  margin-bottom: 50px;
}
.project__role,
.project__date,
.project__lead {
  display: flex;
  flex-direction: column;
  gap: 17px;
  font-size: var(--font-size-s);
}
.project__role h4,
.project__date h4,
.project__lead h4 {
  color: var(--dark-gray);
}
.project__role p,
.project__date p,
.project__lead p,
.project__lead a {
  font-weight: var(--weight-medium);
  color: var(--black);
}
.project__text,
.project__href-text {
  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: var(--font-size-s);
  color: var(--black);
  margin-bottom: 70px;
}
.project__img {
  width: 100%;
  margin-bottom: 70px;
}
.project__imgs {
  display: flex;
  gap: 20px;
}
.project__imgs img {
  width: 50%;
}
.project__href-inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.project__share {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.project__share-icons {
  display: flex;
  gap: 13px;
}
.project__share-icons svg {
  font-size: 30px;
}
</style>
