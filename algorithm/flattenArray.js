// Example
// Input: [1,[2,[3],4],[5]]
// Output: [1,2,3,4,5]


const flattenArray = (input) => {
  
  const result = [];

  for(var i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      // result.push(...flattenArray(input[i]))
      const temp = flattenArray(input[i]);
      temp.forEach(el => {
        result.push(el);
      });
    } else {
      result.push(input[i]);
    }
  }
  
  return result;
};



console.log('flattenArray[1,[2,[3],4],[5]]: ', flattenArray([1,[2,[3],4],[5]]));