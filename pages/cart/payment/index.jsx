import Head from "next/head";

import ShopLayout from "../../../components/shopLayout";

export default function Cart() {
    return (
        <div className="steps-wrapper mb-6">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                />
            </Head>

            <div className="col-12 col-lg-5 px-0 mb-3">
                <div className="box box-sm bg-white" style={{ minHeight: "14rem" }}>
                    <div className="cart-head d-flex align-items-center py-3 px-3 text-right mb-0 bg-gray-100" style={{ borderRadius: "5px 5px 0px 0px" }}>
                        <a className="font-size-8 text-muted" style={{ flexBasis: "43.33%" }}>
                            <i class="bi fas fa-arrow-right" style={{ marginLeft: "10px" }}></i>
                            بازگشت
                        </a>
                        <h2 className="font-weight-bold font-size-lg m-0"> پرداخت </h2>
                    </div>
                    <div className="steps-body">
                        <div>
                            <h3 class="font-size1 text-dark">کد تخفیف</h3>
                            <form class="input-group input-group--box">
                                <input type="text" name="coupon-code" placeholder="اگر کد تخفیف دارید، وارد کنید" class="form-control" />
                                <div class="input-group-append"><button class="btn btn-success rounded-pill px-3">بررسی</button>
                                </div> <div class="input-group-bg rounded-pill"></div>
                            </form>
                        </div>

                        <div className="mt-3">
                            <div className="use-credit-box">
                                <div className="toggle-btn">
                                    <label data-v-25adc6c0 className="vue-js-switch">
                                        <input data-v-25adc6c0 type="checkbox" className="v-switch-input" style={{ opacity: 0, position: "absolute", width: "1px", height: "1px" }} />
                                        <div
                                            data-v-25adc6c0
                                            className="v-switch-core"
                                            style={{
                                                width: 45,
                                                height: 25,
                                                backgroundColor: "rgb(191, 203, 217)",
                                                borderRadius: 13
                                            }}
                                        >
                                            <div
                                                data-v-25adc6c0
                                                className="v-switch-button"
                                                style={{
                                                    width: 19,
                                                    height: 19,
                                                    transition: "transform 300ms ease 0s",
                                                    transform: "translate3d(3px, 3px, 0px)",
                                                    background: "rgb(255, 255, 255)"
                                                }}
                                            />
                                        </div>
                                        {/**/}
                                    </label>
                                    <span className="toggle-btn-text pointer">استفاده از اعتبار</span>
                                </div>
                                <span className="text-success mr-auto">اعتبار شما 11,000 تومان</span>
                            </div>
                        </div>

                        <h3 class="font-size1 text-dark mt-3">فاکتور سفارش</h3>

                        <div className="mt-3 position-relative">
                            {/**/}
                            <div className="font-size-sm border-bottom pb-3 mt-3">
                                <div className="title font-weight-500">از غرفه پسته خندان</div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar avatar-square">
                                        <a href="/pestehkerman/product/175903" className>
                                            <img
                                                src="https://statics.basalam.com/public/users/j2ggy/1911/n41s9awDlcLoiKAF6oWQwo3MopX4cnDJzZHgE3Do.jpeg_256X256X70.jpeg"
                                                alt="پسته فندقی خام تازه و امسالی کرمان (250گرمی)"
                                            />
                                        </a>
                                    </div>
                                    <div className="mr-3" style={{ minWidth: "1%" }}>
                                        <a href="/pestehkerman/product/175903" className="link-body">
                                            پسته فندقی خام تازه و امسالی کرمان (250گرمی)
                                        </a>
                                        <div className="mt-2">1 عدد</div>
                                    </div>
                                    <div className="mr-auto">75,000 تومان</div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar avatar-square">
                                        <a href="/pestehkerman/product/175905" className>
                                            <img
                                                src="https://statics.basalam.com/public/users/j2ggy/1911/9eAmvLJvRqGiTkECMFyKyCDMWf5MYdaMNfglHT0f.jpeg_256X256X70.jpeg"
                                                alt="پسته فندقی خام تازه و امسالی کرمان ارسال رایگان(500 گرم)"
                                            />
                                        </a>
                                    </div>
                                    <div className="mr-3" style={{ minWidth: "1%" }}>
                                        <a href="/pestehkerman/product/175905" className="link-body">
                                            پسته فندقی خام تازه و امسالی کرمان ارسال رایگان(500 گرم)
                                        </a>
                                        <div className="mt-2">2 عدد</div>
                                    </div>
                                    <div className="mr-auto">230,000 تومان</div>
                                </div>
                            </div>
                            <div className="font-size-sm border-bottom pb-3 mt-3">
                                <div className="title font-weight-500">
                                    از غرفه محصولات علمی و فرهنگی و طبیعی
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar avatar-square">
                                        <a href="/ali_goharrizi/product/746256" className>
                                            <img
                                                src="https://statics.basalam.com/public/users/13no0/2011/lW23nVJv4TiBsDxfJEKruxOpDVze1bTQSAHtqjHg.jpeg_256X256X70.jpeg"
                                                alt="قاووت خانگی اصیل 40 گیاه"
                                            />
                                        </a>
                                    </div>
                                    <div className="mr-3" style={{ minWidth: "1%" }}>
                                        <a href="/ali_goharrizi/product/746256" className="link-body">
                                            قاووت خانگی اصیل 40 گیاه
                                        </a>
                                        <div className="mt-2">2 عدد</div>
                                    </div>
                                    <div className="mr-auto">48,000 تومان</div>
                                </div>
                            </div>
                            <div className="font-size-sm border-bottom py-3">
                                <div className="d-flex py-1">
                                    <span>جمع بهای سفارش:</span>
                                    <span className="mr-auto">353,000 تومان</span>
                                </div>
                                <div className="d-flex py-1">
                                    <span>هزینه ارسال:</span> <span className="mr-auto">20,000 تومان</span>
                                </div>
                                {/**/} {/**/} {/**/}
                                <div className="d-flex py-1 font-weight-500 text-success">
                                    <span>مبلغ قابل پرداخت:</span>
                                    <span className="mr-auto">373,000 تومان</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 p-3 border rounded font-size-sm my-3 line-height-normal">
                            <div className="mx-auto text-justify">
                                تمامی بسته‌های پستی به آقا/خانم
                                <strong>سید حسن مهدوی</strong>
                                به آدرس
                                <strong className="font-size-8">
                                    خیابان فردوس - کوچه فردوس 1 - پلاک 87 - کد پستی 7761615759
                                </strong>
                                تحویل داده می‌شوند.
                            </div>
                            <div className="text-left line-height-1">
                                <a
                                    href="/cart/address/84906/edit?prev=payment"
                                    className="font-size-8 link-body"
                                >
                                    ویرایش
                                </a>
                            </div>
                            <div className="toggle-btn mt-2">
                                <label data-v-25adc6c0 className="vue-js-switch toggled">
                                    <input data-v-25adc6c0 type="checkbox" className="v-switch-input" style={{ opacity: 0, position: "absolute", width: "1px", height: "1px" }} />
                                    <div
                                        data-v-25adc6c0
                                        className="v-switch-core"
                                        style={{
                                            width: 45,
                                            height: 25,
                                            backgroundColor: "rgb(0, 96, 96)",
                                            borderRadius: 13
                                        }}
                                    >
                                        <div
                                            data-v-25adc6c0
                                            className="v-switch-button"
                                            style={{
                                                width: 19,
                                                height: 19,
                                                transition: "transform 300ms ease 0s",
                                                transform: "translate3d(23px, 3px, 0px)",
                                                background: "rgb(255, 255, 255)"
                                            }}
                                        />
                                    </div>
                                    {/**/}
                                </label>
                                <span className="toggle-btn-text pointer">
                                    ارسال شماره من به غرفه دار
                                    <div className="text-secondary font-size-9 d-block d-lg-inline-block mr-lg-2">
                                        (برای هماهنگی دریافت سفارش)
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className="d-none d-md-flex justify-content-between mt-4">
                            <span className="font-size1 text-success font-weight-bold">
                                مبلغ قابل‌پرداخت:
                            </span>
                            <span className="text-success font-size1">
                                <strong className="payableAmount splitNumber font-size1-2">373,000</strong>
                                تومان
                            </span>
                        </div>

                        <div className="mt-3">
                            <div className="d-md-none mb-2 font-size-sm text-success d-flex">
                                <span className="font-weight-bold">مبلغ قابل‌پرداخت:</span>
                                <strong className="mr-auto ml-1">373,000</strong>
                                تومان
                            </div>
                            <button className="btn btn-success cart-button w-100 d-flex justify-content-between align-items-center px-4">
                                <span className="d-inline-block w-100 text-center font-size1">
                                    پرداخت آنلاین
                                </span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

Cart.Layout = ShopLayout;