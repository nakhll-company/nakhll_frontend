import { BsSortDownAlt, BsFilter } from "react-icons/bs";
import s from "./TopBar.module.scss";

const CustomList = ({ className, onClick, title }) => {
  return (
    <li className={`sort-item  ${className && " active"} `}>
      <a  onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

const TotalNum = ({ number }) => {
  return (
    <span style={{ marginLeft: "20px" }}>
      {" "}
      تعداد کالا:
      <span style={{ marginRight: "10px", fontWeight: "bolder" }}>
        {" "}
        {number}
      </span>
    </span>
  );
};

const showFilter = (data) => {
  let message = {
    Price: "ارزانتر",
    "-Price": "گرانتر",
    "-DiscountPrecentage": "بیشترین تخفیف",
    "-DateCreate": "تازه ها",
  };
  if (data == undefined) {
    return "مرتبط‌ترین";
  }
  return message[data];
};

export const TopBar = ({
  onChangeFilter,
  totalcount,
  data,
  handel_filterModal,
  handel_OrderingModal,
}) => {
  return (
    <>
      <div className={s.wrap}>
        {/* Mobile */}
        <div className={s.wrap_mobile}>
          <div onClick={handel_filterModal}>
            <BsFilter size={20} />
            <span>فیلترها</span>
          </div>
          <div onClick={handel_OrderingModal}>
            <BsSortDownAlt size={20} />
            <span>
              مرتب سازی:
              <span className={s.filter_name}>{showFilter(data)}</span>
            </span>
          </div>
          <div className="">

          <TotalNum number={totalcount} />
          </div>
        </div>{" "}
        {/* Descktop */}
        <div className="search-sorts d-none d-lg-flex ">
          <div className=" d-flex  align-items-center">
            <div
              className="title"
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgb(138 137 137)",
              }}
            >
              <BsSortDownAlt size={20} />
              <span
                className="d-none d-lg-block"
                style={{ color: "rgb(138 137 137)" }}
              >
                {" "}
                مرتب‌سازی براساس :{" "}
              </span>
            </div>{" "}
            <ul>
              <CustomList
                className={data == undefined}
                onClick={() => {
                  onChangeFilter("ordering", "");
                }}
                title="مرتبط ترین"
              />
              <CustomList
                className={data == "Price"}
                onClick={() => {
                  onChangeFilter("ordering", "Price");
                }}
                title="ارزانتر"
              />
              <CustomList
                className={data == "-Price"}
                onClick={() => {
                  onChangeFilter("ordering", "-Price");
                }}
                title="گران تر"
              />
              <CustomList
                className={data == "-DiscountPrecentage"}
                onClick={() => {
                  onChangeFilter("ordering", "-DiscountPrecentage");
                }}
                title="بیشترین تخفیف"
              />
              <CustomList
                className={data == "-DateCreate"}
                onClick={() => {
                  onChangeFilter("ordering", "-DateCreate");
                }}
                title="تازه ها"
              />
            </ul>
          </div>
          <TotalNum number={totalcount} />
        </div>{" "}
      </div>
    </>
  );
};
