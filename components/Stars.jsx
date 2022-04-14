import React, { useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";

import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar size={30} color={selected ? "red" : "gray"} onClick={onSelect} />
  );
}

function StarRating({ totalStarts = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStarts).map((n, i) => (
        <Star
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          key={i}
        />
      ))}
      <p>{selectedStars}</p>
    </>
  );
}
function Table() {
  return (
    <div style={{ padding: "20px" }}>
      <StarRating totalStarts={10} />
    </div>
  );
}

export default Table;
Table.Layout = EmptyLayout;
