import { STRING_MAX_LEN, STRING_MIN_LEN } from './utils/const';
import _ from 'lodash';
import dayjs from 'dayjs';

/**
 * 返回一个随机整数值
 * @param min 最小值
 * @param max 最大值
 */
const integer = (min?: number | string, max?: number | string): number => {
  const minVal = typeof min !== 'undefined' ? parseInt(min.toString(), 10) : Number.MIN_SAFE_INTEGER;
  const maxVal = typeof max !== 'undefined' ? parseInt(max.toString(), 10) : Number.MAX_SAFE_INTEGER;
  return Math.round(Math.random() * (maxVal - minVal) + minVal);
};

/**
 * 返回一个随机字符
 */
const char = () => {
  // 字符串集
  const allChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLen = allChar.length;
  return allChar.charAt(integer(0, charsLen));
};

interface stringOption {
  min?: number; // 最短长度
  max?: number; // 最大长度
  len?: number; // 固定长度（优先级高）
}
/**
 * 返回一个随机字符串
 * @param min 最短长度
 * @param max 最大长度，不超过 STRING_MAX_LEN
 */
const string = (opt?: stringOption): string => {
  const strLen = _getLength(opt || {});
  let res = '';
  for (let i = 0; i < strLen; i++) {
    res += char();
  }
  return res;
};

/**
 * 从配置 stringOption 中获取实际长度
 * @param opt 配置
 * @returns length
 */
const _getLength = (opt: stringOption): number => {
  let { min = STRING_MIN_LEN, max = STRING_MAX_LEN, len } = opt;
  // 校验长度
  if ( typeof len !== 'undefined'
    && _.isInteger(len)
    && len >= STRING_MIN_LEN
    && len <= STRING_MAX_LEN
  ) {
    return len;
  }

  if (!_.isInteger(max) || !max || max > STRING_MAX_LEN) max = STRING_MAX_LEN;
  if (!_.isInteger(min) || !min || min < STRING_MIN_LEN) min = STRING_MIN_LEN;
  return integer(min, max);
}

/**
 * 返回随机的布尔值
 * @returns true | false
 */
const boolean = (): boolean => {
  return Math.random() >= 0.5;
};

/**
 * 生成随机Date
 * @returns date
 */
const randomDate = () => {
  const min = new Date(0);
  const max = new Date();
  return new Date(Math.random() * (max.getTime() - min.getTime()));
};

/**
 * 生成随机日期(YYYY-MM-DD)
 */
const date = () => {
  const curDate = randomDate();
  return dayjs(curDate).format('YYYY-MM-DD');
};

/**
 * 生成随机时间（HH:mm:ss）
 */
const time = () => {
  const curDate = randomDate();
  return dayjs(curDate).format('HH:mm:ss');
};

export const Random = {
  integer,
  string,
  boolean,
  date,
  time,
};
