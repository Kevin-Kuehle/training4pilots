<template>
  <button
    class="button-three"
    aria-controls="primary-navigation"
    aria-expanded="false"
  >
    <svg
      stroke="var(--button-color)"
      fill="none"
      class="hamburger"
      viewBox="-10 -10 120 120"
      width="250"
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

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
