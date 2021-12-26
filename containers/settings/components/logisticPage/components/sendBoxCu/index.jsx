import Image from "next/image";
import SBSendUnit from "../sendUnit/switchButtonSendUnit";
import st from "./sendBoxCu.module.scss";

function SendBoxCu({ title }) {
  return (
    <>
      <div className={st.wraper}>
        <div className={st.card}>
          <div className={st.card_right}>
            <div className={st.card_right_top}>
              <span>{title}</span>
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

                  <span>۵۵ محصول</span>
                </div>
                <div className={st.info_line}>
                  <Image
                    layout="fixed"
                    src="/icons/settings/cities.svg"
                    width={20}
                    height={20}
                    alt="icon-1"
                  />
                  <span>۱۲ شهر</span>
                </div>
              </div>
            </div>
          </div>
          <div className={st.card_left}>
            <div className={st.wrapper_icons}>
              <div>
                <SBSendUnit isActive={true} shop_logistic_unit={10} id={11} />
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
