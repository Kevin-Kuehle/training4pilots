<script setup lang="ts">
import type { MenuItem } from "@/types";
import MobileMenuList from "./components/MobileMenuList.vue";
import MobileMenuItem from "./components/MobileMenuItem.vue";

defineProps({
  menuItems: {
    type: Array as () => MenuItem[],
    required: true,
  },
});
</script>

<template>
  <MobileMenuList :depth="0">
    <MobileMenuItem
      v-for="(item, index) in menuItems"
      :item="item"
      :index="index"
      :key="item.path + index"
      :depth="0"
    />
  </MobileMenuList>
</template>
