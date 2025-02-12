import { AxiosError } from "axios";
import { errorHandler } from "./errorHandler";

export const responseErrorInterceptor = (
  error: AxiosError
): Promise<never> => {
  console.error("Response Error Intercepted:", error);

  errorHandler(error);

  return Promise.reject(error);
};
