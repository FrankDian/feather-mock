export function getType(obj) {
  // Array
  // Function（它的 typeof 返回 "function"）
  // Error
  // Boolean
  // Number
  // String
  // Date
  // RegExp
  return (obj === null || obj === undefined) ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
}