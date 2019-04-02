function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city=="Manchester")
  return true
  else 
  return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let n
  if(people<=40)
   n=1
  else
  { 
   n=parseInt(people/40)+1
  }
   return n 
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
