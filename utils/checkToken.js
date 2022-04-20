import jwt from "jsonwebtoken";
import { http } from "../services/callApi/api";

export const checkToken = async() => {
    let Token = localStorage.getItem("accessToken");
    const RefreshToken = localStorage.getItem("refreshToken");

    if (Token) {
        const decodedToken = jwt.decode(Token, { complete: true });
        const dateNow = Date.now() / 1000;
        if (decodedToken.payload.exp < dateNow) {
            console.log("عاقا منقضی شده");
            let ans = await http.post("/api/v1/auth/token/refresh/", {
                refresh: RefreshToken,
            });
            if (ans.status === 200) {
                Token = ans.data.access;
                localStorage.setItem("accessToken", Token);
            }
        } else {
            // access Token is valid
            console.log("هنوز معتبرههه");
        }
    }

    return Token;
};