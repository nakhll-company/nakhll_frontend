import { useEffect, useState } from "react";

import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import st from "./tabel.module.scss";
import Assistent from "zaravand-assistent-number";
const _asist = new Assistent();

function Tabel({ changePage, setWichIdScope }) {
  // state for Saved Sending Unit
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/logistic/shop-logistic-unit-constraint/`,
        true,
        ""
      );

      if (response.status == 200) {
        setSavedSendingUnit(response.data);
        console.log(`response.data`, response.data);
      }
    }

    fetchData();
  }, []);

  const _handle_delete_scope = async (id) => {
    let response = await ApiRegister().apiRequest(
      null,
      "DELETE",
      `/api/v1/logistic/shop-logistic-unit-constraint/${id}/`,
      true,
      ""
    );

    console.log(`response`, response);

    // if (response.status == 200) {
    //   setSavedSendingUnit(response.data);
    //   console.log(`response.data`, response.data);
    // }
  };
  const _handel_click_on_scope = (id) => {
    setWichIdScope(id);
    changePage();
  };

  return (
    <>
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
