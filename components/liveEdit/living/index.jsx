import React, { useEffect, useState } from "react";
import { ApiReference } from "../../../Api";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import styles from "./living.module.scss";
import HeroSlides from "../../../containers/LandingPage/HeroSlides";
import Sm_HeroSlides from "../../SampelComponents/HeroSlides";
function Living(props) {
  const [characters, setCharacters] = useState([]);
  const [allshops, setAllshops] = useState([]);

  const list = [
    {
      ID: "46153726-3f09-4bb1-967c-ebd55c9751ba",
      slug: "mohammadi",
      title: "محمدی",
    },
    {
      ID: "f3501a78-2b0e-4302-9d1c-f282daa5592e",
      slug: "Roya",
      title: "رویا",
    },
    {
      ID: "c226da83-9526-465a-97d4-9f112a0dc636",
      slug: "Irana",
      title: "نقش و نگار",
    },
    {
      ID: "abd61fbc-1d55-49a2-bd86-d25d42f706cb",
      slug: "Royal",
      title: "رویال",
    },
    {
      ID: "82761df2-53a9-4512-aa51-e84e22bdcc3e",
      slug: "Vahid-Trading",
      title: "بازرگانی وحید",
    },
    {
      ID: "95489838-27ed-48c1-abe7-c7cb145cb867",
      slug: "mishka",
      title: "میشکا",
    },
    {
      ID: "e8fcadac-2a50-46b8-b2de-d3af69643a26",
      slug: "Atelier-Anna",
      title: "هنرکده آنا",
    },
  ];
  const dataSlider = [
    { url: "", image: "/image/slide/slid1.jpg" },
    { url: "", image: "/image/slide/slid1.jpg" },
    { url: "", image: "/image/slide/slid1.jpg" },
  ];

  const handelClickOnDeleteBtn = (idSelected) => {
    let b = list.filter((el) => el.ID !== idSelected);
    console.log("b :>> ", b);
  };

  useEffect(() => {
    console.log("run again :>> ", "run again");
    // _get_all_shops();
    setCharacters(list);
  }, []);

  // // Get all shops
  // const _get_all_shops = async () => {
  //   let shops = await ApiRegister().apiRequest(
  //     null,
  //     "GET",
  //     ApiReference.allShops,
  //     true,
  //     ""
  //   );

  //   if (shops.status === 200) {
  //     setAllshops([...shops.data]);
  //     setCharacters(shops.data.slice(0, 7));
  //     //   setAllshops(shops.data);
  //   }
  // };
  useEffect(() => {
    console.log("characters :>> ", characters);
  }, [characters]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    console.log("result.source :>> ", result.source);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
  };

  return (
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
                        onClick={() => handelClickOnDeleteBtn(e.ID)}
                      >
                        <i className="fas fa-eraser"></i>
                      </button>
                    </div>
                    {/* fas fa-calendar-times" */}
                    <Sm_HeroSlides />

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
  );
}

export default Living;

// [
//   {
//     "ID": "46153726-3f09-4bb1-967c-ebd55c9751ba",
//     "slug": "mohammadi",
//     "title": "محمدی"
//   },
//   {
//     "ID": "f3501a78-2b0e-4302-9d1c-f282daa5592e",
//     "slug": "Roya",
//     "title": "رویا"
//   },
//   {
//     "ID": "c226da83-9526-465a-97d4-9f112a0dc636",
//     "slug": "Irana",
//     "title": "نقش و نگار"
//   },
//   {
//     "ID": "abd61fbc-1d55-49a2-bd86-d25d42f706cb",
//     "slug": "Royal",
//     "title": "رویال"
//   },
//   {
//     "ID": "82761df2-53a9-4512-aa51-e84e22bdcc3e",
//     "slug": "Vahid-Trading",
//     "title": "بازرگانی وحید"
//   },
//   {
//     "ID": "95489838-27ed-48c1-abe7-c7cb145cb867",
//     "slug": "mishka",
//     "title": "میشکا"
//   },
//   {
//     "ID": "e8fcadac-2a50-46b8-b2de-d3af69643a26",
//     "slug": "Atelier-Anna",
//     "title": "هنرکده آنا"
//   }
// ]
