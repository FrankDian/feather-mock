import { Random } from './random';

const FMock = {
  Random,
}

export default FMock;

// 支持生成对象、数组等复杂数据类型。
// string/boolean/number/date/time/object/array
// MOCK.mock('')

// 支持自定义数据类型，例如生成身份证号码、手机号码等特定格式的数据。  
// Mock.registerType() 1. 要防止覆盖已有 2.即为进行数据类型定义的流程的暴露

// 支持生成符合特定规则的数据，例如生成指定范围内的数字、指定长度的字符串、指定格式的日期等
// length:xxx min:xx max:xx template 

// 支持根据数据模板生成数据，例如根据一个 JSON 模板生成符合该模板的数据。
// ??? 没太看懂

// 支持生成大量数据，例如生成 1000 条数据。