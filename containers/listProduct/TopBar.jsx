import { BsSortDownAlt, BsFilter } from "react-icons/bs";
import { CustomList } from "./customList";
import { showFilter } from "./showFilter";
import s from "./TopBar.module.scss";
import { TotalNum } from "./totalNum";

const TopBar = ({
  onChangeFilter,
  totalcount,
  data,
  handelFilterModal,
  handelOrderingModal,
}) => {
  return (
    <>
      <div className={s.wrap}>
        {/* Mobile */}
        <div className={s.wrap_mobile}>
          <div onClick={handelFilterModal}>
            <BsFilter size={18} />
            <span>فیلترها</span>
          </div>
          <div onClick={handelOrderingModal}>
            <BsSortDownAlt size={18} />
            <span>
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
                className="d-none d-lg-block "
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
// export
export default TopBar;
