import axios, { AxiosInstance, AxiosError } from "axios";
import { SERVER_URL } from "@env"; // .env 파일 만들어서 불러오기
import { Toast } from "@/libs/toast";

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {
    // 프로토콜이 없는 경우 기본값으로 http:// 추가
    const baseURL = SERVER_URL.startsWith("http") ? SERVER_URL : `http://${SERVER_URL}`;

    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.error("요청 에러:", error);
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        console.error("응답 에러:", error);

        if (error.response) {
          const { status, data } = error.response;
          const message = (data as any)?.message || "알 수 없는 오류 발생";

          switch (status) {
            case 400:
              Toast("error", `요청 오류: ${message}`);
              break;
            case 401:
              Toast("error", "인증 오류: 로그인이 필요합니다.");
              break;
            case 403:
              Toast("error", "권한 오류: 접근 권한이 없습니다.");
              break;
            case 404:
              Toast("error", "요청 오류: 요청하신 리소스를 찾을 수 없습니다.");
              break;
            case 500:
              Toast("error", "서버 오류: 서버에서 문제가 발생했습니다.");
              break;
            default:
              Toast("error", `오류: ${message}`);
          }
        } else if (error.request) {
          Toast("error", "네트워크 오류: 서버와 통신이 원활하지 않습니다.");
        } else {
          Toast("error", `오류: ${error.message || "알 수 없는 오류 발생"}`);
        }

        return Promise.reject(error);
      }
    );
  }

  // GET 요청 함수
  public getData<T>(endpoint: string, params?: any): Promise<T> {
    return this.axiosInstance.get(endpoint, { params }).then((response) => response.data);
  }

  // POST 요청 함수
  public postData<T>(endpoint: string, data: any): Promise<T> {
    return this.axiosInstance.post(endpoint, data).then((response) => response.data);
  }

  // DELETE 요청 함수
  public deleteData<T>(endpoint: string, params: any): Promise<T> {
    return this.axiosInstance.delete(endpoint, { params }).then((response) => response.data);
  }

  // PATCH 요청 함수
  public patchData<T>(endpoint: string, data: any): Promise<T> {
    return this.axiosInstance.patch(endpoint, data).then((response) => response.data);
  }
}

const hasoAxios = new AxiosService();

export default hasoAxios;