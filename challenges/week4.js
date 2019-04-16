function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let small = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1)
      small.push(nums[i])
  }
  /*arr.forEach(function(item){
    if(item<1)
    small.push(item)
  })
  console.log(small)
  const smallerThan1= arr.map(function(num){
  if (num<1)
  return num
  else
  return 
  })*/
  return small
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newNames = []
  names.forEach(element => {
    if (element.charAt(0) == char)
      newNames.push(element)
  });
  return newNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verb = []
  for (let i = 0; i < words.length; i++) {
    let newarray = words[i].split(' ')
    if (newarray[0]=="to")
      verb.push(words[i])
  }
  return verb
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integerArray = []
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i]))
      integerArray.push(nums[i])
  }
  return integerArray
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arrayofCities = []
  for (let i = 0; i < users.length; i++) {
    arrayofCities.push(users[i].data.city.displayName)
  }
  return arrayofCities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareArray = []
  for (let i = 0; i < nums.length; i++) {
    {
      squareArray[i] = (Math.sqrt(nums[i]).toPrecision(3))
      //squareArray[i] = parseFloat(squareArray[i])
     //squareArray[i]= Number(squareArray[i])
    }
  }
  return(squareArray)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let specificStr = []
  sentences.forEach(function (line) {
    let line1 = line.toLowerCase()
    if (line1.includes(str))
      specificStr.push(line)

  })
  return specificStr
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longerSide = []
  for (let i = 0; i < triangles.length; i++)
    longerSide.push(Math.max(...triangles[i]))
  return longerSide
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
