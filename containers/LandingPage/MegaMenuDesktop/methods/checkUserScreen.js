export function numberOfCategory(width, setNumberOfCategories) {
  switch (true) {
    case 1400 <= width:
      setNumberOfCategories(11);
      break;
    case width >= 1300 && width < 1400:
      setNumberOfCategories(10);
      break;
    case width >= 1200 && width < 1300:
      setNumberOfCategories(9);
      break;
    case width >= 1000 && width < 1200:
      setNumberOfCategories(8);
      break;
    default:
      setNumberOfCategories(8);
      break;
  }
}
