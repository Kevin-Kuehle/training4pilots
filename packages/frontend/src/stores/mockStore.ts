import { defineStore } from "pinia";
import { menuItems } from "@mocks";

export const useMockStore = defineStore("mock", {
  state: () => ({
    menuItems: [] as typeof menuItems, // Update the type of menuItems
  }),
  actions: {
    fetchMenuItems() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.menuItems = menuItems;
          resolve(this.menuItems);
        }, 10);
      });
    },
  },
});
