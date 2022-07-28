/* eslint-disable camelcase */
// node libraries

import React, { useEffect } from "react";

// methods
import { http } from "../../services/callApi/api";
import { useRouter } from "next/router";
import AppDisclosure from "../../components/Disclosure";

function Grouping({
  certainShop,

  setCategories,
  categories,
  handelAddCategory,
}) {
  const { query } = useRouter();

  useEffect(async () => {
    try {
      const response = await http.get(
        `/api/v1/categories/category_product_count/`,
        {
          params: {
            ...query,
            ...(certainShop !== "" && { shop: certainShop }),
          },
        }
      );
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (e) {
      return false;
    }
  }, [query]);

  return (
    <>
      <AppDisclosure title="دسته بندی">
        {categories.map(({ id, name, product_count }, index) => (
          <div
            key={`one${index}`}
            style={{ marginBottom: "10px", paddingRight: "10px" }}
          >
            <input
              onChange={(e) => {
                handelAddCategory(e.target.value);
              }}
              className="form-check-input"
              type="checkbox"
              value={id}
              id={`checkbox${index}`}
            />
            <label
              style={{
                marginRight: "5px",
                fontSize: "15px",
                cursor: "pointer",
              }}
              className="form-check-label"
              htmlFor={`checkbox${index}`}
            >
              {/* eslint-disable-next-line camelcase */}
              {name} ({product_count})
            </label>
          </div>
        ))}
      </AppDisclosure>
    </>
  );
}

export default Grouping;
