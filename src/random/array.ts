interface arrayOpt {
  count?: number,
  raw?: Array<any>
}

const array = function(opt?: arrayOpt) {
  const { count, raw = [] } = opt || {};
  if(!count) {
    return raw;
  }
  let res: Array<any> = [];
  for (let i = 0; i < count; i++) {
    res = res.concat(raw);
  }
  return res;
}

export default array;