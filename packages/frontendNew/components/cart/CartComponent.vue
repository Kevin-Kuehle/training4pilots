<script setup lang="ts">
import { Icon } from "@components";
import { ref } from "vue";

const cartItems: Number[] = ref([]);
</script>
<template>
  <div class="c-cart" @click="cartItems.push(1)">
    <div class="c-cart__icon">
      <Icon color="var(--color-3)" name="cart" :width="25" />
    </div>
    <div v-if="cartItems.length > 0" class="c-cart__count">
      {{ cartItems.length }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-cart {
  position: relative;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--light-color-full);

    &:hover {
      cursor: pointer;
    }
  }

  &__count {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    border-radius: 50%;
    background-color: var(--dark-color-full);
    color: var(--light-color-full);
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
