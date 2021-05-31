/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;
let age;

function isOldEnoughToVote(age) {
  
  // return true or false based on the age
  
  if (age > 18 || age == 18)
  {
    return true;
  }
  else
  {
    return false;
  }
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));

if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}
