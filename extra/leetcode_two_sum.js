// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[j] === (target - nums[i])) {
  //       return [i, j]
  //     }
  //   }
  // }

  //create hashtable (value, index)
  const hash = {};
  nums.forEach((element, index) => {
    hash[element] = index;
  });

  const result = [];

  //Match hash to value
  nums.forEach((element, index) => {
    const leftValue = target - nums[index];
    
    if (hash[leftValue]) {
      result.push(index);
      result.push(hash[leftValue]);
    }
  });

  return result.length > 0 ? result : 'No SUM';

};

const case1 = [2, 7, 11, 15];
const target1 = 29;
console.log('twoSum(case1, target1): ', twoSum(case1, target1));