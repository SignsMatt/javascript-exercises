const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let result = 0;
  let min = a < b ? a : b;
  let max = a < b ? b : a;

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
