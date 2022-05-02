// node libraries
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import LoadingAllPage from "../../../../../../components/loadingAllPage";

// style
import st from "./tabel.module.scss";
import { authhttp } from "../../../../../../services/callApi/api";

const _asist = new Assistent();

function Tabel({ changePage, setWichIdScope }) {
  const [loaderTable, setLoaderTable] = useState(false);
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await authhttp.get(
        `/api/v1/logistic/shop-logistic-unit-constraint/`,
        { id: 10 }
      );

      if (response.status == 200) {
        setSavedSendingUnit(response.data);
      }
    }

    fetchData();
  }, []);

  const _handle_delete_scope = async (id) => {
    setLoaderTable(true);
    let response = await authhttp.delete(
      `/api/v1/logistic/shop-logistic-unit-constraint/${id}/`
    );

    if (response.status == 204) {
      let helpArray = SavedSendingUnit.filter((el) => el.id !== id);
      setSavedSendingUnit(helpArray);
      setLoaderTable(false);
    } else {
      setLoaderTable(false);
    }
  };
  const _handel_click_on_scope = (id) => {
    setWichIdScope(id);
    changePage();
  };

  return (
    <>
      {loaderTable && <LoadingAllPage title="در حال حذف" />}

      <table
        style={{ overflow: "hidden", borderRadius: "10px" }}
        className="table"
      >
        <thead>
          <tr className={st.header}>
            <th
              style={{
                overflow: "hidden",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
              scope="col"
            >
              عنوان
            </th>
            <th scope="col">محدوده</th>
            <th scope="col">محصولات</th>
            <th
              style={{
                overflow: "hidden",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              scope="col"
            >
              وضعیت
            </th>
          </tr>
        </thead>
        <tbody style={{ borderTop: "none" }}>
          {SavedSendingUnit.map((el, index) => (
            <tr key={index}>
              <th
                onClick={() => _handel_click_on_scope(el.id)}
                className={st.nameTable}
                scope="row"
              >
                {_asist.PSeparator(el.title)}
              </th>
              <td>{_asist.PSeparator(el.cities_count)} شهر</td>
              <td>{_asist.PSeparator(el.products_count)} محصول</td>
              <td>
                <div className={st.status}>
                  <div style={{ marginBottom: "10px" }}>
                    <SBSendUnit
                      isActive={el.is_active}
                      shop_logistic_unit={el.shop_logistic_unit}
                      id={el.id}
                    />
                  </div>
                  <i
                    onClick={() => _handle_delete_scope(el.id)}
                    className="fas fa-times-circle"
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tabel;
