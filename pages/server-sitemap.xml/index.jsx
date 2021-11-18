import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const getServerSideProps = async (ctx) => {
  let response = await ApiRegister().apiRequest(
    null,
    "Get",
    "/api/v1/util/shops/",
    true,
    ""
  );
  let fields = [];
  if (response.status == "200") {
    let ans = [...response.data];

    fields = ans.map((el) => ({
      loc: `https://nakhll.com/shop/${el.Slug}/`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9",
    }));
  }

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
