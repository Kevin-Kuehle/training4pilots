<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  lvl: {
    type: Number,
  },
});
</script>
<template>
  <a
    :href="item.link"
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
