// node libraries
import Link from "next/link";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";
// component
import CustomSwitch from "../../components/custom/customSwitch";
// methods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { deleteItemListLanding } from "./methods/deleteItemListLanding";
import { activeListItemLanding } from "./methods/activeListItemLanding";
import { deActiveListItemLanding } from "./methods/deActiveListItemLanding";
// scss
import styles from "./scss/desktopLanding.module.scss";

const _asist = new Assistent();

const DesktopLanding = ({ landingList, activeHojreh, setLandingList }) => {

  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>فرودها</h1>
        <span
          className={styles.link_add}
          onClick={async () => {
            let response = await ApiRegister().apiRequest(
              {
                name: "صفحه بدون نام",
                page_data: "",
                shop: activeHojreh,
              },
              "post",
              `/api/v1/shop/landing/${activeHojreh}/`,
              true,
              ""
            );
            if (response.status === 201) {
              router.push(`/liveEdit/${activeHojreh}/${response.data.id}`);
            }
          }}
        >
          <i className="fa fa-plus ms-2"></i>
          افزودن فرود
        </span>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>تاریخ ثبت</th>
            <th>وضعیت</th>
            <th>ویرایش</th>
            <th>پیش نمایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {landingList && landingList.length > 0 ? (
            landingList.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{_asist.number(index + 1)}</td>
                  <td>{value.name}</td>
                  <td>{_asist.number(value.created_at)}</td>
                  <td className="d-flex justify-content-center pb-3">
                    <CustomSwitch
                      // defaultChecked={value.status === "active" ? true : false}
                      checked={value.status === "active" ? true : false}
                      onClick={() => {
                        value.status === "inactive" &&
                          activeListItemLanding(
                            value.id,
                            activeHojreh,
                            router,
                            setLandingList
                          );
                        value.status === "active" &&
                          deActiveListItemLanding(
                            value.id,
                            activeHojreh,
                            router
                          );
                      }}
                      onChange={() => { }}
                      id={value.id}
                    />
                  </td>
                  <td>
                    <Link href={`/liveEdit/${activeHojreh}/${value.id}`}>
                      <a>
                        <i
                          style={{ fontSize: "18px" }}
                          className="fas fa-edit"
                        ></i>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/liveEdit/preview/${activeHojreh}/${value.id}`}>
                      <a>
                        <i className="fas fa-eye"></i>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        deleteItemListLanding(
                          value.id,
                          activeHojreh,
                          setLandingList
                        );
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7">داده ای موجود نیست</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
// export
export default DesktopLanding;
