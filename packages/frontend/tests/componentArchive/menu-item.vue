<script setup lang="ts">
import { defineProps, watch, ref } from "vue";

const itemState = ref("normal");

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  lvl: {
    type: Number,
  },
  colors: {
    type: Object,
    required: false,
  },
});

// watch input and print it in console
watch(
  () => props.colors,
  (newVal, oldVal) => {
    console.log("newVal", newVal);
    console.log("oldVal", oldVal);
  }
);
</script>
<template>
  <a
    :href="item.link"
    @mouseenter="itemState = 'hover'"
    @mouseleave="itemState = 'normal'"
    :style="{ color: colors ? colors[itemState] : null }"
    class="c-menu-item"
    :class="[`c-menu-item_lvl-` + lvl]"
    >{{ item.name }}</a
  >
</template>
<style lang="scss" scoped>
@import "@scss";

.c-menu-item {
  text-align: left;
  white-space: nowrap;
  flex: 1;
  text-align: center;
  padding: var(--padding-menu-item);
  text-decoration: none;

  @include breakpoint(XXL) {
    flex: 0 0 auto;
  }

  &_lvl {
    &-1,
    &-2,
    &-3 {
      text-align: left;
    }

    :is(div) {
      border: 1px solid rgb(108, 23, 187);
      // padding: 0.8rem 1rem;
    }

    :is(a) {
      // padding: 0.8rem 1rem;
    }
  }

  :is(div) {
    // padding: 0.8rem 1rem;
  }

  :is(a) {
    // padding: 0.8rem 1rem;
  }
}
</style>
