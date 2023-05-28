/**
 * 返回一个随机整数值
 * @param min 最小值
 * @param max 最大值
 */
const integer = (min?: number | string, max?: number | string) => {
  const minVal = typeof min !== 'undefined' ? parseInt(min.toString(), 10) : Number.MIN_SAFE_INTEGER;
  const maxVal = typeof max !== 'undefined' ? parseInt(max.toString(), 10) : Number.MAX_SAFE_INTEGER;
  return Math.round(Math.random() * (maxVal - minVal) + minVal);
};

export const Random = {
  integer
};