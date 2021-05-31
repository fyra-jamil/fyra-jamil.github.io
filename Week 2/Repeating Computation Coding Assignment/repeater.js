//Write a function here to display "Hello World" on the console
function Greet()
{
  return console.log('Hello World');
}
//Write another function here that will print "Hello World" to the console every 3 seconds
function IntervalLoop()
{
  var interval = setInterval(Greet(),3000);
  return interval;
}
