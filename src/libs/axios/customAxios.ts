import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import {responseErrorInterceptor} from "@/libs/axios/responseErrorInterceptor";
import { REQUEST_TOKEN, ACCESS_TOKEN } from "@/constants/token/token.constants";
import Token from "@/libs/token/cookie";

const SERVER_URL = import.meta.env.SERVER_URL;

const createCustomAxiosInstance = (baseURL?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...baseURL,
    withCredentials: true,
  });
};

export const hasoAxios = createCustomAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`!,
  },
});

hasoAxios.interceptors.request.use((response)=>response,requestInterceptor);
hasoAxios.interceptors.response.use((response)=>response, responseErrorInterceptor);

export default hasoAxios;
