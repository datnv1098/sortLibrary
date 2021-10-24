import moment from "moment";

/**
 *
 * @param array{[]} (array)
 * @param key{string} (key in obj element you can order)
 * @param isDateTime{boolean} (true || false, default false)
 * @param typeOrder{'asc'|'desc'} ( default 'asc')
 * @return {null|*[]}
 */
export const sortByKey = (array = [], key = "", isDateTime, typeOrder) => {
  const isAsc = typeOrder === 'asc' ? 0 : 1
  if(!array?.length) return [];
  if(!array[0] || !array[0][key]) return null
  const type = typeof array[0][key] || null;
  if(type === "string"){
    if(isDateTime) {
      return array.sort(function (a, b) {
        return isAsc ? moment(a[key]).isBefore(b[key]) : moment(a[key]).isAfter(b[key])
      })
    }
    return array.sort(function (a, b) {
      return isAsc ? ('' + a[key]?.attr).localeCompare(b[key]?.attr) : ('' + b[key]?.attr).localeCompare(a[key]?.attr);
    })
  }
  else if(type === "number"){
    return array.sort(function(a, b) {
      return isAsc ? a[key] - b[key] : b[key] - a[key];
    });
  }
  else if(type === "boolean"){
    return array.sort(function(a, b) {
      // asc => true values first  || else false values first
      return isAsc ? ((a[key] === b[key])? 0 : a[key] ? -1 : 1 ) : ((a[key] === b[key])? 0 : a[key] ? 1 : -1);
    });
  }
  return array
}

/**
 *
 * @param array{[]}
 * @param typeOrder{'asc'|'desc'}
 * @return {*[]}
 */
export const sortNumber = (array = [], typeOrder) => {
  const isAsc = typeOrder === 'asc' ? 0 : 1
  if(!array?.length) return []
  return array.sort(function(a, b) {
    return isAsc ? a - b : b - a;
  });
}

/**
 *
 * @param array{[]}
 * @param typeOrder{'asc'|'desc'}
 * @return {*[]}
 */
export const sortString = (array = [], typeOrder) => {
  const isAsc = typeOrder === 'asc' ? 0 : 1
  if(!array?.length) return []
  return array.sort(function (a, b) {
    return isAsc ? ('' + a?.attr).localeCompare(b?.attr) : ('' + b?.attr).localeCompare(a?.attr);
  })
}

/**
 *
 * @param array{[]}
 * @param typeOrder{'asc'|'desc'}
 * @return {*[]}
 */
export const sortBool = (array = [], typeOrder) => {
  const isAsc = typeOrder === 'asc' ? 0 : 1
  if(!array?.length) return []
  return array.sort(function(a, b) {
    // asc => true values first  || else false values first
    return isAsc ? ((a === b)? 0 : a ? -1 : 1 ) : ((a === b)? 0 : a ? 1 : -1);
  });
}

/**
 *
 * @param array{[]}
 * @param typeOrder{'asc'|'desc'}
 * @return {*[]}
 */
export const sortDateTime = (array = [], typeOrder) => {
  const isAsc = typeOrder === 'asc' ? 0 : 1
  if(!array?.length) return []
  return array.sort(function (a, b) {
    return isAsc ? moment(a).isBefore(b) : moment(a).isAfter(b)
  })
}
