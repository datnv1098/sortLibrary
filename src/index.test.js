const {sortNumber, sortBool, sortString, sortDateTime, sortByKey} = require("./index");
const moment = require("moment");

const orderNumber = sortNumber([3, 6, 87, 2, 4, 2, 5, 7, 8], 'asc');
console.log({orderNumber})

const orderBool = sortBool([true, false, false, true, true, false, false, true, false], 'asc');
console.log({orderBool})

const orderString = sortString(['true', 'fae', undefined, null, 'false', 'sdf', 'ghfdgfg', '', 'nsaS', '', null], 'asc');
console.log({orderString})

const orderDateTime = sortDateTime([
  moment().format(), moment().subtract(1,
    "minutes").format(), moment().add(1, "minutes").format(),
  moment().subtract(1, "minutes").format(),
  moment().add(1, "day").format(),
  moment().add(12, "day").format(),
  moment().subtract(12, "day").format()], 'asc');
console.log({orderDateTime})

const arrayDate = [
  {start: moment().format()},
  {start: moment().subtract(1, "minutes").format()},
  {start: moment().add(1, "minutes").format()},
  {start: moment().subtract(1, "minutes").format()},
  {start: moment().add(1, "day").format()},
  {start: moment().add(12, "day").format()},
  {start: moment().subtract(12, "day").format()}]

const arrayNum = [
  {num: 1},
  {num: 2},
  {num: 0},
  {num: -34},
  {num: 2},
  {num: 2313},
  {num: null}]

const orderByKey = sortByKey(arrayNum, "num", false, 'asc');
console.log({orderByKey})

