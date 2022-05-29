import React from "react";

import Range from "./range";

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
