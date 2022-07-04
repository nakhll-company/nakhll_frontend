import jwt from "jsonwebtoken";

export const checkForCallUserInfo = () => {
  const RefreshToken = localStorage.getItem("refreshToken");

  // when user not entered
  if (RefreshToken == undefined) return false;

  const dateNow = Date.now() / 1000;
  const decodeRefresh = jwt.decode(RefreshToken, {
    complete: true,
  });
  // when refresh Token expired
  if (decodeRefresh.payload.exp < dateNow) {
    return false;
  }

  return true;
};
