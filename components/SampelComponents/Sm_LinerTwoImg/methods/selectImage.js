function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export const selectImage = async (e, setImageSrc, setShowModal) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
    const imageDataUrl = await readFile(file);
    setImageSrc(imageDataUrl);
    setShowModal(true);
  }
};
