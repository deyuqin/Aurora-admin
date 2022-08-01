import { ResultEnum } from '@/enums/httpEnum';
import { ResultData } from '@/interface';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ElMessage } from 'element-plus';

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  // baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  //跨域时候允许携带凭证
  withCredentials: true,
};

class RequesHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);

    /**
     * @description: 请求拦截器
     * //TODO 添加描述和下面to do something对应
     * 请求拦截：
     *    请求调整（请求头）
     *    用户标识（token）
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

    /**
     * @description: 相应拦截器
     * //TODO 添加描述和下面to do something对应
     * 响应拦截（返回code码进行判断执行）
     *    网络错误处理（断网处理）
     *    授权错误处理
     *    普通错误处理
     *    代码异常处理（后端异常）
     * @return {*}
     * @author: qindeyu
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        return data;
      },
      (error) => {
        console.error(error);
        ElMessage.error(error.message);
        return Promise.reject(error);
      },
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequesHttp(config);
