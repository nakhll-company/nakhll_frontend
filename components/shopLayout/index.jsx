// node libraries
import Image from "next/image";
// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";

function ShopLayout({ children }) {
  return (
    <div>
      <header className={styles.headerWrapper}>
        <Image
          src="/image/LOGO_500.png"
          alt="logo nakhll"
          width="100px"
          height="100px"
        />
      </header>
      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footerWrapper}>
        <div className={styles.footerWrapper_content}>
          <div className={styles.footerWrapper_content_info}>
            <div className={styles.footerWrapper_content_info_container}>
              <div className={styles.footer_col}>
                <div className={styles.footer_col_icon}>
                  <i></i>
                  شماره تماس :<a href="tel: +983432476561">32476561 -034</a>
                </div>
              </div>
              <div className={styles.footer_col}>
                <div className={styles.footer_col_icon}>
                  <i></i>
                  آدرس ایمیل :
                  <a href="mailto:info@nakhll.com">info@nakhll.com</a>
                </div>
              </div>
              <div className={styles.footer_subtitle}></div>
              <div className={styles.footer_copyright}>
                Copyright © Nakhll.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
// export
export default ShopLayout;
