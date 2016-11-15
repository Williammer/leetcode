[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


# Overview

This is my leetcode javaScript solutions and corresponding tests.

Each problem contains my analysis and lessons learned, available in the problem's solution.js.


# Usage

## 1. Install
``` bash
$ npm install
```

## 2. Handle problem's solution/spec file
Add a problem:
``` bash
$ npm run task -- add <problem number> <problem title>
```
Remove a problem:
``` bash
$ npm run task -- rm <problem number>
```

## 3. Testing
Test all problems:
``` bash
$ npm test
```
``` bash
$ npm run test
```
``` bash
$ npm run test:node
```
``` bash
$ npm run test:browser
```

Test one problem:
``` bash
$ npm test -- <problem number>
```
``` bash
$ npm run test -- <problem number>
```
``` bash
$ npm run test:browser  -- <problem number>
```


# Solutions
check out: [http://williammer.github.io/leetcode-js/](http://williammer.github.io/leetcode-js/)