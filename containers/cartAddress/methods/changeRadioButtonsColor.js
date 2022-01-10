export function changeRadioButtonColor(event, styles, index) {
    let activeLabels = document.querySelectorAll(`.${styles.active_address}`);
    let activeCircles = document.querySelectorAll(`.${styles.active_circle}`);
    activeLabels.forEach((value) => {
        value.classList.remove(`${styles.active_address}`);
    });
    activeCircles.forEach((value) => {
        value.classList.remove(`${styles.active_circle}`);
    });
    event.currentTarget.classList.add(`${styles.active_address}`);
    document.getElementById(`firstCircle${index}`).classList.add(`${styles.active_circle}`);
}