import _ from "lodash";

export const paginateFront = (products, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    return _(products).slice(startIndex).take(perPage).value();
};