<script setup lang="ts">
import { ref } from "vue";
import type { MenuItem } from "@/types";
import MobileMenuList from "./MobileMenuList.vue";

defineProps({
  item: {
    type: Object as () => MenuItem,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  depth: {
    type: Number,
    required: true,
  },
});

const closeAllChildren = (el: HTMLElement) => {
  if (!el) return;

  el.childNodes.forEach((child) => {
    if (child.nodeName === "UL") {
      for (let i of child.childNodes as NodeListOf<HTMLElement>) {
        if (i.nodeName !== "LI") continue;
        if (i) {
          i.classList.remove("open");
        }
      }
    }
  });
};

const isOpen = ref(false);

const stateHandler = (el: HTMLElement) => {
  isOpen.value = !isOpen.value;
  closeAllChildren(el);
};
</script>

<template>
  <li
    class="c-mobile-menu-item"
    :class="`c-mobile-menu-item-${index} c-mobile-menu-item-depth c-mobile-menu-item-depth-${depth} ${
      isOpen ? `open` : ''
    } ${item.subMenu ? `has-submenu` : ''}`"
    @click.stop="stateHandler($event.currentTarget as HTMLElement)"
  >
    <router-link :to="item.path">
      {{ item.name }}
    </router-link>
    <MobileMenuList v-if="item.subMenu" :depth="depth + 1">
      <MobileMenuItem
        v-for="(subItem, index) in item.subMenu"
        :item="subItem"
        :index="index"
        :key="subItem.path + index"
        :depth="depth + 1"
      />
    </MobileMenuList>
  </li>
</template>

<style lang="scss" scoped>
.c-mobile-menu-item {
  > a {
    text-decoration: none;
    color: var(--color-text);
  }

  &.open {
    > ul {
      display: flex;
    }
  }
}
</style>
