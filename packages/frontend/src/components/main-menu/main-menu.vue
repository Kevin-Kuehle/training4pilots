<script setup>
import { toRefs, toRef, defineProps } from "vue";
import { SubMenu } from "@components/main-menu";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav class="main-menu">
    <template v-for="item in items">
      <template v-if="item?.subMenu">
        <SubMenu :name="item.name" :subMenu="item.subMenu"></SubMenu>
      </template>
      <template v-else>
        <a :href="item.link">{{ item.name }}</a>
      </template>
    </template>
  </nav>
</template>

<style lang="scss">
@import "../../assets/scss/style.scss";

.main-menu {
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

  a {
    font-family: var(--font-menu);
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: var(--secondary-color);
    }
  }
}
</style>
