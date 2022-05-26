import React from "react";
// node libraries
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// component
import useViewport from "../../../../../components/viewPort";
import MobileHeader from "../../../../../components/mobileHeader";
// methods
import { authhttp } from "../../../../../services/callApi/api";
import { successMessage } from "../../../../../utils/toastifyMessage";
import { mapState } from "../../../../../containers/product/methods/mapState";
// scss
import styles from "../../../../../styles/pages/product/editPrice.module.scss";

const Price = ({ productList }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { width } = useViewport();
  const breakpoint = 620;

  const onSubmit = async (data) => {
    const objArray = [];
    const formValues = Object.values(data);
    Object.keys(data).forEach((key, index) => {
      if (index % 3 === 0) {
        objArray.push({
          Slug: formValues[index + 0],
          Price: formValues[index + 2],
          OldPrice: formValues[index + 1],
        });
      }
    });
    const response = await authhttp.patch(
      `/api/v1/shop/multiple-update/price/`,
      objArray
    );
    if (response.status === 200) {
      successMessage("داده ها با موفقیت ثبت شده اند");
    }
  };

  return (
    <>
      {width < breakpoint && (
        <div className={styles.wrapper}>
          <MobileHeader title="ویرایش قیمت و تخفیف محصولات" type="back" />
          <div className={styles.header}>
            <span>عنوان محصول</span>
            <span>قیمت</span>
            <span>قیمت با تخفیف</span>
          </div>
          <form className={styles.form_edit} onSubmit={handleSubmit(onSubmit)}>
            {productList.results.length > 0 ? (
              productList.results.map((value, index) => {
                return (
                  <div key={index} className={styles.form_edit_card}>
                    {/* slug */}
                    <label className={styles.form_edit_label}>
                      {value.Title}
                    </label>
                    <input
                      type="hidden"
                      defaultValue={value.Slug}
                      {...register(`Slug${index + 100}`)}
                    />
                    {/* price */}
                    <input
                      className={styles.form_edit_input}
                      type="number"
                      {...register(`Price${index + 100}`, {
                        required: "لطفا این گزینه را پر نمایید",
                      })}
                      defaultValue={
                        value.Price > value.OldPrice
                          ? value.Price / 10
                          : value.OldPrice / 10
                      }
                    />
                    <ErrorMessage errors={errors} name={`Price${index + 100}`}>
                      {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        ))
                      }
                    </ErrorMessage>
                    {/* old price */}
                    <input
                      className={styles.form_edit_input}
                      type="number"
                      {...register(`Old${index + 100}`, {
                        required: "لطفا این گزینه را پر نمایید",
                        min: {
                          value: 0,
                          message: "لطفا اعداد بزرگتر از صفر وارد نمایید",
                        },
                        validate: (value) =>
                          parseInt(value) <=
                            parseInt(getValues(`Price${index + 100}`)) ||
                          "لطفا قیمت با تخفیف را کمتر از قیمت اصلی وارد نمایید",
                      })}
                      defaultValue={
                        value.Price > value.OldPrice
                          ? value.OldPrice / 10
                          : value.Price / 10
                      }
                    />
                    <ErrorMessage errors={errors} name={`Old${index + 100}`}>
                      {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        ))
                      }
                    </ErrorMessage>
                  </div>
                );
              })
            ) : (
              <h3 style={{ textAlign: "center" }}>
                موردی برای نمایش وجود ندارد
              </h3>
            )}
            <div className={styles.form_edit_wrapper_button}>
              <button type="submit" className={styles.form_edit_button}>
                اعمال تغییرات
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
// export
const connector = connect(mapState);
export default connector(Price);
