import { it, expect } from 'vitest';
import FMock from '../src/index';
const mock = FMock.mock;

// function type
it('array type', () => {
  expect(mock).toBeTypeOf('function');
  expect(mock([1, 2, 3])).toBeInstanceOf(Array);
});

// test params
it('array params', () => {
  const res2 = mock([1, 2, 3]);
  expect(res2).toEqual([1, 2, 3]);

  const res3 = mock({
    'arr|count=3': [{
      'integer|min=4&max=10': '@integer',
      phone: '@phone',
    }]
  });
  expect(res3).toEqual({
    arr: expect.arrayContaining([{
      integer: expect.any(Number), 
      phone: expect.stringMatching(/^1[34578]\d{9}$/)
    }])
  });
});
