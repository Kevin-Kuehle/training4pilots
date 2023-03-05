<template>
  <ul class="main-menu">
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
</template>

<script>
import { toRefs, toRef } from "vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // const { items } = toRefs(props);
    // console.log(items.value);
    // return { items };
  },
};
</script>

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

  li {
    font-family: var(--font-menu);
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: var(--secondary-color);
    }
  }
}
</style>
