<template>
  <button
    class="button-mobile-menu"
    aria-controls="primary-navigation"
    :aria-expanded="isActive ? 'true' : 'false'"
    :data-state="isActive ? 'opened' : 'closed'"
    @click="changeState"
  >
    <svg
      stroke="var(--button-color)"
      fill="none"
      class="hamburger"
      viewBox="-10 -10 120 120"
    >
      <path
        class="line"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const emit = defineEmits(["change"]);

const isActive = ref(false);

const changeState = () => {
  isActive.value = !isActive.value;
  emit("change", isActive.value);
};
</script>

<style lang="scss" scoped>
.button-mobile-menu {
  --button-color: rgb(255, 255, 255);
  overflow: hidden;
  height: inherit;
  width: inherit;
  aspect-ratio: 1/1;
  height: 100%;
  background: none;
  border: none;
}

.button-mobile-menu .hamburger {
  transition: translate 1s, rotate 1s;
  max-height: 45px;
}

.button-mobile-menu[aria-expanded="true"] .hamburger {
  translate: 10px -6px;
  rotate: 0.125turn;
}

.button-mobile-menu .line {
  transition: 1s;
  stroke-dasharray: 60 31 60 300;
}

.button-mobile-menu[aria-expanded="true"] .line {
  stroke-dasharray: 60 105 60 300;
  stroke-dashoffset: -90;
  transform: translate(3%, 12%);
}
</style>
