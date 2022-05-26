// get filter data
export function getFilterData(filterData) {
    const data = {};
    const checkedBoxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    for (let i = 0; i < checkedBoxes.length; i++) {
        data[checkedBoxes[i].name] = checkedBoxes[i].value;
    }
}