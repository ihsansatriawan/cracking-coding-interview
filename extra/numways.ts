// Give "a" encode to 1 .. "z" to 26
// Finde total of decode way
// decode 112 = "aab", "kb", "al"
// numways(112) = 3

// source https://www.youtube.com/watch?v=qli-JCrSwuk
// "You can actually use just two integers ( perv1, and prev2)
// instead of memo array - and thus solve it in O(1) space", Shimon 1973


type Helper = (number: string, k: number, memo: Array<number>) => number;
const helper: Helper = (number, k, memo) => {
  if (k === 0) return 1;
  const length = number.length;
  if (number[length - k] === '0') return 0;
  if (memo[k - 1]) return memo[k - 1]
  let result = helper(number, k - 1, memo);
  if ((2 <= k) && parseInt(number.substring(length - k, length - k + 2 )) <= 26 ) {
    result = result + helper(number, k - 2, memo)
  }
  memo[k-1] = result
  return result
};

type Numways = (number: string) => number;
const numways: Numways = number => helper(number, number.length, []);

console.log(numways(process.argv[2]));
// e.g ts-node numways.ts 111