import React from "react";
import CustomAccordion from "../../components/custom/customAccordion";
import { AiFillCloseCircle } from "react-icons/ai";
import s from "./filtersPart.module.scss";
import { val } from "dom7";

let items = ["دسته بندی", "محدوده قیمت", "حجره", "استان", "کالاهای موجود"];
function FiltersPart({ filters }) {
  let fil = {

    ordering: "Price",
    category: "69",
    min_price: "250010",
    max_price: "18500000",
    city: "467,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1186,1187,1188,1189,1190,1191,1192,1201",
    available: "true",
    ready: "true",
    discounted: "true",
  };

  const showFilters = (fil) => {
      let arrFilters=[]
      for(let [key,value] of Object.entries(filters)){
          console.log('el :>> ', key,value);
      }
  };
  

  return (
    <>
      <div className={s.wrap}>
        <div className={s.header}>
          <span onClick={()=>showFilters()} style={{ marginLeft: "auto" }}> فیلترهای اعمال شده</span>
        </div>
        {items.map((el, index) => (
          <span key={index} className={s.tag}>
            <span className={s.close}>
              <AiFillCloseCircle size={20} color="rgb(0, 108, 250)" />
            </span>
            {el}
          </span>
        ))}
      </div>
    </>
  );
}

export default FiltersPart;
