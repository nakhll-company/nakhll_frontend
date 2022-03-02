// node libraries
import Head from "next/head";
import Script from "next/script";
// import { useSelector } from "react-redux";
// components
import Footer from "./footer";
import Header from "./header/header";
import { ToastContainer } from "react-toastify";
// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";

function ShopLayout({ children }) {

  // const userData = useSelector((state) => state.User.userInfo);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      />
      {/* <Script id="123456789">
        {`window.addEventListener('goftino_ready', function () {
          Goftino.setUser(${{
            name: (Object.keys(userData).length > 0 ? userData.user.first_name : " "),
            phone: (Object.keys(userData).length > 0 ? userData.mobile_number : " "),
            about: (Object.keys(userData).length > 0 ? userData.shops : " "),
            forceUpdate: true
          }});
        })`}
      </Script> */}
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
