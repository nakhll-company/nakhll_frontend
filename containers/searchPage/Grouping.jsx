import React from "react";
import CustomAccordion from "../../components/custom/customAccordion";
import {  http } from "../../services/callApi/api";

function Grouping({
  searchWord,
  setCategories,
  categories,
  _handel_Add_category,
  item,
}) {
  const _handel_category = async () => {
    try {
      let response = await http.get(
        `/api/v1/categories/category_product_count/?q=${searchWord}`
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
        callApi={() => _handel_category()}
      >
        {categories.map(({ id, name, product_count }, index) => (
          <div
            key={`one${index}`}
            style={{ marginBottom: "10px", paddingRight: "10px" }}
          >
            <input
              onChange={(e) => {
                _handel_Add_category(e.target.value);
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
              {name} ({product_count})
            </label>
          </div>
        ))}
      </CustomAccordion>
    </>
  );
}

export default Grouping;
