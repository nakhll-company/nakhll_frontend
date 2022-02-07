// node libraries
import Link from "next/link";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";
// components
import MobileHeader from "../../components/mobileHeader";
import CustomLabel from "../../components/custom/customLabel";
import CustomSwitch from "../../components/custom/customSwitch";
// methods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { deleteItemListLanding } from "./methods/deleteItemListLanding";
import { activeListItemLanding } from "./methods/activeListItemLanding";
import { deActiveListItemLanding } from "./methods/deActiveListItemLanding";
// scss
import styles from "./scss/mobileLanding.module.scss";

const _asist = new Assistent();

const MobileLanding = ({ landingList, activeHojreh, setLandingList }) => {
  const router = useRouter();
  return (
    <div>
      <MobileHeader type="back" title="فرودها" />
      <div className={styles.wrapper_cart}>
        <div className={styles.wrapper_links}>
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
                `/api/v1/shop_landing/${activeHojreh}/`,
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
        {landingList && landingList.length > 0 ? (
          landingList.map((value, index) => {
            return (
              <Link href={`/liveEdit/${activeHojreh}/${value.id}`} key={index}>
                <a>
                  <div className={styles.cart_item}>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => {
                        value.status === "inactive" &&
                          activeListItemLanding(value.id, activeHojreh, router);
                        value.status === "active" &&
                          deActiveListItemLanding(
                            value.id,
                            activeHojreh,
                            router
                          );
                      }}
                    >
                      <CustomLabel
                        type="normal"
                        value={_asist.number(index + 1)}
                        label="شماره"
                      />
                      <CustomSwitch
                        defaultChecked={
                          value.status === "active" ? true : false
                        }
                        id="active"
                      />
                    </div>
                    <CustomLabel type="normal" value={value.name} label="نام" />
                    <CustomLabel
                      type="normal"
                      value={_asist.number(value.created_at)}
                      label="تاریخ ثبت"
                    />
                    <div className="d-flex justify-content-end align-items-center">
                      <Link href={`/liveEdit/${activeHojreh}/${value.id}`}>
                        <a>
                          <i
                            style={{ fontSize: "18px" }}
                            className="fas fa-edit"
                          ></i>
                        </a>
                      </Link>
                      <Link href={`/showLanding/${activeHojreh}/${value.id}`}>
                        <a>
                          <i
                            style={{ fontSize: "18px" }}
                            className="fas fa-eye mx-3"
                          ></i>
                        </a>
                      </Link>
                      <i
                        style={{ fontSize: "18px" }}
                        className="far fa-trash-alt"
                        onClick={() => {
                          deleteItemListLanding(
                            value.id,
                            activeHojreh,
                            setLandingList
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })
        ) : (
          <tr>
            <td colSpan="7">داده ای موجود نیست</td>
          </tr>
        )}
      </div>
    </div>
  );
};
// export
export default MobileLanding;
