// node libraries
import Link from "next/link";
import { useRouter } from "next/router";

// components
import MobileHeader from "../../components/mobileHeader";
import CustomLabel from "../../components/custom/customLabel";
import CustomSwitch from "../../components/custom/customSwitch";
// methods
import { deleteItemListLanding } from "./methods/deleteItemListLanding";
import { activeListItemLanding } from "./methods/activeListItemLanding";
import { deActiveListItemLanding } from "./methods/deActiveListItemLanding";
// scss
import styles from "./scss/mobileLanding.module.scss";
import { authhttp } from "../../services/callApi/api";

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
              const response = await authhttp.post(
                `/api/v1/shop/landings/${activeHojreh}/`,
                {
                  name: "صفحه بدون نام",
                  page_data: "",
                  shop: activeHojreh,
                }
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
                        value={index + 1}
                        label="شماره"
                      />
                      <CustomSwitch
                        checked={value.status === "active" ? true : false}
                        onChange={() => {}}
                        id="active"
                      />
                    </div>
                    <CustomLabel type="normal" value={value.name} label="نام" />
                    <CustomLabel
                      type="normal"
                      value={value.created_at}
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
                      <Link
                        href={`/liveEdit/preview/${activeHojreh}/${value.id}`}
                      >
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
