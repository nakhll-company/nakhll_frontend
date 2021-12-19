import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import st from "./tabel.module.scss";

function Tabel() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/logistic/shop-logistic-unit-constraint/`,
        true,
        ""
      );
      console.log(`response`, response);

      if (response.status == 200) {
      }
    }

    fetchData();
  }, []);
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
          {[1, 1, 1, 1, 1].map((e, index) => (
            <tr key={index}>
              <th scope="row">اول</th>
              <td>۱۲ شهر</td>
              <td>۵۵ محصول</td>
              <td>
                <div className={st.status}>
                  <div style={{ marginBottom: "10px" }}>
                    <SBSendUnit id={`switch_${index}_`} />
                  </div>
                  <i className="fas fa-times-circle"></i>
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
