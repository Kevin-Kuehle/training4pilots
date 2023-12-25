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
    class="c-mobile-menu"
    :class="`c-mobile-menu-depth c-mobile-menu-depth-${depth}`"
  >
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.c-mobile-menu {
  flex-flow: column nowrap;
  display: none;
  list-style: none;

  &-depth {
    &-0 {
      display: flex;
    }

    &-1,
    &-2,
    &-3 {
      padding-left: 1rem;
    }
  }
}
</style>
