import _ from 'lodash';
import {
  integer,
  string,
  boolean,
  date,
  time,
} from './basic';
import email from './email';
import phone from './phone';

interface Random {
  integer: Function,
  string: Function,
  boolean: Function,
  date: Function,
  time: Function,
  email: Function,
  phone: Function,
}

const Random: Random = {
  integer,
  string,
  boolean,
  date,
  time,
  email,
  phone
};

export default Random;
