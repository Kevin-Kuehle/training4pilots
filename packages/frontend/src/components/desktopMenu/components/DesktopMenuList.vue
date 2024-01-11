<script setup lang="ts">
import type { MenuItem } from "@/types";

defineProps({
  depth: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <ul
    class="c-desktop-menu"
    :class="`c-desktop-menu-depth c-desktop-menu-depth-${depth}`"
  >
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
@import "@scss";

.c-desktop-menu {
  display: flex;
  gap: 0 25px;
  display: none;
  width: auto;

  &-depth {
    flex-flow: column;
    position: absolute;

    &-0 {
      position: initial;
      flex-flow: row nowrap;
      justify-content: flex-end;
    }

    &-1,
    &-2,
    &-3,
    &-4,
    &-5 {
      justify-content: flex-start;
      align-items: flex-start;
      background-color: var(--primary-color-darker);
      backdrop-filter: blur(10px);
      padding: 8px 20px 8px 11px;
      border-radius: 0px 30px 0px 20px;
      border-top: 1px solid var(--secondary-color);
      border-bottom: 1px solid var(--secondary-color);
    }
    left: calc(100% + 30px);

    &-1 {
      left: 0;
      top: calc(100% + 20px);
    }

    &-2,
    &-3,
    &-4,
    &-5 {
      top: 0;
      justify-content: flex-start;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
