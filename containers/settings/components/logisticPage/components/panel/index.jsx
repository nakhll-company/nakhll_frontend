// node libraries
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// ciomponents
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import LoadingAllPage from "../../../../../../components/loadingAllPage";
// methods
import { authhttp } from "../../../../../../services/callApi/api";
import { diviedNumber } from "../../../../../../utils/diviedNumber";
// style
import st from "./panel.module.scss";

function Panel({
  setConstraintId,
  setWichIdScope,
  setInformationForm,
  setWichPage,
}) {
  const [loaderTable, setLoaderTable] = useState(false);
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  useEffect(() => {
    async function fetchData() {
      const response = await authhttp.get(
        `/api/v1/logistic/shop-logistic-unit/?shop=${activeHojreh}`
      );
      if (response.status == 200) {
        setSavedSendingUnit(response.data);
      }
    }
    fetchData();
  }, [activeHojreh]);

  const handleDeleteScope = async (id) => {
    setLoaderTable(true);
    const response = await authhttp.delete(
      `/api/v1/logistic/shop-logistic-unit/${id}/`
    );
    if (response.status == 204) {
      const helpArray = SavedSendingUnit.filter((el) => el.id !== id);
      setSavedSendingUnit(helpArray);
      setLoaderTable(false);
    } else {
      setLoaderTable(false);
    }
  };
  const handelClickOnScope = (data) => {
    setInformationForm(data);
    setWichIdScope(data.id);
    setConstraintId(data.constraint.id);
    setWichPage(9);
  };

  return (
    <>
      {loaderTable && <LoadingAllPage title="در حال حذف" />}

      {SavedSendingUnit?.map((el, index) => (
        <div key={index} className={st.wraper}>
          <div className={st.card}>
            <div
              onClick={() => handelClickOnScope(el)}
              className={st.card_right}
            >
              <div className={st.card_right_top}>
                <span>{diviedNumber(el.name)}</span>
              </div>
              <div className={st.card_right_btm}>
                {/* icons */}
                <div className={st.icon_post}>
                  {el.logo && (
                    <Image
                      layout="responsive"
                      src={el.logo}
                      width={30}
                      height={30}
                      alt="icon"
                    />
                  )}
                </div>

                <div className={st.info_post}>
                  <div className={st.info_line}>
                    <Image
                      layout="fixed"
                      src="/icons/settings/products.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    />

                    <span>
                      {el.products_count == 0
                        ? "تمام محصولات"
                        : `${diviedNumber(el.products_count)} محصول`}
                    </span>
                  </div>
                  <div className={st.info_line}>
                    <Image
                      layout="fixed"
                      src="/icons/settings/cities.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <span>
                      {el.cities_count == 0
                        ? "تمام شهرها"
                        : `${diviedNumber(el.cities_count)} شهر`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={st.card_left}>
              <div className={st.wrapper_icons}>
                <div>
                  <SBSendUnit
                    isActive={el.is_active}
                    shop_logistic_unit={el.shop_logistic_unit}
                    id={el.id}
                  />
                </div>
                <div
                  onClick={() => handleDeleteScope(el.id)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    layout="fixed"
                    src="/icons/settings/trash.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Panel;
