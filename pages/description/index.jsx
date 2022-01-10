
import Image from "next/image";
import FeaturesBlocks from "../../containers/description/components/FeaturesBlocks";
import Questions from "../../containers/description/components/Questions";
import Coming from "../../containers/description/components/Coming";
import Process from "../../containers/description/components/Process";
import Sliders from "../../containers/description/components/Sliders";

import styles from "./description.module.scss";
import ShopLayout from "../../components/shopLayout";
function Description() {
  return (
    <div className={styles.wrapper}>
      {/* Video */}
      {/* styles.videos */}

      <div className="container" id="14440092271">
        <script
          type="text/JavaScript"
          src="https://www.aparat.com/embed/B6lLS?data[rnddiv]=14440092271&data[responsive]=yes"
        ></script>
      </div>
      {/* Sliders */}
      {/* styles.slider */}
      <div className={`container   ${styles.slider} `}>
        <Sliders />
      </div>
      {/* icons */}
      <FeaturesBlocks />

      <Process />

      {/* Questions */}
      <Questions />

      {/* coming to Nakhll */}

      <Coming />
    </div>
  );
}

export default Description;

Description.Layout = ShopLayout;
