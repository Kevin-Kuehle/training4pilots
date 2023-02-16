<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { IconBurger, IconClose } from "@icons";

const parentRef = ref(null);
let isActive = ref(false);
const iconSize = ref({ width: `${35}px`, height: `${35}px` });

function burgerMenuHandler() {
  isActive = ref(!isActive);
}

onMounted(() => {
  autoAnimate(parentRef.value);
});
</script>

<template>
  <div
    @click="isActive = !isActive"
    :class="{ close: isActive }"
    class="burger-menu"
  >
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.burger-menu {
  cursor: pointer;
  height: 27px;
  width: 27px;
  margin: 12px;
  overflow: visible;
  position: relative;

  span,
  span:before,
  span:after {
    background: #fff;
    display: block;
    height: 4px;
    opacity: 1;
    position: absolute;
    transition: 0.3s ease-in-out;
  }

  span:before,
  span:after {
    content: "";
  }

  span {
    left: 0;
    top: 0;
    width: 27px;
  }

  span:before {
    left: 0;
    top: -10px;
    width: 16px;
  }

  span:after {
    left: 0;
    top: 10px;
    width: 20px;
  }

  &.close span {
    top: 13px;
    width: 27px;
    transform: rotate(-45deg) translate(10px, -6px);
  }
  &.close span:before {
    top: 0px;
    transform: rotate(90deg);
    width: 27px;
  }

  &.close span:after {
    top: 0px;
    transform: rotate(90deg);
    width: 27px;
  }
}
</style>;
