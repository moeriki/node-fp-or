<p align="center">
  <h3 align="center">fp-or</h3>
  <p align="center">A tiny 'or' function for functional programming.<p>
  <p align="center">
    <a href="https://travis-ci.org/Moeriki/node-fp-or">
      <img src="https://travis-ci.org/Moeriki/node-fp-or.svg?branch=master" alt="Build Status"></img>
    </a>
    <a href="https://coveralls.io/github/Moeriki/node-fp-or?branch=master">
      <img src="https://coveralls.io/repos/github/Moeriki/node-fp-or/badge.svg?branch=master" alt="Coverage Status"></img>
    </a>
    <a href="https://snyk.io/test/github/moeriki/node-fp-or">
      <img src="https://snyk.io/test/github/moeriki/node-fp-or/badge.svg" alt="Known Vulnerabilities"></img>
    </a>
  </p>
</p>

## Install

```
$ npm install --save fp-or
```

## Usage

```javascript
const or = require('fp-or');

const result = [0, 1, 0, 2, 0, 3].map(or(5));

// result = [5, 1, 5, 2, 5, 3];
```
