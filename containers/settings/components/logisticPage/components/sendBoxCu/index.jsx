import Image from "next/image";
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import Assistent from "zaravand-assistent-number";
import st from "./sendBoxCu.module.scss";
const _asist = new Assistent();
function SendBoxCu({ data }) {
  return (
    <>
      <div className={st.wraper}>
        <div className={st.card}>
          <div className={st.card_right}>
            <div className={st.card_right_top}>
              <span>{_asist.PSeparator(_asist.PSeparator(data?.title))}</span>
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

                  <span>{_asist.PSeparator(data?.products_count)} محصول</span>
                </div>
                <div className={st.info_line}>
                  <Image
                    layout="fixed"
                    src="/icons/settings/cities.svg"
                    width={20}
                    height={20}
                    alt="icon-1"
                  />
                  <span>{_asist.PSeparator(data?.cities_count)} شهر</span>
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
