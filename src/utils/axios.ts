import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useMessage } from 'naive-ui';

//消息提示
const message = useMessage();

const service = axios.create({
  timeout: 5000,
});

//请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    //to do something
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse): any => {
    const res = response.data;
    if (res.code !== 200) {
      if (res.message) {
        message.error(res.message || 'Error');
      }
      //to do something
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error: any) => {
    console.log('err' + error);
    message.error(error.message, {
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
