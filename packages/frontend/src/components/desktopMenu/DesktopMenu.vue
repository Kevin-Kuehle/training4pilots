<script setup lang="ts">
import { defineProps } from "vue";
import type { MenuItem as TMenuItem } from "@/types";
import MenuItem from "./components/MenuItem.vue";
import MenuNav from "./components/MenuNav.vue";

defineProps({
  menuItems: {
    type: Array as () => TMenuItem[],
    required: true,
  },
});
</script>

<template>
  <MenuNav :depth="0">
    <MenuItem
      v-for="(item, index) in menuItems"
      :item="item"
      :index="index"
      :key="item.path + index"
      :depth="0"
    />
  </MenuNav>
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
