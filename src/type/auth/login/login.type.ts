export interface Login {
  id: string;
  password: string;
}

export interface LoginTokenProps {
  accessToken: string;
  refreshToken: string;
}
