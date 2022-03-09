import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import { WithContext as ReactTags } from "react-tag-input";

import s from "./inputTag.module.scss";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
function InputTag() {
  const [tags, setTags] = React.useState([
    { id: "Thailand", text: "Thailand" },
    { id: "India", text: "India" },
    { id: "Vietnam", text: "Vietnam" },
    { id: "Turkey", text: "Turkey" },
  ]);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };
  return (
    <div className={s.container}>
      <ReactTags
        tags={tags}
        suggestions={[
          { id: "milad", text: "milad" },
          { id: "India", text: "hasani" },
          { id: "Vietnam", text: "sajad" },
          { id: "Turkey", text: "qqqqq" },
        ]}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        placeholder="تگ مورد نظر خود را وارد نمایید."
        autocomplete
      />
    </div>
  );
}

export default InputTag;
