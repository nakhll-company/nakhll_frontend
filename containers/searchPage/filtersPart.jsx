import React from "react";
import CustomAccordion from "../../components/custom/customAccordion";
import { AiFillCloseCircle } from "react-icons/ai";
import s from "./filtersPart.module.scss";
import { val } from "dom7";

let items = ["دسته بندی", "محدوده قیمت", "حجره", "استان", "کالاهای موجود"];
function FiltersPart({ filters, removeFilter }) {
  // let fil = {
  //   category: "",
  //   min_price: "",
  //   max_price: "",
  //   city: "",
  //   available: "",
  //   ready: "",
  //   discounted: "",
  // };
  let selectMessage = {
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
    for (let [key, value] of Object.entries(queryUrl)) {
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
