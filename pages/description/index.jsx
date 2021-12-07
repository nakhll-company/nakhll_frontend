import "tailwindcss/tailwind.css";

import FeaturesBlocks from "../../containers/description/components/FeaturesBlocks";
import Questions from "../../containers/description/components/Questions";
import Coming from "../../containers/description/components/Coming";
import Process from "../../containers/description/components/Process";
import Sliders from "../../containers/description/components/Sliders";

import styles from "./description.module.scss";
function index() {
  return (
    <div className={styles.wrapper}>
      {/* Video */}
      {/* styles.videos */}
      <div className={styles.videos}></div>
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

export default index;
