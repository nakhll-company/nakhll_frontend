import React from "react";
import s from "./progress.module.scss";
function Progress({ precent = 10, coinsObtained = 1 }) {
  return (
    <div className={s.wrapper}>
      <div className={s.wrap_title}>
        <span>دعوت: </span>
      </div>
      <div className={s.wrap_progress}>
        <div className={s.wrap_information}>
          <span>{`${coinsObtained} سکه`}</span>
        </div>
        <div className={s.progress}>
          <div style={{ width: `${precent}%` }} className={s.bar}>
            <span>{precent}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
