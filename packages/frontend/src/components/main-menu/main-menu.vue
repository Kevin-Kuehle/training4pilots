<script setup>
import { toRefs, toRef, computed } from "vue";
import { SubMenu, MenuItem } from "@components/main-menu";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

defineProps({
  items: {
    type: Array,
    required: true,
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
    <template v-for="item in items">
      <template v-if="item?.subMenu">
        <SubMenu
          :preIcon="item?.preIcon ? item?.preIcon : null"
          :suffIcon="subMenuIconHandler"
          :lvl="0"
          :name="item.name"
          :subMenu="item.subMenu"
          :key="item.name"
        ></SubMenu>
      </template>
      <template v-else>
        <MenuItem :key="item" :lvl="0" :item="item" />
      </template>
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
