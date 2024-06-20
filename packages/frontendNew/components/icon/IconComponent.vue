<script setup lang="ts">
import * as Icons from "@icons";

type IconsType = Record<string, object>;

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  lvl: {
    type: Number,
  },
});

function getComponentName(): object | null {
  if (!props.name) {
    console.warn("Icon name is not provided");
    return null;
  }

  const typedIcons = Icons as IconsType;

  const firstLetter = props.name[0].toUpperCase();
  const rest = props.name.slice(1);
  const componentName = `Icon` + firstLetter + rest;
  const component = typedIcons[componentName];

  if (!component) {
    console.warn(`Icon ${props.name} does not exist`);
    return null;
  }

  return component;
}
</script>

<template>
  <component
    :is="getComponentName()"
    :height="height"
    :width="width"
    :color="color"
    :fill="color"
  ></component>
</template>

<style lang="scss" scoped></style>
