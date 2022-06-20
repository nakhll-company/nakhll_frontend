import React from "react";
import s from "./progress.module.scss";
function Progress() {
  return (
    <div className={s.wrapper}>
      <div className={s.wrap_title}>
        <span>دعوت: </span>
      </div>
      <div className={s.wrap_progress}>
        <div className={s.wrap_information}>
          <span>1 سکه</span>
        </div>
        <div className={s.progress}>
          <div className={s.bar}>
            <span>10</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
