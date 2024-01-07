import axios from "axios";
import type { AxiosResponse } from "axios";
import { MAIN_MENU_QUERY } from "./graphql";
import { restructureMenuResponse } from "@utils";

const apiKey = import.meta.env.VITE_CMS_TOKEN;

const GRAPHQL_URL = "http://localhost:8055/graphql";
const REST_URL = "http://localhost:8055";

const MENU_WHITE_LIST = ["mainMenu"];

export const initMenusService = async () => {
  return;
  const response = await axios.post(
    GRAPHQL_URL,
    {
      query: MAIN_MENU_QUERY,
      variables: {},
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (response.status !== 200) {
    console.error(`devlog: error fetching menus`);
    return;
  }

  if (response) {
    restructureMenuResponse(response);
  }
};
