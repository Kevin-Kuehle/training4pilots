import { menuItems } from "@mocks";
import type { MenuItem } from "@/types";

export const restructureMenuResponse = (response: any) => {
  if (!response.data) {
    console.error(`devlog: restructureMenuResponse: no data in response`);
    return [];
  }

  if (!Object.prototype.hasOwnProperty.call(response, "data")) {
    console.error(`devlog: restructureMenuResponse: no data in response`);
    return [];
  }

  if (!Object.prototype.hasOwnProperty.call(response.data, "data")) {
    console.error(`devlog: restructureMenuResponse: no data in response.data`);
    return [];
  }

  if (!Object.prototype.hasOwnProperty.call(response.data.data, "menuList")) {
    console.error(
      `devlog: restructureMenuResponse: no menuList in response.response.data.data`
    );
    return [];
  }

  const menuLists = structuredClone(response.data.data.menuList);

  if (menuLists.length === 0) {
    console.error(`devlog: restructureMenuResponse: no items in response`);
    return [];
  }

  const menus: Array<MenuItem> = [];
  for (const list of menuLists) {
    const menuItems: Array<MenuItem> = [];

    for (const item of list.items) {
      const t = restructureMenuItem(item);

      continue;

      const menuItem: MenuItem = {
        name: item.item.displayName || item.item.name,
      };

      if (item.item?.items) {
        menuItem.subMenu = item.item.items;
      }

      if (item.item.path) {
        menuItem.path = item.item.path;
      }
    }
  }
};

const restructureMenuItem = (item: any): MenuItem => {
  const outputMenuItem: MenuItem = {
    name: "no name set",
    subMenu: [],
    path: "",
  };

  outputMenuItem.name = item.item.displayName || item.item.name;

  if (item.item?.items) {
    outputMenuItem.subMenu = item.item.items;
  }

  if (item.item.path) {
    outputMenuItem.path = item.item.path;
  }

  if (item.item.items) {
    item.item.items.forEach((element) => {
      const i = restructureMenuItem(element);
      outputMenuItem.subMenu = outputMenuItem.subMenu || [];
      outputMenuItem.subMenu.push(i);
    });
  }

  return outputMenuItem;
};
