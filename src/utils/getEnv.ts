import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

/**
 * @description: 判断打包环境
 * @param {string} mode
 * @return {*}
 * @author: qindeyu
 */
export function isDevFn(mode: string): boolean {
  return mode === 'development';
}

export function isProdFn(mode: string): boolean {
  return mode === 'production';
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
  return process.env.VITE_REPORT === 'true';
}
