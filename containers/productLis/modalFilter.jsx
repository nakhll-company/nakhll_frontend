// node libraries
import React, { useContext } from "react";
// components
import CustomSwitch from "../../components/custom/customSwitch";
import ContextListProductPage from "../listProduct/Context/context";
import CustomAccordion from "../../components/custom/customAccordion";

export const ModalFilter = () => {
  const { setIsFree, setIsFellowCitizen } = useContext(ContextListProductPage);
  return (
    <div className="modal_filter_products d-none d-lg-block ">
      <div id="sidebar">
        <CustomAccordion title="دسته بندی" item="1">
          <div>اینجا اطلاعات قرار می گیره</div>
        </CustomAccordion>
        <CustomAccordion title="امتیاز محصول" item="2">
          <div>اینجا اطلاعات قرار می گیره</div>
        </CustomAccordion>

        <CustomAccordion title="محدوده قیمت" item="3">
          <div>اینجا اطلاعات قرار می گیره</div>
        </CustomAccordion>
        <CustomAccordion title="استان و شهر حجره دار" item="4">
          <div>اینجا اطلاعات قرار می گیره</div>
        </CustomAccordion>

        <div className="search-body-filter">
          <div className="modal-body" style={{ msOverflowX: "hidden" }}>
            <CustomSwitch
              title="ارسال رایگان"
              id="discount_mobile"
              onChange={(e) => {
                setIsFree(e.target.checked);
              }}
            />
            <CustomSwitch
              title="همشهری"
              id="fellowCitizen_mobile"
              onChange={(e) => {
                setIsFellowCitizen(e.target.checked);
              }}
            />

            <CustomSwitch
              title="فقط کالاهای موجود"
              id="Available_goods_mobile"
            />
            <CustomSwitch title="تخفیف دارها" id="discounted_mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};
