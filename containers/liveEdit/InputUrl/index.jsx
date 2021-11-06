import React from "react";
import { useDispatch } from "react-redux";
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { _showSelect_url } from "../../../redux/actions/liveEdit/_showSelect_url";

import styles from "./InputUrl.module.scss";

function InputUrl({ id, order = 0 }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={styles.icon_change_url}
        onClick={() => {
          let idSelected = { id, order };
          dispatch(_selectId(idSelected));
          dispatch(_showSelect_url());
        }}
      >
        <i className="fas fa-snowboarding"></i>
      </div>
    </>
  );
}

export default InputUrl;
