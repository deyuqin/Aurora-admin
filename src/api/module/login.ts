import http from '@/api';
import { Login } from '@/interface';

export const loginApi = (params?: Login.ReqLogin, _object?: object) => {
  return http.get('/user/login', params, _object);
};
