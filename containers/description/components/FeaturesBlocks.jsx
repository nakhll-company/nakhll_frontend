import React from "react";
import Image from "next/image";
function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">بازار نخل</h2>
            <p className="text-xl text-gray-600">
              ویژگی های بازار نخل که بهتره باهاشون آشنا بشید.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/72.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                تسویه حساب در ۷۲ ساعت
              </h4>
              <p className="text-gray-600 text-center">
                ۷۲ ساعت بعد از ارسال مبلغ خود را دریافت نمایید.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/ertebat.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                ارتباط مستقیم
              </h4>
              <p className="text-gray-600 text-center">
                ما هیچ مانعی نیستیم .تنها ارتباط مستقیم دارید با مشتری
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/shop.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                فروشگاه اختصاصی
              </h4>
              <p className="text-gray-600 text-center">
                کلی ابزار باحال و آسان هست برای اینکه فروشگاه شیک خودتو بزنی.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/shafafiyat.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                شفافیت بالا
              </h4>
              <p className="text-gray-600 text-center">
                شفافیت در حد آب زلال اونقدر که حتی باورت نشه.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/pay.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                امنتیرین مسیر پرداخت
              </h4>
              <p className="text-gray-600 text-center">
                تمام گواهی ها را گرفتیم تا با خیال اسوده بفروشید.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-32 p-1  mb-1 block ">
                <Image
                  src="/image/description/edu.svg"
                  layout="responsive"
                  width={100}
                  height={200}
                />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                آموزش همیشگی
              </h4>
              <p className="text-gray-600 text-center">
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
