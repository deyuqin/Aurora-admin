import { ResultEnum } from '@/enums/httpEnum';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useMessage } from 'naive-ui';

const message = useMessage();

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  //跨域时候允许携带凭证
  withCredentials: true,
};

class RequesHtto {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);

    /**
     * @description: 请求拦截器
     * //TODO 添加描述和下面to do something对应
     * @param {AxiosRequestConfig} config
     * @return {*}
     * @author: qindeyu
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        //TODO to do something
        return config;
      },
      (error) => {
        console.error(error);
        return Promise.reject(error);
      },
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        return data;
      },
      (error) => {
        console.error(error);
        message.error(error.message, {
          duration: 5 * 1000,
        });
        return Promise.reject(error);
      },
    );
  }
}
