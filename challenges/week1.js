function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase()+word.slice(1)
  // Add your code here!
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let intials =[]; 
  intials= firstName.charAt(0)+ "." +lastName.charAt(0)
  return intials
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let  newPrice =originalPrice+ (originalPrice*vatRate /100)
  return parseFloat(newPrice.toFixed(2))
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let newPrice=0;
     newPrice =originalPrice- (originalPrice*reduction /100)
  return parseFloat(newPrice.toFixed(2))
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let i=str.length;
  if ((i%2)!==0)
  {
    i= parseInt( i/2)
  return str[i]
  }
  else
  return str[i/2-1]+str[i/2]

  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var newString = "";
    for (var i = word.length - 1; i >= 0; i--) {
        newString+=word[i];
    }
return newString
  // Add your code here!
    
    
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newStrings= []
  
   words.forEach(word => {
     let newString =""
     for (var i = word.length - 1; i >= 0; i--) 
        newString+=word[i];   
    newStrings.push(newString)
    
  });

  
 return newStrings
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count=0;
  users.forEach(item => {
   if (item.type=="Linux")
   count++; 
  });
  return count
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum=0
  let mean=0, i=0

  for(i=0;i< scores.length;i++)
  {
    sum+=scores[i]
  }
  i=scores.length
mean=sum/i
return parseFloat( mean.toFixed(2))

  
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3===0 && n%5===0)
  return "fizzbuzz"
  else if (n%3===0)
  return "fizz"
  else if (n%5===0)
  return "buzz"
  else
  return n

  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
