import React, { useState } from "react";
import diviedNumber, {
  undiviedNumber,
} from "../../../../../utils/diviedNumber";
import s from "./filterPrice.module.scss";

const Range = ({ ceiling, price, changeValue }) => {
  const [valPrice, setValPrice] = useState(price);

  const changeInput = (val) => {
    let valInput = undiviedNumber(val);
    let isNum = /^\d*$/.test(valInput);
    if (isNum) {
      setValPrice(valInput);
      if (ceiling) {
        changeValue("max", +valInput);
      } else {
        changeValue("min", +valInput);
      }
    }
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.rangeParent}>
          <span className={s.word}>{ceiling ? "تا" : "از"} </span>
          <div className={s.inputParent}>
            <input
              type="text"
              value={diviedNumber(+valPrice)}
              onChange={(val) => changeInput(val.target.value)}
            />
          </div>
          <div className={s.unitWord}>تومان</div>
        </div>
      </div>
    </>
  );
};

function FilterPrice({ ragnePrice, onChangeFilter }) {
  const changeValue = (item, value) => {
    if (item == "min") {
      onChangeFilter("min_price", parseInt(value * 10));
    } else {
      onChangeFilter("max_price", parseInt(value * 10));
    }
  };
  return (
    <>
      {ragnePrice.min_price && (
        <>
          <Range price={ragnePrice.min_price / 10} changeValue={changeValue} />
          <Range
            price={ragnePrice.max_price / 10}
            changeValue={changeValue}
            ceiling
          />
        </>
      )}
    </>
  );
}

export default FilterPrice;
