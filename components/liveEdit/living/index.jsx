// node libraries
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// components
import CustomCropper from "../../customCropper";
import SmVideo from "../../SampelComponents/Sm_Video";
import SmAboutMe from "../../SampelComponents/Sm_AboutMe";
import SmHeroSlides from "../../SampelComponents/HeroSlides";
import SmInputPlace from "../../SampelComponents/InputPlace";
import SelectUrl from "../../../containers/liveEdit/SelectUrl";
import SmLinerOneImg from "../../SampelComponents/Sm_LinerOneImg";
import SmLinerTwoImg from "../../SampelComponents/Sm_LinerTwoImg";
import SmVipProducts from "../../SampelComponents/Sm_VipProducts";
import SmLinerFourImg from "../../SampelComponents/Sm_LinerFourImg";
import SmLinerThreeImg from "../../SampelComponents/Sm_LinerThreeImg";
import SmLinerProducts from "../../SampelComponents/Sm_LinerProducts";
import SmRotationProducts from "../../SampelComponents/Sm_RotationProducts";
// methods
import { _updateDataLanding } from "../../../redux/actions/liveEdit/_updateDataLanding";
// style
import styles from "./living.module.scss";

function Living({ characters, setCharacters, setOpenPlaneEditor, idLanding }) {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const showCrop = useSelector((state) => state.showCropper);
  const showSelectorUrl = useSelector((state) => state.showSelectUrl);

  // function for when click on delete icon
  const handelClickOnDeleteBtn = (idSelected) => {
    const items = [...characters];
    items.splice(idSelected, 1);
    if (items.length == 0) {
      const newItem = {
        ID: uuidv4(),
        type: 1,
        data: [
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 0,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 1,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 2,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 3,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 4,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 5,
          },
          {
            image: "",
            url: `/shop/${idLanding[0]}`,
            title: "",
            video: { id: "", src: "" },
            order: 6,
          },
        ],
      };
      items.splice(0, 0, newItem);
    }
    setCharacters(items);
    dispatch(_updateDataLanding(items));
  };

  // function for when click on top plus icon
  const handelAddComponentTop = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <SmInputPlace />, type: 0 };
    items.splice(index, 0, newItem);
    setCharacters(items);
    setOpenPlaneEditor(true);
    dispatch(_updateDataLanding(items));
  };

  // function for when click on bottom plus icon
  const handelAddComponentBottom = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <SmInputPlace />, type: 0 };
    items.splice(index + 1, 0, newItem);
    setCharacters(items);
    setOpenPlaneEditor(true);
    dispatch(_updateDataLanding(items));
  };

  // function for Drag components
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
    dispatch(_updateDataLanding(items));
  };

  // type
  const handelSelectComponent = (type, id, data) => {
    const handel = {
      0: <SmInputPlace />,
      1: <SmHeroSlides setImageSrc={setImageSrc} id={id} data={data} />,
      2: <SmLinerOneImg setImageSrc={setImageSrc} id={id} data={data} />,
      3: <SmLinerTwoImg setImageSrc={setImageSrc} id={id} data={data} />,
      4: <SmLinerThreeImg setImageSrc={setImageSrc} id={id} data={data} />,
      5: <SmLinerFourImg setImageSrc={setImageSrc} id={id} data={data} />,
      6: <SmLinerProducts id={id} data={data} />,
      8: <SmAboutMe id={id} data={data} />,
      9: <SmVipProducts id={id} data={data} />,
      10: <SmRotationProducts id={id} data={data} />,
      11: <SmVideo id={id} data={data} />,
    };

    return handel[type] ? handel[type] : null;
  };

  const icons = (index) => (
    <>
      <div className={`${styles.wrapBtn} ${styles.btnBottom}`}>
        <button
          className={styles.buttonAdd}
          role="button"
          onClick={() => handelAddComponentBottom(index)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className={`${styles.wrapBtn} ${styles.btnUp}`}>
        <button
          className={styles.buttonAdd}
          role="button"
          onClick={() => handelAddComponentTop(index)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className={`${styles.wrapBtn} ${styles.btnLeft}`}>
        <button
          className={styles.buttonDel}
          role="button"
          onClick={() => handelClickOnDeleteBtn(index)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );

  return (
    <>
      {showCrop && (
        <CustomCropper
          imageSrc={imageSrc}
          setCroppedImage={setCroppedImage}
          croppedImage={croppedImage}
        />
      )}
      {showSelectorUrl && <SelectUrl idLanding={idLanding} />}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className={styles.wrap}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((e, index) => (
                <Draggable key={e.ID} draggableId={e.ID} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={styles.child}
                    >
                      {icons(index)}

                      {handelSelectComponent(e.type, e.ID, e.data)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Living;
