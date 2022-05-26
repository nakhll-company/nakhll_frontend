export function largeImage(id) {
    const image = document.querySelector(`#${id}`);
    const orginal = document.querySelector("#orginal");

    orginal.src = image.src;
}