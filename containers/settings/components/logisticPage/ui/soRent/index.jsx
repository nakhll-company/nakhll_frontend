// node libraries
import React, { useState } from "react";
// components
import Explain from "../../components/explain";
import BtnSetting from "../../components/btnSetting";
import CheckBoxSend from "../../components/checkBoxSend";

function SoRent({ pageController, _handle_send_info_scope }) {

  const [checkNO, setCheckNO] = useState(true);
  const [checkYes, setCheckYes] = useState(false);

  return (
    <>
      <Explain
        text="

           آیا ارسال به صورت پس کرایه (پرداخت هزینه توسط مشتری زمان دریافت محصول) است؟
            "
      />
      <CheckBoxSend
        checked={checkNO}
        onChange={() => {
          !checkNO
            ? (setCheckNO(true), setCheckYes(false))
            : (setCheckNO(false), setCheckYes(true));
        }}
        id="selectNoSoRent"
        title="خیر"
      />
      <CheckBoxSend
        checked={checkYes}
        onChange={() => {
          !checkYes
            ? (setCheckYes(true), setCheckNO(false))
            : (setCheckYes(false), setCheckNO(true));
        }}
        id="selectYesSoRent"
        title="بله"
      />

      <BtnSetting
        onClick={() => {
          // checkNO ? pageController() : pageController(1, 7);
          checkNO
            ? pageController()
            : _handle_send_info_scope(
              {
                calculation_metric: { pay_time: "at_delivery" },
              },
              7
            );
        }}
        title="مرحله بعد"
      />
    </>
  );
}

export default React.memo(SoRent);
