import React from "react";

import DynamicLanding from "../containers/LandingPage/DynamicLanding";

const index = () => {
  const SampleLanding = {
    1: "اسلایدر تکی",
    2: "بنر تک عکسی",
    3: " بنر 2تایی در یک ردیف",
    4: " (یکی بالا دوتا پایین)بنر ۳ تایی",
    5: " بنر چهارتایی چهارتا کنار هم",
    6: " ردیف محصولات",
    7: " ردیف شگفت انگیزا",
  };

  return (
    <>
      <DynamicLanding urlSchema="http://51.89.107.174:8000/api/v1/landing/schema/" />
    </>
  );
};

export default index;
