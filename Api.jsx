import { method } from "lodash";

export const ApiReference = {
  Landing_Page: "/api/v1/landing/schema/",
  menu: "/api/v1/markets/",
  shop: "/api/v1/shop/",
  schemaShop: "/api/v1/shop/schema/",
  allShops: "/api/v1/shops/",
  PinnedURL: {
    creat: {
      url: "/api/v1/pinned_url/",
      params: { name: "", link: "" },
      method: "post",
    },
    PinnedList: {
      url: "/api/v1/pinned_url/",
      method: "Get",
    },
    delete:{
      url:""
    }
  },
};
