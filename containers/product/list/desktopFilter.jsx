// scss
import { authhttp } from "../../../services/callApi/api";
import styles from "../../../styles/pages/product/desktopList.module.scss";

const DesktopFilter = ({ setProductList, activeHojreh }) => {
  const productStatus = [
    { value: "", label: "" },
    { value: 1, label: "آماده در انبار" },
    { value: 2, label: "تولید بعد از سفارش" },
    { value: 3, label: "سفارشی سازی فروش" },
    { value: 4, label: "موجود نیست" },
  ];
  return (
    <form
      className={styles.form_filter}
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const inputsForm = Object.fromEntries(data.entries());
        console.log("inputsForm", inputsForm);
        const dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
        const response = await authhttp.get(dataUrl, { params: inputsForm });
        if (response.status === 200) {
          setProductList(response.data.results);
          console.log("response.data.results", response.data.results);
        }
      }}
    >
      <h3 className="p-4 pb-2 text-gray-600 border-b">فیلترها</h3>
      <div className="grid grid-cols-3 gap-2 p-2 gap-y-4">
        <Item title="نام محصول">
          <Input name="search" place="نام محصول را وارد کنید" />
        </Item>
        <Item title="وضعیت محصول">
          <select
            name="product_status"
            className="h-12 pr-2 bg-white border rounded-lg"
          >
            {productStatus.map((value, index) => {
              return (
                <option key={index} value={value.value}>
                  {value.label}
                </option>
              );
            })}
          </select>
        </Item>

        <Item title="قیمت">
          <Input name="price_from" place="از   -   تومان" half />
          <Input name="price_to" place="تا   -   تومان" half />
        </Item>

        <Item title="زمان آماده سازی">
          <Input name="day" place="از   -   روز" half />
          <Input name="dateDay" place="تا   -   روز" half />
        </Item>
        <Item title="موجودی">
          <Input name="inventory_from" place="از   -   عدد" half />

          <Input name="inventory_to" place="تا   -   عدد" half />
        </Item>

        <div className="flex items-end justify-center">
          <button
            className="h-12 px-4 mx-2 bg-blue-400 shadow-lg rounded-xl active:scale-95"
            type="submit"
          >
            جستجو
          </button>
          <button
            className="h-12 px-4 mx-2 bg-red-300 shadow-lg rounded-xl active:scale-95"
            type="reset"
          >
            حذف همه فیلترها
          </button>
        </div>
      </div>
    </form>
  );
};
// export
export default DesktopFilter;

// COMPONENTS

function Input({ name, place, half }) {
  return (
    <>
      <input
        name={name}
        className={`h-12 pr-2 border ml-2 rounded-lg ${half && "w-[48%]"}`}
        type="text"
        placeholder={place}
      />
    </>
  );
}

function Item({ title, children }) {
  return (
    <div className="">
      <h4 className="p-2 text-[14px] font-bold text-gray-700">{title}</h4>
      <div className="flex justify-between">{children}</div>
    </div>
  );
}
