<script setup lang="ts">
import type { MenuItem as TMenuItem } from "@/types";
import DesktopMenuList from "./components/DesktopMenuList.vue";
import DesktopMenuItem from "./components/DesktopMenuItem.vue";

defineProps({
  menuItems: {
    type: Array as () => TMenuItem[],
    required: true,
  },
});
</script>

<template>
  <DesktopMenuList :depth="0">
    <DesktopMenuItem
      v-for="(item, index) in menuItems"
      :item="item"
      :index="index"
      :key="item.path + index"
      :depth="0"
    />
  </DesktopMenuList>
</template>

<style lang="scss" scoped>
.c-desktop-menu {
  display: flex;
  flex-flow: row nowrap;
  gap: 0 20px;
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
