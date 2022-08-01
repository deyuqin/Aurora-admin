export interface Result {
  code: number;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
}

export namespace Login {
  export interface ReqLogin {
    username: string;
    password: string;
  }
}
