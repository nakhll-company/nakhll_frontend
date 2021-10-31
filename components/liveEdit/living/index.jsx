import React, { useEffect, useState } from "react";
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

function Living({ list, characters, setCharacters }) {
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

  // function when click on Edit Button
  const _handelClickEditComponent = () => {};

  return (
    <div>
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

                      {e.component}
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
