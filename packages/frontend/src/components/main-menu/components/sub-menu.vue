<script setup>
import { defineProps, ref } from "vue";
import { SubMenu } from "@components/main-menu";
import { IconCross } from "@icons";

defineProps({
  subMenu: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
</script>
<template>
  <div class="c-sub-menu">
    <button class="c-sub-menu__button" @click="isOpen = !isOpen">
      <div class="c-sub-menu__button_name">{{ name }}</div>
      <div
        class="c-sub-menu__button_icon"
        :class="{ 'c-sub-menu__button_icon--open': isOpen }"
      >
        <IconCross />
      </div>
    </button>
    <div
      class="c-sub-menu__nav"
      v-show="isOpen"
      :class="{ 'c-sub-menu__nav--open': isOpen }"
    >
      <template v-for="item in subMenu">
        <template v-if="item?.subMenu">
          <SubMenu :name="item.name" :subMenu="item.subMenu"></SubMenu>
        </template>
        <template v-else>
          <a class="c-sub-menu__nav_item" :href="item.link">{{ item.name }}</a>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-sub-menu {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

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

    &_item {
      padding: 13px 0;
      text-align: left;
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
    padding: 10px 10px;
    color: var(--color-menu);

    display: flex;
    flex-flow: row nowrap;

    &_name {
    }
    &_icon {
      height: 100%;

      svg {
        height: 100%;
        width: auto;
        transform: rotate(45deg);
        transform: all 0.7s ease-in-out;
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
