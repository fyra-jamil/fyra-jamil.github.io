//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

function arrayFlattener()
{
  var ArraySample = [1.2,3,4];
  return ArraySample;
}

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1,[2,3],4,5]))

if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}
