function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
    nums.forEach(function(i){
      let squareArray =Math.pow(nums[i],2)
    }) 
 
  
}
 
function camelCaseWords(words) {
  
  if (!words) throw new Error("words is required");
 
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  //let num
 // people.forEach(function(i){
    // num=people[i].subjects.length
  //})
 // return num
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for(let i=0; i<menu.length;i++){
    let arr =menu[i].ingredients
    
       for (let j=0; j< arr.length; j++)
               if(arr[j]==ingredient)
                  return true        
               
  }  
        return false        
}
function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  let n=[]
      arr1.forEach(i => {
        if(arr2.indexOf(i) >= 0){
          n.push(i)
        }
      });
      n = n.sort(function (a, b) { return a*1 - b*1; });
  var ret = [n[0]];
  for (var i = 1; i < n.length; i++) { 
    if (n[i-1] !== n[i]) {
      ret.push(n[i]);
    }
  }
return ret
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
