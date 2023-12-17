import { defineStore } from "pinia";
import { menuItems } from "@mocks";

export const useMockStore = defineStore("mock", {
  getters: {
    getMenuItems() {
      return menuItems;
    },
  },
});
