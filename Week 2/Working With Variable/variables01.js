/*Instructions
 - Greet your friend by printing a message to the console.
*/
var myFriend = 'Fira'

///////////////
function greetings() {
  return 'Greetings'+myFriend
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());


if (typeof module !== 'undefined') {
  module.exports = greetings;
}
