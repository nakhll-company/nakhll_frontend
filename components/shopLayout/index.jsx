// node libraries

// components
import Header2 from "./header2/header2";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";

// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";

function ShopLayout({ children }) {
  return (
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
  );
}
// export
export default ShopLayout;
