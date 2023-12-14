import * as menuMock from "./json/mock-menu.json";

export function getMenuItems(): Promise<MenuItem[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(menuMock);
    }, 10);
  });
}
