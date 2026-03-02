import Axios, { AxiosError, AxiosHeaders } from 'axios';
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from '@/store';
import { logger, storage } from '@/utils';

export function authRequestInterceptor(
  config: InternalAxiosRequestConfig,
  token?: Nullable<string>,
) {
  config.withCredentials = true;
  if (!config.headers || !(config.headers instanceof AxiosHeaders)) {
    config.headers = new AxiosHeaders(config.headers);
  }
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
}

const api = Axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE,
});

export const yfHandleLogout = () => useUserStore.getState().reset();

// Request
api.interceptors.request.use((config) => {
  const JWT_TOKEN = storage.getItem<string>('accessToken');
  return authRequestInterceptor(config, JWT_TOKEN);
});

// Response

api.interceptors.response.use(
  (response) => response.data, // Unpack data
  (error: AxiosError<IAppError>) => {
    const message = error.response?.data?.message;
    if (import.meta.env.DEV && message)
      logger.error({ Title: 'Api error', message });
    const errorCode = error.response?.data.errorCode;
    window.dispatchEvent(
      new CustomEvent('global-api-error', { detail: { errorCode, error } }),
    );

    if (error.response?.status === 401) {
      yfHandleLogout();
      window.location.href = '/public';
    }
    return Promise.reject(error);
  },
);

// Add type extensions
export type ApiInstance = Omit<
  typeof api,
  'get' | 'post' | 'put' | 'patch' | 'delete'
> & {
  get<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = unknown, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R>;
  put<T = unknown, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R>;
  patch<T = unknown, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R>;
  delete<T = unknown, R = T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;
};
export default api as ApiInstance;

export interface IAppError {
  errorCode: number;
  message: Nullable<string>;
}
