import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import styles from "./living.module.scss";
import Sm_HeroSlides from "../../SampelComponents/HeroSlides";
import Sm_InputPlace from "../../SampelComponents/InputPlace";
import Sm_LinerOneImg from "../../SampelComponents/Sm_LinerOneImg";
import Sm_LinerTwoImg from "../../SampelComponents/Sm_LinerTwoImg";
import Sm_LinerThreeImg from "../../SampelComponents/Sm_LinerThreeImg";
import Sm_LinerFourImg from "../../SampelComponents/Sm_LinerFourImg";
import Sm_LinerProducts from "../../SampelComponents/Sm_LinerProducts";
import CustomCropper from "../../customCropper";
import { _updateDataLanding } from "../../../redux/actions/liveEdit/_updateDataLanding";
import SelectUrl from "../../../containers/liveEdit/SelectUrl";

import Sm_AboutMe from "../../SampelComponents/Sm_AboutMe";

import Sm_VipProducts from "../../SampelComponents/Sm_VipProducts";
import Sm_RotationProducts from "../../SampelComponents/Sm_RotationProducts";

import Sm_Video from "../../SampelComponents/Sm_Video";

function Living({ characters, setCharacters, setOpenPlaneEditor, idLanding }) {
  const dispatch = useDispatch();
  const showCrop = useSelector((state) => state.showCropper);
  const showSelectorUrl = useSelector((state) => state.showSelectUrl);

  // const characters = useSelector((state) => state.allDataLanding);

  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

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

  const _handel_add_component_top = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <Sm_InputPlace />, type: 0 };
    items.splice(index, 0, newItem);
    setCharacters(items);
    setOpenPlaneEditor(true);
    dispatch(_updateDataLanding(items));
  };

  // function for when click on bottom plus icon
  const _handel_add_component_bottom = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <Sm_InputPlace />, type: 0 };
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
  const _handel_select_component = (type, id, data) => {
    const handel = {
      0: <Sm_InputPlace />,
      1: <Sm_HeroSlides setImageSrc={setImageSrc} id={id} data={data} />,
      2: <Sm_LinerOneImg setImageSrc={setImageSrc} id={id} data={data} />,
      3: <Sm_LinerTwoImg setImageSrc={setImageSrc} id={id} data={data} />,
      4: <Sm_LinerThreeImg setImageSrc={setImageSrc} id={id} data={data} />,
      5: <Sm_LinerFourImg setImageSrc={setImageSrc} id={id} data={data} />,
      6: <Sm_LinerProducts id={id} data={data} />,
      8: <Sm_AboutMe id={id} data={data} />,
      9: <Sm_VipProducts id={id} data={data} />,
      10: <Sm_RotationProducts id={id} data={data} />,
      11: <Sm_Video id={id} data={data} />,
    };

    return handel[type] ? handel[type] : null;
  };

  const icons = (index) => (
    <>
      <div className={`${styles.wrapBtn} ${styles.btnBottom}`}>
        <button
          className={styles.buttonAdd}
          role="button"
          onClick={() => _handel_add_component_bottom(index)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className={`${styles.wrapBtn} ${styles.btnUp}`}>
        <button
          className={styles.buttonAdd}
          role="button"
          onClick={() => _handel_add_component_top(index)}
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
        <CustomCropper imageSrc={imageSrc} setCroppedImage={setCroppedImage} />
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

                      {_handel_select_component(e.type, e.ID, e.data)}
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
