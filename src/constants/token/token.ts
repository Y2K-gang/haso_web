import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./token.constants";

class Token {
    public getToken(key: string): string | undefined {
        return Cookies.get(key);
    }

    public setToken(key: string, token: string): void {
        Cookies.set(key, token, { secure: true, sameSite: "Strict" });
    }

    public clearToken(): void {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(REFRESH_TOKEN_KEY);
    }
}

export default new Token();
