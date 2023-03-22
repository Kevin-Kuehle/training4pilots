<script setup>
import { ref, computed } from "vue";
import { SubMenu } from "@components/main-menu";
import { IconCross, IconArrowDown } from "@icons";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

const props = defineProps({
  subMenu: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lvl: {
    type: Number,
  },
});

const nextLevel = computed(() => ++props.lvl);
const deviceStore = useDeviceStore();

const isOpen = ref(false);
</script>
<template>
  <div
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    @click="isOpen = !isOpen"
    class="c-sub-menu"
    :class="{ 'c-sub-menu__nav_item': lvl > 0 }"
  >
    <button
      class="c-sub-menu__button"
      :class="{ 'c-sub-menu__nav_item--open': lvl > 0 }"
    >
      <div class="c-sub-menu__button_name">{{ name }}</div>
      <div
        class="c-sub-menu__button_icon"
        :class="{ 'c-sub-menu__button_icon--open': isOpen }"
      >
        <IconCross v-if="deviceStore.breakpoint <= BREAKPOINTS.XXL" />
        <IconArrowDown v-else />
      </div>
    </button>
    <div
      class="c-sub-menu__nav"
      v-show="isOpen"
      :class="{
        'c-sub-menu__nav--open': isOpen,
        ['c-sub-menu__nav--lvl-' + lvl]: true,
      }"
    >
      <template v-for="item in subMenu">
        <template v-if="item?.subMenu">
          <SubMenu
            :lvl="nextLevel"
            :name="item.name"
            :subMenu="item.subMenu"
          ></SubMenu>
        </template>
        <template v-else>
          <a class="c-sub-menu__nav_item" :href="item.link">{{ item.name }}</a>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@scss";
.c-sub-menu {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  &__nav {
    display: block;
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
    border-left: 1px solid grey;
    margin-top: 10px;

    @include breakpoint(XXL) {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 100%;
      background: #fff;
      border: 1px solid grey;
      overflow: initial;
      display: flex;

      &--lvl-0 {
        left: 0;
        top: 100%;
      }

      &--lvl-1 {
        left: 100%;
        top: -1px;
      }

      &--lvl-2 {
        left: 100%;
        top: 0;
      }
    }

    &_item {
      text-align: left;
      white-space: nowrap;
      flex: 1;
      width: 100%;
      border: 1px solid red;
      padding: 0.8rem 2rem;
    }

    &--open {
      height: auto;
    }
  }

  &__button {
    border: transparent;
    background-color: transparent;
    font-family: var(--font-menu);
    text-transform: uppercase;
    font-size: var(--font-size-menu);
    color: var(--color-menu);
    display: flex;
    flex-flow: row nowrap;

    @include breakpoint(XXL) {
      padding: 13px 0;
    }

    &_name {
    }
    &_icon {
      height: 100%;

      @include breakpoint(XXL) {
        margin-left: 10px;
      }

      svg {
        height: 100%;
        width: auto;
        transform: rotate(45deg);
        transform: all 0.7s ease-in-out;

        @include breakpoint(XXL) {
          transform: initial;
          height: var(--icon-size-menu-arrow);
        }
      }

      &--open {
        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
}
</style>
