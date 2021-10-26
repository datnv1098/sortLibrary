# sort

>   sortByKey, sortNumber, sortString, sortBool, sortDateTime

[![NPM](https://img.shields.io/npm/v/sort.svg)](https://www.npmjs.com/package/sort) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sort
```

## Usage and example

```jsx
const moment = require("moment");
const {sortNumber, sortBool, sortString, sortDateTime, sortByKey} = require('sort')

// example sortNumber
const orderNumber = sortNumber([3, 6, 87, 2, 4, 2, 5, 7, 8], 'asc');
console.log({orderNumber})

// example sortBool
const orderBool = sortBool([true, false, false, true, true, false, false, true, false], 'asc');
console.log({orderBool})

// example sortString
const orderString = sortString(['true', 'fae', undefined, null, 'false', 'sdf', 'ghfdgfg', '', 'nsaS', '', null], 'asc');
console.log({orderString})

// example sortDateTime
const orderDateTime = sortDateTime([
  moment().format(), moment().subtract(1,
    "minutes").format(), moment().add(1, "minutes").format(),
  moment().subtract(1, "minutes").format(),
  moment().add(1, "day").format(),
  moment().add(12, "day").format(),
  moment().subtract(12, "day").format()], 'asc');
console.log({orderDateTime})

// example orderByKey
const arrayDate = [
  {start: moment().format()},
  {start: moment().subtract(1, "minutes").format()},
  {start: moment().add(1, "minutes").format()},
  {start: moment().subtract(1, "minutes").format()},
  {start: moment().add(1, "day").format()},
  {start: moment().add(12, "day").format()},
  {start: moment().subtract(12, "day").format()}]
const arrayNum = [{num: 1}, {num: 2}, {num: 0}, {num: -34}, {num: 2}, {num: 2313}, {num: null}]
const orderByKey = sortByKey(arrayDate, "start", false, 'asc');
console.log({orderByKey})
```

## License

MIT © [datnv1098](https://github.com/datnv1098) [Clasfunc](https://classfunc.com/)
