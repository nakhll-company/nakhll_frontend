// node libraries
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
// style
import s from "./filtersPart.module.scss";

function FiltersPart({ filters, removeFilter }) {
  const selectMessage = {
    category: "دسته بندی",
    min_price: "محدوده قیمتی",
    max_price: "محدوده قیمتی",
    city: "استان",
    available: "کالاهای موجود",
    ready: "کالاهای آماده ارسال ",
    discounted: "تخفیف دارها",
  };

  const showFilters = (queryUrl) => {
    let messageArr = [];
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries(queryUrl)) {
      if (selectMessage[key]) {
        messageArr = [...messageArr, { key, title: selectMessage[key] }];
      }
    }
    return messageArr;
  };

  return (
    <>
      {!!showFilters(filters).length && (
        <div className={s.wrap}>
          <div className={s.header}>
            <span style={{ marginLeft: "auto" }}> فیلترهای اعمال شده</span>
          </div>
          {showFilters(filters).map((el, index) => (
            <span key={index} className={s.tag}>
              <span onClick={() => removeFilter(el.key)} className={s.close}>
                <AiFillCloseCircle size={20} color="rgb(0, 108, 250)" />
              </span>
              {el.title}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default FiltersPart;
