import s from "./totalNum.module.scss";

export const TotalNum = ({ number }) => {
  return (
    <span className={s.title}>
      {" "}
      تعداد کالا:
      <span className={s.number}> {number}</span>
    </span>
  );
};
