import React from "react";
import { useDispatch } from "react-redux";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";

import styles from "./InputUrl.module.scss";

function InputUrl(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={styles.icon_change_url}
        onClick={() => {
          dispatch(_showSelect_url());
        }}
      >
        <i className="fas fa-snowboarding"></i>
      </div>
    </>
  );
}

export default InputUrl;
