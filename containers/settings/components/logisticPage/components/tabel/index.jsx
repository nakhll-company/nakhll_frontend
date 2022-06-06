// node libraries
import React from "react";
import { useEffect, useState } from "react";
// components
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import LoadingAllPage from "../../../../../../components/loadingAllPage";
// methods
import { authhttp } from "../../../../../../services/callApi/api";
import {diviedNumber} from "../../../../../../utils/diviedNumber";
// style
import st from "./tabel.module.scss";

function Tabel({ changePage, setWichIdScope }) {
  
  const [loaderTable, setLoaderTable] = useState(false);
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await authhttp.get(
        `/api/v1/logistic/shop-logistic-unit-constraint/`,
        { id: 10 }
      );

      if (response.status == 200) {
        setSavedSendingUnit(response.data);
      }
    }

    fetchData();
  }, []);

  const handleDeleteScope = async (id) => {
    setLoaderTable(true);
    const response = await authhttp.delete(
      `/api/v1/logistic/shop-logistic-unit-constraint/${id}/`
    );

    if (response.status == 204) {
      const helpArray = SavedSendingUnit.filter((el) => el.id !== id);
      setSavedSendingUnit(helpArray);
      setLoaderTable(false);
    } else {
      setLoaderTable(false);
    }
  };
  const handelClickOnScope = (id) => {
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
                onClick={() => handelClickOnScope(el.id)}
                className={st.nameTable}
                scope="row"
              >
                {diviedNumber(el.title)}
              </th>
              <td>{diviedNumber(el.cities_count)} شهر</td>
              <td>{diviedNumber(el.products_count)} محصول</td>
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
                    onClick={() => handleDeleteScope(el.id)}
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
