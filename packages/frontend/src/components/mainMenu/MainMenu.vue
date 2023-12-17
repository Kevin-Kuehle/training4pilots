<script setup lang="ts">
import { computed } from "vue";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";
import { DesktopMenu, MobileMenu } from "@components";

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

const subMenuIconHandler = computed(() => {
  if (deviceStore.breakpoint === BREAKPOINTS.XXXL) {
    return "arrowDown";
  } else {
    return "cross";
  }
});
</script>

<template>
  <nav class="c-main-menu">
    <!-- Desktop or Mobilemenu -->
    <template v-if="deviceStore.isDesktop">
      <DesktopMenu />
    </template>
    <template v-else>
      <MobileMenu />
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
