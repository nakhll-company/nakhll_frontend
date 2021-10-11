import React from "react";

<<<<<<< HEAD
import styles from "./LinerOneImg.module.scss";

function LinerOneImg({ dataLinerOneImg }) {
=======
function LinerOneImg({ nextApi_LinerOneImg }) {

  const [dataLinerOneImg, setDataLinerOneImg] = useState([]);

  useEffect(async () => {

    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerOneImg,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerOneImg(response.data);
      }
    } catch (e) {
    }
  }, []);
>>>>>>> a45fb04b5a3e158703b3136ea0dd9a8ee3c66e72
  return (
    <>
      {dataLinerOneImg.length > 0 && (
        <div className={`${styles.linearImages} container`}>
          <div className="row ">
            <div className={`col-12  ${styles.righter}`}>
              <a href={dataLinerOneImg[0].url}>
                <img
                  src={dataLinerOneImg[0].image}
                  alt={dataLinerOneImg[0].title}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinerOneImg;
