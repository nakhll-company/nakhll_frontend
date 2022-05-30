// node libraries
import React from "react";
import Image from "next/image";
// components
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
// methods
import {diviedNumber} from "../../../../../../utils/diviedNumber";
// style
import st from "./sendBoxCu.module.scss";

function SendBoxCu({ data }) {
  return (
    <>
      <div className={st.wraper}>
        <div className={st.card}>
          <div className={st.card_right}>
            <div className={st.card_right_top}>
              <span>{diviedNumber(data?.title)}</span>
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

                  <span>{diviedNumber(data?.products_count)} محصول</span>
                </div>
                <div className={st.info_line}>
                  <Image
                    layout="fixed"
                    src="/icons/settings/cities.svg"
                    width={20}
                    height={20}
                    alt="icon-1"
                  />
                  <span>{diviedNumber(data?.cities_count)} شهر</span>
                </div>
              </div>
            </div>
          </div>
          <div className={st.card_left}>
            <div className={st.wrapper_icons}>
              <div>
                <SBSendUnit
                  isActive={data?.is_active}
                  shop_logistic_unit={data?.shop_logistic_unit}
                  id={data?.id}
                />
              </div>
              {/* <i
                  onClick={() => _handle_delete_scope(el.id)}
                  className="fas fa-times-circle"
                ></i> */}
              <div className="">
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
    </>
  );
}

export default SendBoxCu;
