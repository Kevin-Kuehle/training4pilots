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
.c-menu-item {
  text-align: left;
  white-space: nowrap;
  flex: 1;
  width: 100%;
  text-align: center;

  &_lvl {
    &-1,
    &-2,
    &-3 {
      text-align: left;
    }

    :is(div) {
      border: 1px solid rgb(108, 23, 187);
      padding: 0.8rem 1rem;
    }

    :is(a) {
      padding: 0.8rem 1rem;
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
