<script setup lang="ts">
import type { PropType } from "vue";

type Layout = "content" | "fullwidth";

const props = defineProps({
  layout: {
    type: String as PropType<Layout>,
    false: false,
    default: "fullwidth",
  },
  color: {
    type: String,
    required: false,
    default: "white",
  },
  bgColor: {
    type: String,
    required: false,
    default: "var(--primary-color)",
  },
});

const getClassForLayout = () => {
  if (props.layout === "content") {
    return "area-content";
  }

  if (props.layout === "fullwidth") {
    return "area-full-width";
  }

  return "";
};
</script>

<template>
  <div
    class="c-banner"
    :style="{ backgroundColor: bgColor, color: color }"
    :class="getClassForLayout()"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.c-banner {
  padding-block: 90px;
  margin-block: 40px;
  position: relative;
  clip-path: polygon(0 0, 48% 0%, 50% 5%, 52% 0%, 100% 0, 100% 100%, 0 100%);
}
</style>
