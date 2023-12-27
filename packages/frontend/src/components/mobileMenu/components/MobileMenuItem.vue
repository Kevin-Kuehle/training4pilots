<script setup lang="ts">
import { ref } from "vue";
import type { MenuItem } from "@/types";
import MobileMenuList from "./MobileMenuList.vue";
import { Icon } from "@components";

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
      <span v-if="item.subMenu" class="c-mobile-menu-item-pre-icon">
        <Icon name="ArrowRight" :height="12" color="var(--light-color-full)" />
      </span>
      {{ item.name }}
    </router-link>
    <MobileMenuList v-if="item?.subMenu" :depth="depth + 1">
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
  padding-block: 0.3rem;

  > a {
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    flex-flow: row nowrap;
  }

  &.open {
    > ul {
      display: grid;
      height: auto;
      opacity: 1;
    }

    > a {
      color: var(--secondary-color);
    }
  }

  &-pre-icon {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    transition: transform 200ms ease-in-out;

    // parent has class open
    .c-mobile-menu-item.open > a > & {
      transform: rotate(90deg);
    }
  }
}
</style>
