<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["onClick"]);
</script>

<template>
  <button @click="emit('onClick', id)" class="c-button" :disabled="disabled">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.c-button {
  // background-color: var(--secondary-color);
  border: none;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-family: var(--font-button);
  align-self: center;
  padding: 8px 25px;
  font-size: 15px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    cursor: pointer;
  }
}
</style>
