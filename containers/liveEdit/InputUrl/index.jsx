import React from "react";
import { useDispatch } from "react-redux";
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { showSelectUrl } from "../../../redux/actions/liveEdit/_showSelect_url";

import styles from "./InputUrl.module.scss";

function InputUrl({ id, order = 0 }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={styles.icon_change_url}
        onClick={() => {
          const idSelected = { id, order };
          dispatch(_selectId(idSelected));
          dispatch(showSelectUrl());
        }}
      >
        <i className="fas fa-snowboarding"></i>
      </div>
    </>
  );
}

export default InputUrl;
