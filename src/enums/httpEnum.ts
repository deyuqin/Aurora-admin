/*
 * @Autor        : qindeyu
 * @Date         : 2022-07-26 16:02:24
 * @LastEditors  : qindeyu
 * @LastEditTime : 2022-07-26 16:05:01
 * @Description  : 请求枚举配置
 */

export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 599,
  TIMEOUT = 10000, //ms
  TYPE = 'success',
}
