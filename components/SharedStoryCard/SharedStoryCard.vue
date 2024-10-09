<template>
  <div class="container">
    <div class="history">
      <p>Story</p>
    </div>
    <div class="history-card">
      <div class="history--story-image">
        <img class="history-img" src="assets/img/StoryPhoto/Rectangle%202.png" alt="Первая сторис">
        <div class="history--footer-card">
          <div class="history--play-button">
            <img src="assets/img/StoryPhoto/Polygon%201.png" alt="Play">
          </div>
          <p class="history-view">16,2K</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="css" scoped>
@import "assets/styles/varibles.css";


.history-card {
  margin-top: 20px;
  position: relative;
}

.history--story-image {
  height: 185px;
}

.history--footer-card {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
}

.history-view {
  color: var(--text-muted);
}
</style>
