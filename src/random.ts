import { STRING_MAX_LEN, STRING_MIN_LEN } from "./utils/const";
import * as _ from "lodash"

/**
 * 返回一个随机整数值
 * @param min 最小值
 * @param max 最大值
 */
const integer = (min?: number | string, max?: number | string) : number => {
  const minVal = typeof min !== 'undefined' ? parseInt(min.toString(), 10) : Number.MIN_SAFE_INTEGER;
  const maxVal = typeof max !== 'undefined' ? parseInt(max.toString(), 10) : Number.MAX_SAFE_INTEGER;
  return Math.round(Math.random() * (maxVal - minVal) + minVal);
};

/**
 * 返回一个随机字符
 */
const char = () => {
  // 字符串集
  const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charsLen = allChar.length;
  return allChar.charAt(integer(0, charsLen));
};

/**
 * 返回一个随机字符串
 * @param min 最短长度
 * @param max 最大长度，不超过 STRING_MAX_LEN
 */
const string = (min?: number, max?: number) : string => {
  if(!_.isInteger(max) || !max || max > STRING_MAX_LEN) max = STRING_MAX_LEN;
  if(!_.isInteger(min) || !min || min < STRING_MIN_LEN) min = STRING_MIN_LEN;
  const strLen = integer(min, max);
  let res = "";
  for (let i = 0; i < strLen; i++) {
    res += char();
  }
  return res;
};

/**
 * 返回随机的布尔值
 * @returns true | false
 */
const boolean = () : boolean => {
  return Math.random() >= 0.5;
};

export const Random = {
  integer,
  string,
  boolean
};