<script setup lang="ts">
defineProps({
  depth: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <ul
    class="c-mobile-menu-list"
    :class="`c-mobile-menu-list-depth c-mobile-menu-list-depth-${depth}`"
  >
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
ul.c-mobile-menu-list {
  /* TODO: there is an way with grid and grid-template-rows: 0fr to animate the height. */

  list-style: none;
  overflow: hidden;
  gap: 0.2rem 0;
  display: none;
  transition: all 0.3s ease-in-out;
  grid-column: 1/2;
  grid-row: 1/2;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  &-depth {
    &-0 {
      display: grid;
    }

    &-1,
    &-2,
    &-3,
    &-4,
    &-5 {
      opacity: 0;
      padding-left: 1rem;
    }
  }
}
</style>
