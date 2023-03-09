<script setup>
import { defineProps, ref } from "vue";
import { SubMenu } from "@components/main-menu";

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
      {{ name }}
    </button>
    <div class="c-sub-menu__nav" :class="{ 'c-sub-menu__nav--open': isOpen }">
      <template v-for="item in subMenu">
        <template v-if="item?.subMenu">
          <SubMenu :name="item.name" :subMenu="item.subMenu"></SubMenu>
        </template>
        <template v-else>
          <a :href="item.link">{{ item.name }}</a>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-sub-menu {
  &__nav {
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
    }

    &--open {
      height: auto;
    }
  }

  &__button {
  }
}
</style>
