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
      res = _dealArray(options);
      break;
    default:
      res = type;
      break;
  }
  return res;
}

const _dealString = (str: string) => {
  if(str.startsWith('@')) {
    const mark = str.substring(1);
    if(Random[mark]) {
      return Random[mark]();
    }
    return str;
  }

}

// todo 完成功能
const _dealObject = (opt: object) => {
  return opt;
}

// todo 完成功能
const _dealArray = (opt: object) => {
  return opt;
}

export default mock;