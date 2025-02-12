import axios, { AxiosInstance, AxiosError } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import { errorHandler } from "./errorHandler";
import { SERVER_URL } from "@env";

class CustomAxiosService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    // 요청 인터셉터 등록
    this.axiosInstance.interceptors.request.use(requestInterceptor);

    // 응답 에러 인터셉터 등록
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error("Response Error Intercepted:", error);
        errorHandler(error);
        return Promise.reject(error);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

const DaodaAxios = new CustomAxiosService(SERVER_URL).getInstance();

export default DaodaAxios;
