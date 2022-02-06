// node libraries
import { useState } from "react";
import { useDispatch } from "react-redux";
// components
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { _updateTextAboutMe } from "../../../redux/actions/liveEdit/_updateTextAboutMe";
// style
import st from "./aboutMe.module.scss";

function Sm_AboutMe({ id, data }) {

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(data[0].text);

  return (
    <>
      <div className={st.wrapper}>
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
