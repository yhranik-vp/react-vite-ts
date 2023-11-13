import { it, expect } from 'vitest'
import { add } from './util'

it('should add two numbers', () => {
  expect(add(1, 2)).toEqual(3)
})
