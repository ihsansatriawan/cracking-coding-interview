// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures? 

const isUnique = (word) => {
  const wordLength = word.length;
  if (wordLength > 128) {return false;}

  const char_set = {};
  for (let i = 0; i < wordLength; i++) {
    const currChar = word[i];

    if (char_set[currChar]) {
      return false;
    }

    char_set[currChar] = true;
  }
  return true;
};

/* TEST */

console.log('isUnique(\'ihin\'): ', isUnique('ihin'));
console.log('isUnique(\'ihsa\'): ', isUnique('ihsa'));