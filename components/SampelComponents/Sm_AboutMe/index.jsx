import st from "./aboutMe.module.scss";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { _updateTextAboutMe } from "../../../redux/actions/liveEdit/_updateTextAboutMe";

function Sm_AboutMe({ id, data }) {
  const an1 = useRef(null);
  console.log(`id`, id);
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(data[0].text);
  const dispatch = useDispatch();
  useEffect(() => {
    lottie.loadAnimation({
      container: an1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/dinoDance.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);
  return (
    <>
      <div className={st.wrapper}>
        <div ref={an1} className={st.animation}></div>
        <span className={st.title}>درباره ما</span>

        {toggle ? (
          <span
            className={st.content}
            onDoubleClick={() => {
              setToggle(false);
              dispatch(_selectId({ id, order: 0 }));
            }}
          >
            {name}
          </span>
        ) : (
          <textarea
            className={st.textarea}
            type="text"
            rows="5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Escape") {
                setToggle(true);
                dispatch(
                  _updateTextAboutMe({
                    text: name,
                  })
                );
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          />
        )}
      </div>
    </>
  );
}

export default Sm_AboutMe;
