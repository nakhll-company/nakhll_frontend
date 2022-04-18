export const ApiReference = {
  Landing_Page: "/api/v1/landing/schema/",
  menu: "/api/v1/markets/",
  shop: "/api/v1/shop/",
  schemaShop: "/api/v1/shop/schema/",
  allShops: "/api/v1/shops/",
  PinnedURL: {
    creat: {
      url: "/api/v1/shop/pinned-urls/",
      params: { name: "", link: "" },
      method: "post",
    },
    PinnedList: {
      url: "/api/v1/shop/pinned-urls/",
      method: "Get",
    },
    delete: {
      url: "",
    },
  },
  landing: {
    creat: {
      url: "/api/v1/shop/landings/",
      params: { name: "", page_data: "", shop: "mamaneila" },
      method: "post",
    },
    update: {
      url: "/api/v1/shop/landings/",
      urlPath: "id/",
      method: "put",
    },
    getLanding: {
      url: "/api/v1/shop/landings/",
      urlPath: "id/",
      method: "Get",
    },
  },
};
