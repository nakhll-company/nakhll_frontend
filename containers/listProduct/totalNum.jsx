export const TotalNum = ({ number }) => {
  return (
    <span style={{ marginLeft: "5px", whiteSpace: "nowrap" }}>
      {" "}
      تعداد کالا:
      <span style={{ marginRight: "1px", fontWeight: "bolder" }}>
        {" "}
        {number}
      </span>
    </span>
  );
};
