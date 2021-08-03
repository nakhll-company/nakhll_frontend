import React from "react";

// Sasss
import styles from "../../../styles/pages/order/orderdetail.module.scss";

export default function OrderDetailMobile({ data }) {
  return (
    <div className={styles.wrapper}>
      {/* وضعیت سفارش */}

      <div className={styles.order_status}>
        <h1 className={styles.header}>وضعیت سفارش</h1>
        <hr />
        <div className={styles.content}>
          <h3 style={{ paddingTop: "20px", textAlign: "center" }}>
            وضعیت سفارش
          </h3>
          <div className={styles.title_status_pat}>
            <div className={styles.title_status}>
              <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                {data.order_status === "2" && "در انتظار تحویل به پست"}
                {data.order_status === "3" && btnOk && "در انتظار تایید"}
                {data.order_status === "3" &&
                  !btnOk &&
                  "در انتظار تحویل به پست"}

                {data.order_status === "5" && "سفارش ارسال شده است"}
              </h3>
            </div>
          </div>
          <div className={styles.order_status_all}>
            {/* تایید سفارش */}

            <div className={styles.order_status_oneLevel}>
              {/* منتظر بررسی */}
              {data.order_status === "3" && btnOk && (
                <div className={styles.place_icon_two}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-clipboard-check "
                  ></span>
                </div>
              )}
              {data.order_status === "3" && !btnOk && (
                <div className={styles.place_icon_three}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-clipboard-check "
                  ></span>
                </div>
              )}
              {/* سفارش در حال اماده سازی */}
              {data.order_status === "2" && (
                <div className={styles.place_icon_three}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-clipboard-check "
                  ></span>
                </div>
              )}
              {/* سفارش ارسال شده است */}
              {data.order_status === "5" && (
                <div className={styles.place_icon_three}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-clipboard-check "
                  ></span>
                </div>
              )}

              <div
                className={styles.order_status_right_icon}
                style={{ marginRight: "20px" }}
              >
                {" "}
                <h4>تایید سفارش</h4>
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "20px",
                border: "1px solid #E0E6E9",
                marginTop: "8px",
                marginBottom: "8px",
                marginRight: "20px",
              }}
            ></div>

            {/* تحویل مرسوله به پست */}

            <div className={styles.order_status_oneLevel}>
              {data.order_status === "2" && (
                <div className={styles.place_icon}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-truck "
                  ></span>
                </div>
              )}
              {data.order_status === "3" && btnOk && (
                <div className={styles.place_icon}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-truck "
                  ></span>
                </div>
              )}
              {data.order_status === "3" && !btnOk && (
                <div className={styles.place_icon_two}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-truck "
                  ></span>
                </div>
              )}
              {data.order_status === "5" && (
                <div className={styles.place_icon_three}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-truck "
                  ></span>
                </div>
              )}
              <div
                className={styles.order_status_right_icon}
                style={{ marginRight: "20px" }}
              >
                {" "}
                <h4>تحویل مرسوله به پست</h4>
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "20px",
                border: "1px solid #E0E6E9",
                marginTop: "8px",
                marginBottom: "8px",
                marginRight: "20px",
              }}
            ></div>

            {/* تایید مشتری */}

            <div className={styles.order_status_oneLevel}>
              {data.order_status === "0" ? (
                <div className={styles.place_icon}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-box"
                  ></span>
                </div>
              ) : (
                <div className={styles.place_icon}>
                  <span
                    style={{ fontSize: "20px", color: "#fff" }}
                    className="fas fa-box"
                  ></span>
                </div>
              )}
              <div
                className={styles.order_status_right_icon}
                style={{ marginRight: "20px" }}
              >
                {" "}
                <h4>تایید مشتری</h4>
              </div>
            </div>
          </div>

          {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@‌  Buttons  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

          {/*  منتظر بررسی */}
          {data.order_status === "3" && btnOk && (
            <div className={styles.order_status_button}>
              <button
                onClick={() => {
                  confirmedFactor();
                }}
                className={`${styles.btn} ${styles.btnSubmit}`}
              >
                <h3>تایید</h3>
              </button>
              <button className={`${styles.btn} ${styles.btnProblem}`}>
                <h3>ثبت مشکل</h3>
              </button>
            </div>
          )}

          {data.order_status === "3" && !btnOk && (
            <>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  codeRahgiri: "",
                }}
                validationSchema={VALIDATION_SCHEMA}
                onSubmit={async (data) => {
                  setshowMessage(0);
                  setIsLoading(true);
                  const sendData = {
                    barcode: data.codeRahgiri,
                  };
                  const _handleRequestApi = async (id) => {
                    try {
                      let params = {};
                      let loadData = sendData;
                      let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                      let response = await ApiRegister().apiRequest(
                        loadData,
                        "POST",
                        dataUrl,
                        true,
                        params
                      );
                      // setconfigOrder(response);
                      // setisShow(true);
                      // setbtnOk(!btnOk);

                      // if (response.details === "Done") {
                      //   setconfigOrder(true);
                      // }

                      if (response.status === 200) {
                        setshowMessage(1);
                        setIsLoading(false);
                      }
                    } catch (err) {
                      setshowMessage(2);
                      setIsLoading(false);
                    }
                  };
                  _handleRequestApi(id);
                }}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <div className={styles.ButtonsGrid}>
                      <div className={styles.order_status_code}>
                        <Field
                          className={styles.btn_code}
                          type="input"
                          name="codeRahgiri"
                          placeholder="کد رهگیری مرسوله"
                        />
                      </div>
                      <div>
                        {" "}
                        {touched.codeRahgiri && errors.codeRahgiri ? (
                          <small className={styles.error}>
                            {errors.codeRahgiri}
                          </small>
                        ) : null}
                        {IsLoading && (
                          <div
                            style={{
                              marginTop: "15px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div className={styles.loader}>
                              <Image
                                src="/image/LOGO_500.png"
                                alt="Picture of the author"
                                width={50}
                                height={50}
                              />
                            </div>
                            <h3
                              className={styles.nameLoding}
                              style={{
                                fontSize: "15px",
                                color: "hsl(211deg 100% 50%)",
                              }}
                            >
                              {" "}
                              در حال ثبت ...
                            </h3>
                          </div>
                        )}
                        {showMessage == 1 && (
                          <div>
                            <h3
                              style={{
                                fontSize: "14px",
                                marginTop: "15px",
                                color: "green",
                              }}
                            >
                              به روز رسانی با موفقیت انجام شد.
                            </h3>
                          </div>
                        )}
                        {showMessage == 2 && (
                          <div>
                            <h3
                              style={{
                                marginTop: "15px",
                                color: "red",
                              }}
                            >
                              عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری
                              دیگر اقدام کنید.
                            </h3>
                          </div>
                        )}
                      </div>
                      <div className={styles.order_statusDcod_button}>
                        <button
                          style={{ cursor: "pointer" }}
                          className={`${styles.btn} ${styles.btnSubmit}`}
                          type="submit"
                        >
                          <h3 style={{ fontSize: "12px" }}>ثبت کد رهگیری</h3>
                        </button>
                        <button
                          className={`${styles.btn} ${styles.btnProblem}`}
                        >
                          <h3 style={{ fontSize: "12px" }}>ثبت مشکل</h3>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {data.order_status === "5" && (
            <>
              <div className={styles.ButtonsGridDFinal}>
                <div className={styles.order_status_code}>
                  <input
                    disabled
                    className={styles.btn_code}
                    type="number"
                    placeholder="2521351888415132132"
                  />
                </div>
              </div>
            </>
          )}

          {/* سفارش در حال اماده سازی */}
          {data.order_status === "2" && (
            <>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  codeRahgiri: "",
                }}
                validationSchema={VALIDATION_SCHEMA}
                onSubmit={async (data) => {
                  const sendData = {
                    barcode: data.codeRahgiri,
                  };
                  const _handleRequestApi = async (id) => {
                    try {
                      let params = {};
                      let loadData = sendData;
                      let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
                      let response = await ApiRegister().apiRequest(
                        loadData,
                        "POST",
                        dataUrl,
                        true,
                        params
                      );

                      if (response.status === 200) {
                        setshowMessage(1);
                        setIsLoading(false);
                      }
                    } catch (err) {
                      setshowMessage(2);
                      setIsLoading(false);
                    }
                  };
                  _handleRequestApi(id);
                }}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <div className={styles.ButtonsGrid}>
                      <div className={styles.order_status_code}>
                        <Field
                          className={styles.btn_code}
                          type="input"
                          name="codeRahgiri"
                          placeholder="کد رهگیری مرسوله"
                        />
                      </div>
                      <div>
                        {" "}
                        {touched.codeRahgiri && errors.codeRahgiri ? (
                          <small className={styles.error}>
                            {errors.codeRahgiri}
                          </small>
                        ) : null}
                        {IsLoading && (
                          <div
                            style={{
                              marginTop: "15px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div className={styles.loader}>
                              <Image
                                src="/image/LOGO_500.png"
                                alt="Picture of the author"
                                width={50}
                                height={50}
                              />
                            </div>
                            <h3
                              className={styles.nameLoding}
                              style={{
                                fontSize: "15px",
                                color: "hsl(211deg 100% 50%)",
                              }}
                            >
                              {" "}
                              در حال بروزرسانی ...
                            </h3>
                          </div>
                        )}
                        {showMessage == 1 && (
                          <div>
                            <h3
                              style={{
                                marginTop: "15px",
                                color: "green",
                                fontSize: "14px",
                              }}
                            >
                              به روز رسانی با موفقیت انجام شد.
                            </h3>
                          </div>
                        )}
                        {showMessage == 2 && (
                          <div>
                            <h3
                              style={{
                                marginTop: "15px",
                                color: "red",
                              }}
                            >
                              عملیات به روز رسانی موفقیت آمیز نبود.لطفا باری
                              دیگر اقدام کنید.
                            </h3>
                          </div>
                        )}
                      </div>
                      <div className={styles.order_statusDcod_button}>
                        <button
                          style={{ cursor: "pointer" }}
                          className={`${styles.btn} ${styles.btnSubmit}`}
                          type="submit"
                        >
                          <h3 style={{ fontSize: "12px" }}>ثبت کد رهگیری</h3>
                        </button>
                        <button
                          className={`${styles.btn} ${styles.btnProblem}`}
                        >
                          <h3 style={{ fontSize: "12px" }}>ثبت مشکل</h3>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {/* سفارش تحویل داده شده است */}
          {data.order_status === "0"}

          {/* Buttons 2 */}
        </div>
      </div>

      {/* اطلاعات ارسال */}

      <div className={styles.post_information}>
        <h1 className={styles.header}>اطلاعات ارسال</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.post_information_content}>
            <h4>نام مشتری</h4>
            <h3 style={{ marginTop: "5px" }}>
              {`${data.profile.user.first_name}  ${data.profile.user.last_name}`}
            </h3>
          </div>
          {/* <div className={styles.post_information_content}>
      <h4>نام گیرنده</h4>
      <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
    </div> */}
          <div className={styles.post_information_content}>
            <h4>{data.profile.user.username}</h4>
            <h3 className={styles.post_information_h3}>09139939426</h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>آدرس</h4>
            <h3 className={styles.post_information_h3}>
              {`${data.state} | ${data.big_city}  | ${data.address}`}
            </h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>کد پستی</h4>
            <h3 className={styles.post_information_h3}>{data.zip_code}</h3>
          </div>
          {/* <div className={styles.post_information_content}>
      <h4>پلاک -واحد</h4>
      <h3 className={styles.post_information_h3}>23</h3>
    </div> */}
        </div>
      </div>

      {/* جزییات سفارش */}

      <div className={styles.post_details}>
        <h1 className={styles.header}> جزییات سفارش وارسال</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.post_details_content}>
            <h4>تاریخ ثبت سفارش</h4>
            <h4 style={{ direction: "ltr" }}>{data.jalali_order_date}</h4>
          </div>
          {/* <div className={styles.post_details_content}>
      <h4>مهلت ارسال کالا</h4>
      <h4>1400/04/22</h4>
    </div> */}
          <div className={styles.post_details_content}>
            <h4>روش ارسال</h4>
            <h4> پست پیشتاز</h4>
          </div>
          <div className={styles.post_details_content}>
            <h4>هزینه ارسال پرداخت شده</h4>
            <h4>
              {" "}
              {data.post_price} <span>هزار تومان</span>
            </h4>
          </div>
          {/* <div className={styles.post_details_content}>
      <h4>کد رهگیری</h4>
      <h4>029860006300331500076119</h4>
    </div> */}
        </div>
      </div>

      {/* کالاهای خریداری شده */}
      {true && (
        <div className={styles.purchased_good}>
          <h1 className={styles.header}>کالاهای خریداری شده</h1>
          <hr />

          {data.factor_post.map((e, index) => {
            return (
              <div key={index} className={styles.purchased_good_content}>
                <div className={styles.purchased_good_one}>
                  <Image
                    src={`${e.product.image_thumbnail_url}`}
                    width={45}
                    height={45}
                  />
                  <h3 style={{ marginRight: "15px" }}>{e.product.title}</h3>
                </div>
                <div
                  className={styles.purchased_good_two}
                  style={{ marginTop: "16px" }}
                >
                  <div style={{ display: "flex" }}>
                    <h4>قیمت :</h4>
                    <h4 style={{ color: "#364254" }}>
                      {e.product.price}{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div>
                    <h4 style={{ color: "#364254" }}>
                      {e.product_count} <span>عدد</span>
                    </h4>
                  </div>
                </div>
                {isOpen && (
                  <div className={styles.purchased_good_three}>
                    <div className={styles.good_three_content}>
                      <h4>مجموع هزینه محصول</h4>
                      <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                        {e.get_total_item_price}+{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div>
                    {/* <div className={styles.good_three_content}>
              <h4> هزینه ارسال</h4>
              <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                12.000+{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    <div
                      className={styles.good_three_content}
                      style={{ marginBottom: "30px" }}
                    >
                      <h4>تخفیف محصول</h4>
                      <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                        {e.product.discount}-{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div>
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>تخفیف ارسال</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                200,000-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>استرداد</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                0- <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>کارمزد</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                370,656-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                  </div>
                )}
                <div className={styles.good_four}>
                  <button
                    className={styles.btn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <h3>جزییات کمتر</h3>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "10px",
                            }}
                            className="fas fa-chevron-up"
                          ></span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <h3>جزییات بیشتر</h3>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "10px",
                            }}
                            className="fas fa-chevron-down"
                          ></span>
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {false && (
        <div className={styles.purchased_good}>
          <h1 className={styles.header}>کالاهای خریداری شده</h1>
          <hr />
          {data.factor_post.map((e, index) => {
            return (
              <div key={index} className={styles.purchased_good_content}>
                <div className={styles.purchased_good_one}>
                  <Image
                    src={`${e.product.image_thumbnail_url}`}
                    width={45}
                    height={45}
                  />
                  <h3 style={{ marginRight: "15px" }}>{e.product.title}</h3>
                </div>
                <div
                  className={styles.purchased_good_two}
                  style={{ marginTop: "16px" }}
                >
                  <div style={{ display: "flex" }}>
                    <h4>قیمت :</h4>
                    <h4 style={{ color: "#364254" }}>
                      {e.product.price}{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div>
                    <h4 style={{ color: "#364254" }}>
                      {e.product_count} <span>عدد</span>
                    </h4>
                  </div>
                </div>
                {isOpen && (
                  <div className={styles.purchased_good_three}>
                    <div className={styles.good_three_content}>
                      <h4>مجموع هزینه محصول</h4>
                      <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                        {e.get_total_item_price}+{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div>
                    {/* <div className={styles.good_three_content}>
              <h4> هزینه ارسال</h4>
              <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                12.000+{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    <div
                      className={styles.good_three_content}
                      style={{ marginBottom: "30px" }}
                    >
                      <h4>تخفیف محصول</h4>
                      <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                        {e.product.discount}-{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div>
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>تخفیف ارسال</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                200,000-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>استرداد</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                0- <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                    {/* <div
              className={styles.good_three_content}
              style={{ marginBottom: "30px" }}
            >
              <h4>کارمزد</h4>
              <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                370,656-{" "}
                <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div> */}
                  </div>
                )}
                <div className={styles.good_four}>
                  <button
                    className={styles.btn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <h3>جزییات کمتر</h3>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "10px",
                            }}
                            className="fas fa-chevron-up"
                          ></span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <h3>جزییات بیشتر</h3>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "10px",
                            }}
                            className="fas fa-chevron-down"
                          ></span>
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* فاکتور نهایی */}

      <div className={styles.final_invoice}>
        <h1 className={styles.header}>فاکتور نهایی</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.final_invoice_content}>
            <h4>مجموع قیمت محصولات</h4>
            <h4 style={{ color: "#089319", fontWeight: "bold" }}>
              {data.total_price}+{" "}
              <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div>
          <div className={styles.final_invoice_content}>
            <h4>مجموع هزینه ارسال</h4>
            <h4 style={{ color: "#089319", fontWeight: "bold" }}>
              {/* {data.post_details.post_price}+{" "} */}
              <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div>
          {/* <div
          className={styles.final_invoice_content}
          style={{ marginBottom: "30px" }}
        >
          <h4>کارمزد</h4>
          <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
            12.000- <span style={{ color: "#5E7488" }}>تومان</span>
          </h4>
        </div> */}
        </div>
        <hr />
        {/* <div className={styles.final_invoice_content_sub}>
        <h3 style={{ color: "#364254" }}>مبلغ قابل تسویه</h3>
        <h4 style={{ color: "#089319", fontWeight: "bold" }}>
          12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
        </h4>
      </div> */}
      </div>

      <div style={{ marginTop: "80px" }}></div>
    </div>
  );
}