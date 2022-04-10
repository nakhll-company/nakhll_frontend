export function clearTokenStorage() {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
}