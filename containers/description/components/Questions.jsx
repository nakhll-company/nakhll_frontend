function Questions() {
  return (
    <>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500">
          سوالات متداول
        </h1>
        <div className="border-l-2 mt-10">
          {/* <!-- Card 1 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-xl font-bold">
                چه کسی می‌تواند در نخل حجره‌دار شود؟
              </h1>
              <h3 className="mt-3 font-bold">
                صاحبان کسب‌و‌کارهای در حال رشد در سراسر ایران می‌توانند بدون
                پرداخت هزینه، در بازار آنلاین نخل حجره ایجاد کنند و کسب‌و‌کار
                خود را توسعه دهند.
              </h3>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-xl font-bold">کارمزد نخل چند درصد است؟</h1>
              <h3 className="mt-3 font-bold">
                کارمزد نخل از هر تراکنش ۳ الی ۷ درصد است
              </h3>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-xl font-bold">
                تسویه حساب نخل با حجره‌داران چگونه است؟
              </h1>
              <h3 className="mt-3 font-bold">
                ‌پس از خرید از نخل و واریز پول توسط مشتری، سامانه شاپرک بعد از
                ۲۴ ساعت پول واریزی مشتری را به حساب نخل واریز می‌کند و مراحل
                پشتیبانی نخل شامل موارد ذیل است: ۱. پیگیری ارسال کالا توسط
                فروشنده ۲. پیگیری تحویل کالا و میزان رضایت خریدار ۳. واریز مبلغ
                دریافتی با کسر کارمزد نخل به حساب فروشنده نکته: در صورتی که
                حجره‌دار قرارداد تعهد ارسال را به امضا برساند، دریافت وجوه
                واریزی مشتری کمتر از ۷۲ ساعت به طول خواهد انجامید. نکته: اگر
                دسترسی به خریدار مقدور نباشد، طبق قانون تجارت الکترونیک، وجه
                واریزی بعد از گذشت ۷ روز به حساب فروشنده واریز خواهد شد.
              </h3>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-xl font-bold">
                ارسال سفارش به چه طریقی انجام می‌شود؟
              </h1>
              <h3 className="mt-3 font-bold">
                پس از اتمام فرآیند خرید مشتری، حجره‌دار سفارش را بسته‌بندی و از
                طریق پست ارسال می‌کند. تمامی مراحل ارسال توسط پنل مدیریت
                حجره‌دار اطلاع‌رسانی می‌گردد که توسط مشتری قابل مشاهده است.
                ضمناً هزینه ارسال نیز در هنگام تسویه حساب به حجره‌دار واریز
                می‌گردد.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
