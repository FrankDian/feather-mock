import { it, expectTypeOf } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

it('date type', () => {
  expectTypeOf(Random.date).toBeFunction();
  expectTypeOf(Random.date()).toBeString();
});

it('time type', () => {
  expectTypeOf(Random.time).toBeFunction();
  expectTypeOf(Random.time()).toBeString();
});
