<script setup>
import { Header } from "@components";
import { ref, onMounted, onUnmounted } from "vue";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";
import { Icon } from "@components";

const deviceStore = useDeviceStore();

let eventWindowResize;
let eventWindowScroll;

onMounted(() => {
  handleWindowResize(window.innerWidth);
  eventWindowResize = window.addEventListener("resize", () => {
    handleWindowResize(window.innerWidth);
  });
  handleScrolling(window.scrollY);
  eventWindowScroll = window.addEventListener("scroll", () => {
    handleScrolling(window.scrollY);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", eventWindowResize);
  window.removeEventListener("scroll", eventWindowScroll);
});

function handleWindowResize(size) {
  if (size <= BREAKPOINTS.S) {
    deviceStore.breakpoint = BREAKPOINTS.S;
  } else if (size <= BREAKPOINTS.M) {
    deviceStore.breakpoint = BREAKPOINTS.M;
  } else if (size <= BREAKPOINTS.L) {
    deviceStore.breakpoint = BREAKPOINTS.L;
  } else if (size <= BREAKPOINTS.XL) {
    deviceStore.breakpoint = BREAKPOINTS.XL;
  } else if (size <= BREAKPOINTS.XXL) {
    deviceStore.breakpoint = BREAKPOINTS.XXL;
  } else {
    deviceStore.breakpoint = BREAKPOINTS.XXXL;
  }
}

function handleScrolling(scroll) {
  if (scroll > 0) {
    deviceStore.isScrolled = true;
    deviceStore.scrollTop = scroll;
  } else {
    deviceStore.isScrolled = false;
    deviceStore.scrollTop = 0;
  }
}
</script>

<template>
  <Header />

  <!-- TODO: later slot for content -->
  <!-- TODO: need a footer -->
</template>

<style scoped lang="scss"></style>
