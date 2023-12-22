import type { MenuItem } from "@/types";

const getDepth = (item: MenuItem) => {
  if (item.subMenu) {
    return item.subMenu.reduce((acc, subItem) => {
      return Math.max(acc, getDepth(subItem));
    }, 1);
  }

  return 1;
};
