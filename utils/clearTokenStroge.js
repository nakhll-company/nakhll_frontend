export function clearTokenStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}
