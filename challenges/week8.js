
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === n)
        return nums[i + 1]
        if((i === nums.length-1)&&(nums[i]===n)) 
        return null;      
      }
   
    return null;
  };


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count1 = 0, count0 = 0;
  for (let i = 0; i < str.length; i++) {

    if (str[i] === '0')
      count0++;
    if (str[i] === '1')
      count1++
  }
  return { 1: count1, 0: count0 }
};

const reverseNumber = number => {
  if (number === undefined) throw new Error("n is required");
  var revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = 0;
  for(var i=0;i<arrs.length;i++){
     for(var j=0;j<arrs[i].length;j++){
         sum += arrs[i][j];
     }
    }
    return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length>1){
  let n = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = n;
}
  return (arr)
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  searchTerm=searchTerm.toLowerCase()
  for (let key in haystack)
  {
    const value = haystack[key];
    if(typeof value==="string"){
     if (value.toLowerCase().includes(searchTerm)){
      return true
     }
    }
  } 
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const wordFrequency = {};
  const words = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(' ');
  words.forEach(word => {
    if (wordFrequency[word] === undefined) {
      wordFrequency[word] = 1;
    } else {
    wordFrequency[word] += 1
    }
  })
  return wordFrequency;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
