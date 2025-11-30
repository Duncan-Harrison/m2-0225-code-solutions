'use strict';
function getRangeReport(start, end) {
  if (start > end) return null;
  const fullRange = [];
  let totalRange = 0;
  for (let i = start; i <= end; i++) {
    fullRange.push(i);
    totalRange += i;
  }
  const oddsRange = [];
  const evensRange = [];
  for (let j = 0; j < fullRange.length; j++) {
    if (fullRange[j] % 2 === 0) {
      evensRange.push(fullRange[j]);
    } else {
      oddsRange.push(fullRange[j]);
    }
  }
  const averageRange = totalRange / fullRange.length;
  const result = {
    total: totalRange,
    odds: oddsRange,
    evens: evensRange,
    range: fullRange,
    average: averageRange,
  };
  return result;
}
console.log('Example One: ', getRangeReport(1, 10));
console.log('Example Two: ', getRangeReport(1, 5));
