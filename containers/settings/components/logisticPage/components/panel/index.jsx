import { useEffect, useState } from "react";
import LoadingAllPage from "../../../../../../components/loadingAllPage";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import SendBoxCu from "../sendBoxCu";
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import { useSelector } from "react-redux";
import st from "./panel.module.scss";
import Image from "next/image";
import Assistent from "zaravand-assistent-number";
import { errorMessage } from "../../../../../utils/message";
const _asist = new Assistent();
function Panel({ setConstraintId, setMetricId, setWichIdScope, changePage }) {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  // state for Saved Sending Unit
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);

  const [loaderTable, setLoaderTable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "get",

        `/api/v1/logistic/shop-logistic-unit/?shop=${activeHojreh}`,
        true,
        ""
      );

      if (response.status == 200) {
        setSavedSendingUnit(response.data);
      }
    }

    fetchData();
  }, []);

  const _handle_delete_scope = async (id) => {
    setLoaderTable(true);
    let response = await ApiRegister().apiRequest(
      null,
      "DELETE",

      `/api/v1/logistic/shop-logistic-unit/${id}/`,
      true,
      ""
    );

    if (response.status == 204) {
      let helpArray = SavedSendingUnit.filter((el) => el.id !== id);
      setSavedSendingUnit(helpArray);
      setLoaderTable(false);
    } else {
      setLoaderTable(false);

      errorMessage("باری دیگر تلاش کنید.");
    }
  };
  const _handel_click_on_scope = (data) => {
    setWichIdScope(data.id);
    setConstraintId(data.constraint.id);
    setMetricId(data.calculation_metric.id);
    changePage();
  };

  
  return (
    <>
      {loaderTable && <LoadingAllPage title="در حال حذف" />}

      {SavedSendingUnit.map((el, index) => (
        <div key={index} className={st.wraper}>
          <div className={st.card}>
            <div
              onClick={() => _handel_click_on_scope(el)}
              className={st.card_right}
            >
              <div className={st.card_right_top}>
                <span>{_asist.PSeparator(_asist.PSeparator(el.name))}</span>
              </div>

              <div className={st.card_right_btm}>
                {/* icons */}

                <div className={st.icon_post}>
                  <Image
                    layout="responsive"
                    src="/icons/settings/ExpressPost.svg"
                    width={30}
                    height={30}
                    alt="icon-1"
                  />
                </div>

                <div className={st.info_post}>
                  <div className={st.info_line}>
                    <Image
                      layout="fixed"
                      src="/icons/settings/products.svg"
                      width={20}
                      height={20}
                      alt="icon-1"
                    />

                    <span>
                      {el.products_count == 0
                        ? "تمام محصولات"
                        : `${_asist.PSeparator(el.products_count)} محصول`}
                    </span>
                  </div>
                  <div className={st.info_line}>
                    <Image
                      layout="fixed"
                      src="/icons/settings/cities.svg"
                      width={20}
                      height={20}
                      alt="icon-1"
                    />
                    <span>
                      {el.cities_count == 0
                        ? "تمام شهرها"
                        : `${_asist.PSeparator(el.cities_count)} شهر`}
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
                {/* <i
                  onClick={() => _handle_delete_scope(el.id)}
                  className="fas fa-times-circle"
                ></i> */}
                <div
                  onClick={() => _handle_delete_scope(el.id)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    layout="fixed"
                    src="/icons/settings/trash.svg"
                    width={20}
                    height={20}
                    alt="icon-1"
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
