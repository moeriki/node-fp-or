'use strict';

function fpOrWrapper(defaultValue) {
  return function fpOr(value) {
    return value ? value : defaultValue;
  };
}

module.exports = fpOrWrapper;
