function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == "Manchester")
    return true
  else
    return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  
  if ((people % 40) == 0)
    return(Math.floor(people / 40));
  else
    return(Math.floor(people / 40) + 1)
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  let count=0
  for (i=0; i< arr.length;i++)
  { 
    
    if(arr[i]==="sheep")
    count++;
  }
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let str= person.address.postCode.charAt(0)+ person.address.postCode.charAt(1)
  if(str=="M1")
  return true
  else
  return false
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
