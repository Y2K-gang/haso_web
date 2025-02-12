import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Toast } from "@/libs/toast";
import { login } from "@/api/auth/auth.api";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constants";
import Token from "@/constants/token/token";

const useLogin = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialLoginData = () => ({
    id: searchParams.get("id") || "",
    password: "",
  });

  const [loginData, setLoginData] = useState(getInitialLoginData);

  useEffect(() => {
    setSearchParams({ id: loginData.id }, { replace: true });
  }, [loginData.id, setSearchParams]);

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        submitLoginData();
      }
    },
    []
  );

  const submitLoginData = useCallback(async () => {
    if (!loginData.id.trim()) return Toast("info", "아이디를 입력해주세요.");
    if (!loginData.password.trim()) return Toast("info", "비밀번호를 입력해주세요.");

    try {
      const res = await login(loginData);
      Toast("success", "로그인 성공");

      Token.setToken(ACCESS_TOKEN_KEY, res.accessToken);
      Token.setToken(REFRESH_TOKEN_KEY, res.refreshToken);

      navigate("/", { replace: true });
    } catch (error) {
      Toast("error", "정보를 다시 확인해주세요.");
    }
  }, [loginData, navigate]);

  return { loginData, handleLoginData, handleKeyPress, submitLoginData };
};

export default useLogin;
