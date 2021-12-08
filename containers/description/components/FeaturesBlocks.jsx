import React from "react";
import styles from "./FeaturesBlocks.module.scss";
import Image from "next/image";
function FeaturesBlocks() {
  return (
    <section className={styles.wrapper}>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className={styles.background} aria-hidden="true"></div>
      {/* // styles */}
      <div className={styles.liner}></div>

      <div className={styles.items}>
        <div className={styles.paterns}>
          {/* Section header */}
          <div className={styles.header}>
            <h2 className="h-2 mb-4">بازار نخل</h2>
            <p className={styles.subtitle}>
              ویژگی های بازار نخل که بهتره باهاشون آشنا بشید.
            </p>
          </div>

          {/* Items */}
          <div className={styles.items_features}>
            {/* 1st item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/72.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>تسویه حساب در ۷۲ ساعت</h4>
              <p className={styles.sub_text_feature}>
                ۷۲ ساعت بعد از ارسال مبلغ خود را دریافت نمایید.
              </p>
            </div>

            {/* 2nd item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/ertebat.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>ارتباط مستقیم</h4>
              <p className={styles.sub_text_feature}>
                ما هیچ مانعی نیستیم .تنها ارتباط مستقیم دارید با مشتری
              </p>
            </div>

            {/* 3rd item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/shop.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>فروشگاه اختصاصی</h4>
              <p className={styles.sub_text_feature}>
                کلی ابزار باحال و آسان هست برای اینکه فروشگاه شیک خودتو بزنی.
              </p>
            </div>

            {/* 4th item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/shafafiyat.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>شفافیت بالا</h4>
              <p className={styles.sub_text_feature}>
                شفافیت در حد آب زلال اونقدر که حتی باورت نشه.
              </p>
            </div>

            {/* 5th item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/pay.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>امنتیرین مسیر پرداخت</h4>
              <p className={styles.sub_text_feature}>
                تمام گواهی ها را گرفتیم تا با خیال اسوده بفروشید.
              </p>
            </div>

            {/* 6th item */}
            <div className={styles.parent_certain_item}>
              <div className={styles.icon}>
                <Image
                  src="/image/description/edu.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className={styles.text_feature}>آموزش همیشگی</h4>
              <p className={styles.sub_text_feature}>
                در طول مسیر کلی آموزش عالی براتون در نظر گرفتیم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
