// node libraries

// components
import Header2 from "./header2/header2";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";

// style
import styles from "../../styles/components/shopLayout/shopLayout.module.scss";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { useEffect, useState } from "react";

function ShopLayout({ children }) {
  const [category, setCategory] = useState([]);
  const _call_Category = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/markets/`,
        true,
        {}
      );
      if (response.status === 200) {
        setCategory(response.data);
      }
    } catch (e) {}
  };
  useEffect(() => {
    _call_Category();
  }, []);
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
      <Header2 category={category} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
// export
export default ShopLayout;
