<script setup lang="ts">
import { Header } from "@components";
import { onMounted, onUnmounted } from "vue";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

const deviceStore = useDeviceStore();

onMounted(() => {
  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("scroll", handleScrolling as EventListener);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleWindowResize);
  window.removeEventListener("scroll", handleScrolling as EventListener);
});

function handleWindowResize(event: UIEvent) {
  if (!(event.target instanceof Window) || !event.target.innerWidth) return;

  const size = event.target.innerWidth;

  console.log(`devlog: size`, size);

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

function handleScrolling(event: UIEvent) {
  const scroll = event.target instanceof Window ? event.target.scrollY : 0;

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
  <RouterView />
</template>

<style scoped lang="scss"></style>
