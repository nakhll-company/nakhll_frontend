export function tableValidition(key, value) {
  if (key === "Title" && (!value || value.trim() === "")) {
    return true;
  } else if (key === "barcode" && (isNaN(value) || value.trim() === "")) {
    return true;
  } else if (
    key === "Price" &&
    (isNaN(value) || value.trim() === "" || value == 0)
  ) {
    return true;
  } else if (key === "OldPrice" && (isNaN(value) || value.trim() === "")) {
    return true;
  } else if (key === "Net_Weight" && (isNaN(value) || value.trim() === "")) {
    return true;
  } else if (
    key === "Weight_With_Packing" &&
    (isNaN(value) || value.trim() === "")
  ) {
    return true;
  } else if (key === "category_id" && (isNaN(value) || value.trim() === "")) {
    return true;
  } else if (key === "Inventory" && (isNaN(value) || value.trim() === "")) {
    return true;
  } else if (key === "image_1" && (!value || value.trim() === "")) {
    return true;
  } else if (key === "image_2" && (!value || value.trim() === "")) {
    return true;
  } else if (key === "image_3" && (!value || value.trim() === "")) {
    return true;
  }
  return false;
}
