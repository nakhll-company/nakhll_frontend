// node libraries
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// ciomponents
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import LoadingAllPage from "../../../../../../components/loadingAllPage";
// methods
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
// style
import st from "./panel.module.scss";

const _asist = new Assistent();

function Panel({ setConstraintId, setWichIdScope, setInformationForm, setWichPage }) {

  const [loaderTable, setLoaderTable] = useState(false);
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

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
  }, [activeHojreh]);

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
    }
  };
  const _handel_click_on_scope = (data) => {
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
              onClick={() => _handel_click_on_scope(el)}
              className={st.card_right}
            >
              <div className={st.card_right_top}>
                <span>{_asist.PSeparator(_asist.PSeparator(el.name))}</span>
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
                        : `${_asist.PSeparator(el.products_count)} محصول`}
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
                <div
                  onClick={() => _handle_delete_scope(el.id)}
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
