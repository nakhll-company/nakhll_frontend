export const getBase64Image = (url, setImageSrc) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = async () => {
        const canvas = await document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = await canvas.getContext("2d");
        await ctx.drawImage(img, 0, 0);
        const dataURL = await canvas.toDataURL("image/png");
        setImageSrc(dataURL);
    }
    img.src = url
}