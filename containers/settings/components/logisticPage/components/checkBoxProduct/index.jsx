import st from "./checkBoxProduct.module.scss";

function CheckBoxProduct({ title }) {
  return (
    <>
      <div style={{ marginBottom: "16px" }} className="form-check">
        <input
          style={{ float: "right", cursor: "pointer" }}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          style={{ marginRight: "25px", color: "#000000A1", cursor: "pointer" }}
          className={st.label}
          htmlFor="flexCheckDefault"
        >
          {title}
        </label>
      </div>
    </>
  );
}

export default CheckBoxProduct;
