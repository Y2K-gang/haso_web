export interface Login {
  id: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
