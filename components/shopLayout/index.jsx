// node libraries
import Head from "next/head";
// components
import Header2 from "./header2/header2";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";

// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";


function ShopLayout({ children }) {

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

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <ToastContainer />

        {/* <header className={styles.headerWrapper}> */}
        {/* <Image
          src="/image/LOGO_500.png"
          alt="logo nakhll"
          width="100px"
          height="100px"
        /> */}
        {/* </header> */}
        <Header2 />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
// export
export default ShopLayout;
