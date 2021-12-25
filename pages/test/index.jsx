import st from "./test.module.scss";
import Image from "next/image";

function Card() {
  return (
    <>
      <div className="container p-4">
        <div className={st.wraper}>
          <div className={st.card}>
            <div className={st.card_right}>
              <div className={st.card_right_top}>محدوده اول</div>

              <div className={st.card_right_btm}>
                {/* icons */}
                <div className="">
                    <Image
                      layout="responsive"
                      src="/icons/settings/ExpressPost.svg"
                      width={30}
                      height={30}
                      alt="icon-1"
                    />
                </div>
                <div className="">
                    <Image
                      layout="responsive"
                      src="/icons/settings/cities.svg"
                      width={30}
                      height={30}
                      alt="icon-1"
                    />
                    <Image
                      layout="responsive"
                      src="/icons/settings/products.svg"
                      width={30}
                      height={30}
                      alt="icon-1"
                    />
                </div>
              </div>
            </div>
            <div className={st.card_left}>Left</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
