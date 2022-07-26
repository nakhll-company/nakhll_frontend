export function deletePhoneNumber(str) {
  const re = /(?:[-+() ]*\d){10,13}/gm;

  if (!str) {
    str = "";
  }
  return str.replace(re, "");
}
