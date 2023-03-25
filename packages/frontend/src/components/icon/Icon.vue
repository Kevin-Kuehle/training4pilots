<script setup>
import * as Icons from "@icons";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  lvl: {
    type: Number,
  },
});

function getComponentName() {
  const firstLetter = props.name[0].toUpperCase();
  const rest = props.name.slice(1);
  const componentName = `Icon` + firstLetter + rest;
  return Icons[componentName];
}
</script>

<template>
  <component
    :is="getComponentName()"
    :height="size"
    :width="size"
    :color="color"
    :fill="color"
  ></component>
</template>

<style lang="scss" scoped></style>
