/* eslint-env jest */

'use strict';

const fpOr = require('../index.js');

it('should return value', () => {
  const getOrHello = fpOr('Hello');
  expect(getOrHello('Hi')).toBe('Hi');
});

it('should return default value', () => {
  const getOrHello = fpOr('Hello');
  expect(getOrHello(undefined)).toBe('Hello');
});
