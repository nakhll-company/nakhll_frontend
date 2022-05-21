import { useState } from "react";

import { authhttp } from "../../../../../../../services/callApi/api";
import styles from "./switchButton.module.scss";

function SBSendUnit({ id, isActive }) {
  const [Activer, setActiver] = useState(isActive);
  const [disableBtn, setDisableBtn] = useState(false);
  const handelChamngeStatus = async () => {
    setDisableBtn(true);
    const response = await authhttp.patch(
      `/api/v1/logistic/shop-logistic-unit/${id}/`,
      {
        is_active: !isActive,
      }
    );

    if (response.status == 200) {
      setActiver((e) => !e);
      setDisableBtn(false);
    }
  };
  return (
    <>
      <div className={`${styles.custom_switch} d-flex align-items-center `}>
        <input
          type="checkbox"
          id={`switch__${id}`}
          className={styles.custom_switch__input}
          onChange={handelChamngeStatus}
          // defaultChecked={isActive}
          checked={Activer}
          disabled={disableBtn}
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

export default SBSendUnit;
