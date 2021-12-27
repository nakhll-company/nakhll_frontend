import st from "./checkBoxSend.module.scss";

function CheckBoxSend({ title, id, checked, onChange }) {
  return (
    <>
      <div style={{ marginBottom: "16px" }} className="form-check">
        <input
          style={{ float: "right", cursor: "pointer" }}
          className="form-check-input"
          type="checkbox"
          onChange={onChange}
          checked={checked}
          id={`flexCheckDefault_${id}`}
        />
        <label
          style={{ marginRight: "25px", color: "#000000A1", cursor: "pointer" }}
          className={st.label}
          htmlFor={`flexCheckDefault_${id}`}
        >
          {title}
        </label>
      </div>
    </>
  );
}

export default CheckBoxSend;
