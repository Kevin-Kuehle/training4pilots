<script setup lang="ts">
import { defineProps } from "vue";
import type { MenuItem } from "@/types";

defineProps({
  menuItems: {
    type: Array as () => MenuItem[],
    required: true,
  },
});
</script>

<template>
  <ul class="c-desktop-menu">
    <li
      v-for="(item, index) in menuItems"
      :key="item.path"
      class="c-desktop-menu-item"
      :class="`c-desktop-menu-item-${index}`"
    >
      <router-link :to="item.path">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.c-desktop-menu {
  display: flex;
  flex-flow: row nowrap;
  gap: 0 25px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    text-decoration: none;
  }
}
</style>
