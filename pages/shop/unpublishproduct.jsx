import React from "react";
import ShopLayout from "../../components/shopLayout";
import Unpublish from "../../components/Unpublish";

function Unpublishproduct() {
  return (
    <>
      <Unpublish
        image="/image/unactive_product.svg"
        text="  این محصول به یکی از دلایل زیر از دسترس خارج شده است:"
        sub={[
          "بر خلاف قوانین نخل و جمهوری اسلامی بوده است",
          "بنا به درخواست فروشنده محصول غیرفعال شده است",
        ]}
      />
    </>
  );
}

export default Unpublishproduct;
Unpublishproduct.Layout = ShopLayout;
