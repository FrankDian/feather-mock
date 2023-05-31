import Random from '../random';
import { getType } from '../utils/utils';

const mock = (options: any) => {
  const type = getType(options);
  let res;
  switch (type) {
    case 'string':
      res = _dealString(options);
      break;
    case 'object':
      res = _dealObject(options);
      break;
    case 'array':
      res = Random.array({ raw: options });
      break;
    case 'function':
      res = options.call();
      break;
    default:
      res = type;
      break;
  }
  return res;
}

/**
 * 处理 String 传入
 * @param str 传入的字符串
 * @param opt 参数
 * @returns result
 */
const _dealString = (str: string, opt: object = {}) => {
  if(str.startsWith('@')) {
    const mark = str.substring(1);
    if(Random[mark]) {
      return Random[mark](opt);
    }
  }
  return str;
}

// todo 写 API
const _dealObject = (options: object) => {
  const res = {};
  Object.keys(options).forEach(key => {
    const val = options[key];
    const opt = _parsekeyValue(key, val);
    const { name } = opt;
    const type = getType(options[key]);
    let actualVal;
    switch (type) {
      case 'string':
        actualVal = _dealString(val, opt);
        break;
      case 'object':
        actualVal = _dealObject(val);
        break;
      case 'array':
        actualVal = Random.array(opt);
        break;
      case 'function':
        actualVal = val.call(null, opt);
        break;
      default:
        // number boolean undefined null
        actualVal = opt.raw;
        break;
    }
    res[name] = actualVal;
  })
  return res;
}

// 解析object 的 key 和 value，转化为参数对象
const _parsekeyValue = (str: string, raw: any) => {
  const params = str.split('|');
  const name = params[0];
  const rule = _parseRule(params[1]);
  return {
    ...rule,
    name,
    raw
  }
}

/**
 * 将rule 字符串解析成参数对象
 * @param str rule 字符串（url 传参形式 a=xxx&b=xxx）
 * @returns 参数
 */
function _parseRule (str: string = ''): object {
  const res = {};
  const arr = str.split('&');
  arr.forEach(item => {
    const paramArr = item.split('=');
    res[paramArr[0]] = paramArr[1];
  })
  return res;
}

export default mock;
