type Obj = {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
};

function getRangeReport(start: number, end: number): Obj | null {
  if (start > end) return null;
  const fullRange: number[] = [];
  let totalRange: number = 0;
  for (let i = start; i <= end; i++) {
    fullRange.push(i);
    totalRange += i;
  }
  const oddsRange: number[] = [];
  const evensRange: number[] = [];
  for (let j = 0; j < fullRange.length; j++) {
    if (fullRange[j] % 2 === 0) {
      evensRange.push(fullRange[j]);
    } else {
      oddsRange.push(fullRange[j]);
    }
  }
  const averageRange: number = totalRange / fullRange.length;
  const result: Obj = {
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
