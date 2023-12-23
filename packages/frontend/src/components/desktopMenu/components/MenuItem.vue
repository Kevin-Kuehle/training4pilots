<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { MenuItem } from "@/types";
import MenuNav from "./MenuNav.vue";

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

const isHovering = ref(false);
</script>

<template>
  <li
    class="c-desktop-menu-item"
    :class="`c-desktop-menu-item-${index} c-desktop-menu-item-depth c-desktop-menu-item-depth-${depth} ${
      isHovering
        ? `c-desktop-menu-item--hovering c-desktop-menu-item-depth-${depth}--hovering`
        : ''
    } ${
      item.subMenu
        ? `c-desktop-menu-item-has-submenu c-desktop-menu-item-depth-${depth}-has-submenu--hovering`
        : ''
    }
    ${
      isHovering && item.subMenu
        ? `c-desktop-menu-item-depth-${depth}-has-submenu--hovering- c-desktop-menu-item-has-submenu--hovering`
        : ''
    }
    
    `"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <router-link :to="item.path">
      {{ item.name }}
    </router-link>
    <MenuNav v-if="item.subMenu" :depth="depth + 1">
      <MenuItem
        v-for="(subItem, index) in item.subMenu"
        :item="subItem"
        :index="index"
        :key="subItem.path + index"
        :depth="depth + 1"
      />
    </MenuNav>
  </li>
</template>

<style lang="scss" scoped>
.c-desktop-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.3rem 2rem 0.3rem 1rem;
  height: auto;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;

  &--hovering {
    > ul {
      display: flex;
      animation: top-down 0.2s ease-in-out;
    }
  }

  &-depth {
    position: relative;

    // all depth levels
    &-0,
    &-1,
    &-2,
    &-3,
    &-4,
    &-5 {
      a {
        text-decoration: none;
      }

      &--hovering {
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: calc(100% - 20px);
        }
      }
    }

    // without level 0
    &-1,
    &-2,
    &-3,
    &-4,
    &-5 {
      a {
        color: var(--color-menu);
      }

      &--hovering {
        width: 100%;

        > ul {
          animation: left-right 0.2s ease-in-out;
        }

        > a {
          color: var(--color-1);
        }
      }

      &-has-submenu {
        &--hovering {
          &::before {
            top: 0;
            left: 0;
            width: calc(100% + 30px);
            height: 150%;
          }
        }
      }
    }

    &-0 {
      padding: 0 0.2rem;
      position: relative;

      > a {
        color: var(--light-color-full);
      }

      &--hovering {
        > a {
          color: var(--secondary-color);
        }
      }

      &-has-submenu {
        &--hovering {
          &::before {
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100% + 20px);
          }
        }
      }
    }
  }
}
</style>
