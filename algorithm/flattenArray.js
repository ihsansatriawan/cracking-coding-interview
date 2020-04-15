// Example
// Input: [1,[2,[3],4],[5]]
// Output: [1,2,3,4,5]

const helper = (newArray, currArray) => {
  currArray.forEach((element) => {
    if (Array.isArray(element)) {
      helper(newArray, element);
    } else {
      newArray.push(element);
    }       
  });
};

const flattenArray = (input) => {
  if (input === null || input.length === 0) {return [];}
  const result = [];

  helper(result, input);

  return result;
};



console.log('flattenArray[1,[2,[3],4],[5]]: ', flattenArray([1,[2,[3],4],[5]]));