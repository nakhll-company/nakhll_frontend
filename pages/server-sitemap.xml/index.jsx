import { getServerSideSitemap } from "next-sitemap";
import { http } from "../../services/callApi/api";

export const getServerSideProps = async (ctx) => {
  const response = await http.get("https://nakhll.com/api/v1/util/shops/");

  let fields = [];
  if (response.status == "200") {
    const ans = [...response.data];
    fields = ans.map((el) => ({
      loc: `https://nakhll.com/shop/${el.Slug}/`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9",
    }));
    ans.map((el) => {
      if (el.products_slug.length > 0) {
        el.products_slug.map((product) => {
          const newObj = {
            loc: `https://nakhll.com/shop/${el.Slug}/product/${product}/`,
            lastmod: new Date().toISOString(),
            changefreq: "daily",
            priority: "0.9",
          };
          fields.push(newObj);
        });
      }
    });
  }

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
