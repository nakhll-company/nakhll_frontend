import React from "react";
import styles from "./game.module.scss";
function index(props) {
  return (
    <>
      <>
        <div className={styles.body}>
          <div
            id="card"
            className={styles.card}
            onClick={() => {
              const card = document.querySelector("#card");

              card.addEventListener("click", () => {
                card.classList.toggle("flip-card");
              });
            }}
          >
            <div className={styles.front}>
              <div className={styles.circle}></div>
              <div className={styles.triangle}></div>
              <div className={styles.square}></div>
            </div>
            <div className={styles }>
              <div className={styles.icon}></div>
              <div className={styles.phone_number}>8650 4006</div>
            </div>
          </div>
        </div> 
        <style jsx>{`
          .flip-card {
            transform: rotateY(180deg);
          }
        `}</style>
      </>
    </>
  );
}

export default index;
