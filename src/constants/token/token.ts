import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './token.constants';

class Token {
    public getToken(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setToken(key: string, token: string): void {
        localStorage.setItem(key, token);
    }

    public clearToken(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }
}

export default new Token();
