import HasoAxios from "@/libs/axios/customAxios";
import { Login, LoginResponse } from "@/type/auth/login/login.type";
import { SERVER_URL } from "@env";

export const login = async (loginData: Login): Promise<LoginResponse> => {
  try {
    const { data } = await HasoAxios.post<LoginResponse>(
      `${SERVER_URL}/member/signin`
    );
    return data;
  } catch (error) {
    throw new Error("로그인 요청에 실패했습니다.");
  }
};

export const refresh = async (refreshToken: {
  refreshToken: string | null;
}): Promise<LoginResponse> => {
  try {
    const { data } = await HasoAxios.post<LoginResponse>(
      `${SERVER_URL}/auth/refresh`,
      refreshToken
    );
    return data;
  } catch (error) {
    throw new Error("리프레쉬 에러");
  }
};
