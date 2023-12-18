<script setup lang="ts">
import { computed, ref } from "vue";
import { useDeviceStore, useMockStore } from "@stores";
import { BREAKPOINTS } from "@configs";
import { DesktopMenu, MobileMenu } from "@components";
import { MenuItem } from "@/types";
// fetch menuItems from backend or mock
// check if mobile or desktop view

defineProps({
  colors: {
    type: Object,
    required: false,
    default: () => ({
      normal: "var(--light-color-full)",
      hover: "var(--light-color-full)",
      active: "var(--light-color-full)",
    }),
  },
});

const deviceStore = useDeviceStore();
const mockStore = useMockStore();

// will be later a API call and triggered by other file.
mockStore.fetchMenuItems();
const menuItemsState: MenuItem[] | null = computed(
  () => mockStore.$state.menuItems
);
</script>

<template>
  <nav class="c-main-menu">
    <template v-if="deviceStore.isDesktop">
      <DesktopMenu :menuItems="menuItemsState" />
    </template>
    <template v-else>
      <MobileMenu :menuItems="menuItemsState" />
    </template>
  </nav>
</template>

<style lang="scss">
@import "@scss";

.c-main-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 20px;
  position: relative;

  > * {
    text-align: left;
    font-family: var(--font-menu);
    font-size: var(--font-size-menu);
    text-transform: uppercase;
  }

  @include breakpoint(XXL) {
    margin: 0;
    padding: 0;
    border: 1px solid red;
    width: auto;
    flex-direction: row;
    align-items: center;
    gap: 25px;

    a {
      width: auto;
    }
  }
}
</style>
