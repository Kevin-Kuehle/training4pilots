import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { BREAKPOINTS } from "@configs";

export const useDeviceStore = defineStore("device", {
  state: () => ({
    breakpoint: ref(null),
    isScrolled: ref(false),
    scrollTop : ref(0),
  }),
  getters: {
    isMobile: (state) => state.breakpoint <= BREAKPOINTS.L,
    isTablet: (state) =>
      state.breakpoint > BREAKPOINTS.L && state.breakpoint <= BREAKPOINTS.XL,
    isDesktop: (state) => state.breakpoint > BREAKPOINTS.XL,
  },
});
