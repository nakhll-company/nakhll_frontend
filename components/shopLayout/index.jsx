// node libraries
import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import { useSelector } from "react-redux";
// components
import Footer from "./footer";
import Header from "./header/header";
import { ToastContainer } from "react-toastify";
// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";

function ShopLayout({ children }) {
  const userData = useSelector((state) => state.User.userInfo);

  useEffect(() => {
    Object.keys(userData).length > 0 &&
      window.addEventListener("goftino_ready", function () {
        Goftino.setUser({
          name: userData.user.first_name - userData.user.last_name,
          phone: userData.mobile_number,
          about:
            userData.shops[0] -
            userData.state -
            userData.big_city -
            userData.city,
          forceUpdate: true,
        });
      });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>

      <div>
        <ToastContainer />
        <Header />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
// export
export default ShopLayout;
