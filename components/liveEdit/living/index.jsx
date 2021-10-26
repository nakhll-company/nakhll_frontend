import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./living.module.scss";
import Sm_HeroSlides from "../../SampelComponents/HeroSlides";
import Sm_InputPlace from "../../SampelComponents/InputPlace";
import Sm_LinerOneImg from "../../SampelComponents/Sm_LinerOneImg";
import Sm_LinerTwoImg from "../../SampelComponents/Sm_LinerTwoImg";
import Sm_LinerThreeImg from "../../SampelComponents/Sm_LinerThreeImg";
import Sm_LinerFourImg from "../../SampelComponents/Sm_LinerFourImg";
import Sm_LinerProducts from "../../SampelComponents/Sm_LinerProducts";
function Living(props) {
  const [characters, setCharacters] = useState([]);

  const Sample = {
    1: "اسلایدر تکی",
    2: "بنر تک عکسی",
    3: " بنر 2تایی در یک ردیف",
    4: " (یکی بالا دوتا پایین)بنر ۳ تایی",
    5: " بنر چهارتایی چهارتا کنار هم",
    6: " ردیف محصولات",
    7: " ردیف شگفت انگیزا",
  };
  const list = [
    {
      type: 6,
      component: <Sm_LinerProducts />,
      ID: "c22xzczxc6da83-9526-465a-97d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
    {
      type: 5,
      component: <Sm_LinerFourImg />,
      ID: "c226da83czxvzxvz-9526-465a-97d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
    {
      type: 0,
      component: <Sm_InputPlace />,
      ID: "46153726-<zczxcvxz3f09-4bb1-967c-ebd55c9751ba",
      slug: "mohammadi",
      title: "محمدی",
    },
    {
      type: 1,
      component: <Sm_HeroSlides />,
      ID: "f3501a78-2b0e-4zxvzxvzx302-9d1c-f282daa5592e",
      slug: "Roya",
      title: "رویا",
    },
    {
      type: 2,
      component: <Sm_LinerOneImg />,
      ID: "c226da83-9526-465a-9zc<zcz7d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
    {
      type: 3,
      component: <Sm_LinerTwoImg />,
      ID: "c226da83-9zx526-465a-97d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
    {
      type: 4,
      component: <Sm_LinerThreeImg />,
      ID: "c226da83-zxvzx9526-465a-97d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
  ];

  const handelClickOnDeleteBtn = (idSelected) => {
    const items = [...characters];
    items.splice(idSelected, 1);
    setCharacters(items);
  };
  // function for when click on component
  const _handel_click_on_component = () => {};

  useEffect(() => {
    setCharacters(list);
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
  };
  const _handel_select_component = (data, index) => {
    switch (data.type) {
      case 0:
        return <Sm_InputPlace />;
        break;
      case 1:
        return <Sm_HeroSlides />;
        break;
      case 2:
        return <Sm_LinerOneImg />;
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
                        <button class={styles.buttonAdd} role="button">
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className={`${styles.wrapBtn} ${styles.btnUp}`}>
                        <button class={styles.buttonAdd} role="button">
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
                      <div
                        className={`${styles.wrapBtn} ${styles.btnLeftEdit}`}
                      >
                        <button
                          class={styles.buttonEdit}
                          role="button"
                          onClick={() => handelClickOnDeleteBtn(index)}
                        >
                          ویرایش
                        </button>
                      </div>
                      {/* fas fa-calendar-times" */}
                      {/* {_handel_select_component(e, index)} */}
                      {e.component}
                      {/* <HeroSlides dataHeroSlides={dataSlider}/> */}
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
