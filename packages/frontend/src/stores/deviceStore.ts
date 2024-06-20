import { ref } from "vue";
import { defineStore } from "pinia";
import { BREAKPOINTS } from "@configs";

type BreakPoint = number | null;

export const useDeviceStore = defineStore("device", {
  state: () => ({
    breakpoint: ref<BreakPoint>(null),
    isScrolled: ref(false),
    scrollTop: ref(0),
  }),
  getters: {
    isMobile: (state) => state.breakpoint && state.breakpoint <= BREAKPOINTS.L,
    isTablet: (state) =>
      state.breakpoint &&
      state.breakpoint > BREAKPOINTS.L &&
      state.breakpoint <= BREAKPOINTS.XL,
    isDesktop: (state) =>
      state.breakpoint && state.breakpoint > BREAKPOINTS.XXL,
  },
});
