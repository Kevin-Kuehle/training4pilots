<script setup lang="ts"></script>

<template>
  <div class="c-content-grid">
    <slot />
  </div>
</template>

<style lang="scss">
.c-content-grid {
  display: grid;
  // prettier-ignore
  grid-template-columns: [fullwidth-start] minmax(25px, 1fr) [content-start] minmax(0,1200px) [content-end] minmax(25px, 1fr) [fullwidth-end];
}
.content {
  grid-area: content;
}

.full-width {
  grid-area: fullwidth;
}
</style>
