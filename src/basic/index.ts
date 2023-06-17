import _ from 'lodash';
import integer from './integer';
import string from './string';
import { date, time } from './date';
import boolean from './boolean';
import email from './email';
import phone from './phone';
import array from './array';

interface BasicInterface {
  [key: string]: Function,
};

const Basic: BasicInterface = {
  integer,
  string,
  boolean,
  date,
  time,
  email,
  phone,
  array
};

export default Basic;
