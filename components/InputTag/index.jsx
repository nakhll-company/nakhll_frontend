import React from "react";

import { WithContext as ReactTags } from "react-tag-input";

import s from "./inputTag.module.scss";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.enter];
function InputTag({ tags, setTags, suggestions }) {
  // const [tags, setTags] = React.useState([]);
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
        suggestions={suggestions}
        minQueryLength={1}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        placeholder="تگ های مورد نظر خود را وارد نمایید. "
        autocomplete
        autofocus={false}
      />
    </div>
  );
}

export default InputTag;
