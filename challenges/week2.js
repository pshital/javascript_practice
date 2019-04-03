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
  if ((people%40)==0)
  console.log (Math.floor(people/40));
else
  console.log (Math.floor(people/40) +1)     
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  for (i=0; i< arr.lenght; i++)
  { let count
    if(arr[i]=="sheep")
     count+=count
  }
  retrun count;
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
