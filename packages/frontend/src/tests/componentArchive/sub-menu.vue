<script setup lang="ts">
import { ref, computed } from "vue";
import { SubMenu, MenuItem } from "@components/main-menu";
import { IconCross, IconArrowDown, IconArrowRight } from "@icons";
import { Icon } from "@components";
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
  preIcon: {
    type: String,
    default: null,
  },
  suffIcon: {
    type: String,
    default: null,
  },
  lvl: {
    type: Number,
  },
});

const nextLevel = computed(() => (props.lvl ?? 0) + 1);
const deviceStore = useDeviceStore();
const isOpen = ref(false);

const subMenuButtonClasses = computed(() => {
  return {
    "c-sub-menu__button__pre-icon": props.preIcon && !props.suffIcon,
    "c-sub-menu__button__suff-icon": props.suffIcon && !props.preIcon,
    "c-sub-menu__button__pre-suff-icon": props.suffIcon && props.preIcon,
  };
});

function clickHandler($event: MouseEvent) {
  $event.stopPropagation();

  if (
    !ref.menuButton.contains($event.target) ||
    $event.target === ref.menuButton
  ) {
    isOpen.value = !isOpen.value;
  }
}
</script>
<template>
  <div
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    class="c-sub-menu"
    :class="['c-sub-menu-lvl-' + lvl]"
  >
    <button
      ref="menuButton"
      class="c-sub-menu__button"
      :class="subMenuButtonClasses"
      @click.self="clickHandler"
    >
      <!-- pre-icon -->
      <div
        class="c-sub-menu__button__icon c-sub-menu__button__icon__pre"
        v-if="preIcon"
      >
        <Icon :name="preIcon" :width="120" color="black" />
      </div>
      <!-- name -->
      <div
        class="c-sub-menu__button_name"
        :class="['c-sub-menu__button_name_lvl-' + lvl]"
      >
        {{ name }}
      </div>

      <!-- suf-icon -->
      <div
        v-if="suffIcon"
        class="c-sub-menu__button__icon c-sub-menu__button__icon__suff"
        :class="{ 'c-sub-menu__button__icon--open': isOpen }"
      >
        <Icon :name="suffIcon" :width="120" color="black" />
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
            :preIcon="item.preIcon"
            :key="item.name"
            suffIcon="cross"
          ></SubMenu>
        </template>
        <template v-else>
          <MenuItem :lvl="nextLevel" :item="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@scss";
.c-sub-menu {
  display: flex;
  width: auto;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: var(--padding-menu-submenu);

  &-lvl {
    &-1,
    &-2,
    &-3,
    &-4 {
      text-align: left;
      width: 100%;
      padding: var(--padding-menu-item);
    }
  }

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
      // scss select all lvl in range from 1 to 20
      &--lvl-1 {
      }

      &--lvl-1 {
        left: calc(100% + 10px);
        top: -1px;
      }

      &--lvl-2 {
        left: calc(100% + 10px);
        top: 0;
      }
    }

    &_item {
      text-align: left;
      white-space: nowrap;
      flex: 1;
      width: 100%;
      border: 1px solid red;
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
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    align-items: center;
    grid-template-rows: auto;
    grid-template-areas: "name name name";
    flex-flow: row nowrap;
    width: 100%;
    gap: 10px;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;

      &__pre {
        grid-area: pre-icon;
      }

      &__suff {
        grid-area: suff-icon;
      }

      svg {
        width: 100%;
        height: auto;
        max-height: 18px;
      }
    }

    &__suff-icon {
      grid-template-areas: "name name suff-icon";
    }

    &__pre-icon {
      grid-template-areas: "pre-icon name .";
    }

    &__pre-suff-icon {
      grid-template-areas: "pre-icon name suff-icon";
    }

    @include breakpoint(XXL) {
      grid-template-columns: auto 1fr auto;
      padding: 13px 0;
    }

    &_name {
      grid-area: name;
      text-align: center;

      &_lvl {
        &-1,
        &-2,
        &-3 {
          text-align: left;
          color: red;
        }
      }
    }
  }
}
</style>
