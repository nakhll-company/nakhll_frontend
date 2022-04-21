// node libraries
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// component
import Layout from "../../../../../components/layout/Layout";
import useViewport from "../../../../../components/viewPort";
import MobileHeader from "../../../../../components/mobileHeader";
// methods
import { successMessage } from "../../../../../utils/toastifyMessage";
import { mapState } from "../../../../../containers/product/methods/mapState";
// scss
import styles from "../../../../../styles/pages/product/editInventory.module.scss";
import { authhttp } from "../../../../../services/callApi/api";

const Inventory = ({ productList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { width } = useViewport();
  const breakpoint = 620;

  const onSubmit = async (data) => {
    const objArray = [];
    let formValues = Object.values(data);
    Object.keys(data).forEach((key, index) => {
      if (index % 2 === 0) {
        objArray.push({
          Slug: formValues[index + 0],
          Inventory: formValues[index + 1],
        });
      }
    });

    let response = await authhttp.patch(`/api/v1/shop/multiple-update/inventory/`,objArray) 
    if (response.status === 200) {
      successMessage("داده ها با موفقیت ثبت شده اند");
    }
  };

  return (
    <>
      {width < breakpoint && (
        <div className={styles.wrapper}>
          <MobileHeader title="ویرایش موجودی محصولات" type="back" />
          <div className={styles.header}>
            <span className={styles.header_first_child}>عنوان محصول</span>
            <span className={styles.header_last_child}>موجودی</span>
          </div>
          <form className={styles.form_edit} onSubmit={handleSubmit(onSubmit)}>
            {productList.length > 0 ? (
              productList.map((value, index) => {
                return (
                  <div key={index} className={styles.form_edit_card}>
                    <label className={styles.form_edit_label}>
                      {value.title}
                    </label>
                    <input
                      type="hidden"
                      name={`Slug${index + 100}`}
                      defaultValue={value.slug}
                    />
                    <input
                      className={styles.form_edit_input}
                      type="number"
                      defaultValue={value.inventory}
                      {...register(`Inventory${index + 100}`, {
                        required: "لطفا این گزینه را پر نمایید",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={`Inventory${index + 100}`}
                    >
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
export default connector(Inventory);
Inventory.Layout = Layout;
