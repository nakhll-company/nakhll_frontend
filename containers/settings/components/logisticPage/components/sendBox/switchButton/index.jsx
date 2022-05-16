import { useState } from "react";
import { useSelector } from "react-redux";
import { authhttp } from "../../../../../../../services/callApi/api";
import styles from "./switchButton.module.scss";

function SwitchButtonSetting({ id, isActive }) {
  const [Activer, setActiver] = useState(isActive);
  const handel_chamnge_status = async () => {
    setActiver((e) => !e);
    let response = await authhttp.put(
      `/api/v1/logistic/shop-logistic-unit/${id}/`,
      {
        is_active: !isActive,
      }
    );
    if (response.status == 200) {
    }
  };
  return (
    <>
      <div className={`${styles.custom_switch} d-flex align-items-center `}>
        <input
          type="checkbox"
          id={`switch__${id}`}
          className={styles.custom_switch__input}
          onChange={handel_chamnge_status}
          // defaultChecked={isActive}
          checked={Activer}
          // value={isActive}
        />{" "}
        <label
          htmlFor={`switch__${id}`}
          className={styles.custom_switch__label}
        >
          <span className={styles.circle}></span>
        </label>
      </div>{" "}
    </>
  );
}

export default SwitchButtonSetting;
