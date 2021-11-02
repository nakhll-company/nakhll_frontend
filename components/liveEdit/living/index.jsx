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

function Living({ list, characters, setCharacters }) {
  const showCrop = useSelector((state) => state.showCropper);

  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // function for when click on delete icon
  const handelClickOnDeleteBtn = (idSelected) => {
    const items = [...characters];
    items.splice(idSelected, 1);
    if (items.length == 0) {
      const newItem = { ID: uuidv4(), component: <Sm_InputPlace />, type: 0 };
      items.splice(0, 0, newItem);
    }
    setCharacters(items);
  };

  // function for when click on top plus icon

  const _handel_add_component_top = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <Sm_InputPlace />, type: 0 };
    items.splice(index, 0, newItem);
    setCharacters(items);
  };

  // function for when click on bottom plus icon
  const _handel_add_component_bottom = (index) => {
    const items = [...characters];
    const newItem = { ID: uuidv4(), component: <Sm_InputPlace />, type: 0 };
    items.splice(index + 1, 0, newItem);
    setCharacters(items);
  };

  // function for Drag components

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
  };

  // select component from server
  // type
  const _handel_select_component = (type, id, data) => {
    switch (type) {
      case 0:
        return <Sm_InputPlace />;
        break;
      case 1:
        return <Sm_HeroSlides />;
        break;
      case 2:
        return (
          <Sm_LinerOneImg
            setImageSrc={setImageSrc}
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
            id={id}
            data={data}
          />
        );
        break;

      case 3:
        return <Sm_LinerTwoImg />;
        break;

      case 4:
        return <Sm_LinerThreeImg />;
        break;

      case 5:
        return <Sm_LinerFourImg />;
        break;

      case 6:
        return <Sm_LinerProducts />;
        break;
    }
  };

  return (
    <div>
      {/* imageSrc, setImageSrc */}
      {showCrop && (
        <CustomCropper
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          croppedImage={croppedImage}
          setCroppedImage={setCroppedImage}
          list={list}
        />
      )}

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
                      <div className={`${styles.wrapBtn} ${styles.btnBottom}`}>
                        <button
                          class={styles.buttonAdd}
                          role="button"
                          onClick={() => _handel_add_component_bottom(index)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className={`${styles.wrapBtn} ${styles.btnUp}`}>
                        <button
                          class={styles.buttonAdd}
                          role="button"
                          onClick={() => _handel_add_component_top(index)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className={`${styles.wrapBtn} ${styles.btnLeft}`}>
                        <button
                          class={styles.buttonDel}
                          role="button"
                          onClick={() => handelClickOnDeleteBtn(index)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      {/* <div
                        className={`${styles.wrapBtn} ${styles.btnLeftEdit}`}
                      >
                        <button
                          class={styles.buttonEdit}
                          role="button"
                          onClick={() => _handelClickEditComponent(index)}
                        >
                          ویرایش
                        </button>
                      </div> */}
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
    </div>
  );
}

export default Living;
