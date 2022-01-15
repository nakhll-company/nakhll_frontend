
import Image from "next/image";

import st from "./description.module.scss";
import ShopLayout from "../../components/shopLayout";
import DesVideo from "../../containers/description/components/desVideo";
function Description() {
  return (
    <div className={st.wrapper}>
      {/* header */}
      <div className={st.header}>
        <Image
          src="/image/description/header.svg"
          layout="responsive"
          height={100}
          width={300}
        />
      </div>

      {/* video */}
      <DesVideo />
      {/* vlaues */}
      {/* features */}
      {/* questions */}
    </div>
  );
}

export default Description;

Description.Layout = ShopLayout;
