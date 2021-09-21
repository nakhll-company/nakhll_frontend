// node libraries
// components
import Header from "./header";
import Footer from "./footer";
// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";
import { ToastContainer } from "react-toastify";

function ShopLayout({ children }) {
  return (

    <div>
      <ToastContainer />

      {/* <header className={styles.headerWrapper}>
        <Image
          src="/image/LOGO_500.png"
          alt="logo nakhll"
          width="100px"
          height="100px"
        />
      </header> */}
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
      {/* <footer className={styles.footerWrapper}>
        <div className={styles.footerWrapper_content}>
          <div className={styles.footerWrapper_content_info}>
            <div className={styles.footerWrapper_content_info_container}>
              <div className={styles.footer_col}>
                <div
                  className={styles.footer_col_icon}
                  style={{ color: "#00171f" }}
                >
                  <i></i>
                  شماره تماس :<a href="tel: +983432476561">32476561 -034</a>
                </div>
              </div>
              <div className={styles.footer_col}>
                <div
                  className={styles.footer_col_icon}
                  style={{ color: "#00171f" }}
                >
                  <i></i>
                  آدرس ایمیل :
                  <a href="mailto:info@nakhll.com">info@nakhll.com</a>
                </div>
              </div>
              <div className={styles.footer_subtitle}></div>
              <div
                className={styles.footer_copyright}
                style={{ color: "#91a6c1" }}
              >
                Copyright © Nakhll.com
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
// export
export default ShopLayout;
