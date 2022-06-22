// node libraries

import React from "react";
// components
import CustomAccordion from "../../components/custom/customAccordion";
// methods
import { http } from "../../services/callApi/api";
import { useRouter } from "next/router";

function Grouping({
  searchWord,
  setCategories,
  categories,
  handelAddCategory,
  item,
}) {
  const { query } = useRouter();
  const handelCategory = async () => {
    try {
      const response = await http.get(
        `/api/v1/categories/category_product_count/`,
        {
          params: { ...query },
        }
      );
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (e) {
      return false;
    }
  };
  return (
    <>
      <CustomAccordion
        title="دسته بندی"
        item={item ? item : "one"}
        callApi={() => handelCategory()}
      >
        {/* eslint-disable-next-line camelcase */}
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
      </CustomAccordion>
    </>
  );
}

export default Grouping;
