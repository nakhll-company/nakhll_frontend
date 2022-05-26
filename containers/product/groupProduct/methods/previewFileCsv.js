export function previewFileCsv(
  event,
  file,
  dispatch,
  getGroupProductCsvData,
  getGroupProductCsvHeader
) {
  event.preventDefault();
  const fileReader = new FileReader();
  if (file) {
    fileReader.onload = function (event) {
      const text = event.target.result;
      csvFileToArray(
        text,
        dispatch,
        getGroupProductCsvData,
        getGroupProductCsvHeader
      );
    };
    fileReader.readAsText(file);
  }
}

export function csvFileToArray(
  string,
  dispatch,
  getGroupProductCsvData,
  getGroupProductCsvHeader
) {
  const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
  const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
  const array = csvRows.map((i) => {
    const values = i.split(",");
    const obj = csvHeader.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return obj;
  });
  dispatch(getGroupProductCsvData(array));
  dispatch(getGroupProductCsvHeader(Object.keys(Object.assign({}, ...array))));
}
