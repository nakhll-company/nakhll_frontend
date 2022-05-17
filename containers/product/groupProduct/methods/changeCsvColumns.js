export async function changeCsvColumns(
    event,
    groupProductCsvData,
    setUpdateCsv,
    column,
    setNextStep
) {
    const columnName = event.target.value;
    const requiredColumns = [
        "barcode",
        "Title",
        "Inventory",
        "Price",
        "OldPrice",
        "category_id",
        "image_1",
    ];

    const upadatedCsv = await Promise.all(
        groupProductCsvData.map(async(item) => {
            if (item[`${columnName}`] !== item[`${column}`]) {
                item[`${columnName}`] = await item[`${column}`];
                delete item[`${column}`];
                return item;
            } else {
                return item;
            }
        })
    );

    await setUpdateCsv(upadatedCsv);
    const checkColumns = requiredColumns.every((key) =>
        Object.keys(groupProductCsvData[0]).includes(key)
    );
    setNextStep(checkColumns);
}