// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other. 

const transformHelper = (str) => {
  if (typeof str === 'string') {
    return str.split('').sort().join('');
  }
};

const checkPermutate = (str1, str2) => {
  if (str1.length !== str2.length) {return false;}

  return transformHelper(str1) === transformHelper(str2);
};

console.log('-------FIRST METHOD---------');
console.log('checkPermutate(\'ihsan\', \'sahin\'): ', checkPermutate('ihsan', 'sahin'));
console.log('checkPermutate(\'ihsane\', \'sahinf\'): ', checkPermutate('ihsane', 'sahinf'));
console.log('-------SECOND METHOD---------');

const checkPermutate2 = (word1, word2) => {
  if (word1.length !== word2.length) {return false;}

  const hashTemp = {};

  for (let i = 0; i < word1.length; i++) {
    const currChar = word1[i];

    if (hashTemp[currChar]) {
      hashTemp[currChar]++;
    } else {
      hashTemp[currChar] = 1;
    }

  }

  for (let j = 0; j < word2.length; j++) {
    hashTemp[word2[j]]--;
  }

  for (d in hashTemp) {
    if (hashTemp[d] !== 0) {return false;}
  }

  return true;

};

console.log('checkPermutate2(\'ihsane\', \'sahinf\'): ', checkPermutate2('ihsane', 'sahinf'));
console.log('checkPermutate2(\'ihsan\', \'sahin\'): ', checkPermutate2('ihsan', 'sahin'));