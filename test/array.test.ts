import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('array type', () => {
  expect(Random.array).toBeTypeOf('function');
  expect(Random.array()).toBeInstanceOf(Array);
});

// test params
it('array params', () => {
  const res1 = Random.array();
  expect(res1).toEqual([]);

  const res2 = Random.array({
    raw: [1, 2, 3]
  });
  expect(res2).toEqual([1,2,3]);

  const res3 = Random.array({
    raw: ['1', 2],
    count: 3
  });
  expect(res3).toEqual(['1', 2, '1', 2, '1', 2]);

});
