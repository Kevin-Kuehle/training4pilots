export const MAIN_MENU_QUERY = `
  query {
    menuList(search: "mainMenu") {
      id
      name
      items {
        id
        item {
          ... on menuItems {
            path
            displayName
          }

          ... on menuList {
            id
            name
            items {
              id
              item {
                ... on menuItems {
                  path
                  displayName
                }

                ... on menuList {
                  id
                  name
                  items {
                    id
                    item {
                      ... on menuItems {
                        path
                        displayName
                      }

                      ... on menuList {
                        id
                        name
                        items {
                          id
                          item {
                            ... on menuItems {
                              path
                              displayName
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
