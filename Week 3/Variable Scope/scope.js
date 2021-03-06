var animal = 'dog';

function myPet() {
  return animal;
}

function yourPet() {
  // The expectation for this function is to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared in the global scope
  // Note: writing return 'cat' below will not work
  
  let animal ='cat';
  return animal;
}

//open your browser console to check the results
console.log('myPet result: ' + myPet());
console.log('yourPet result: ' + yourPet());

module.exports = { myPet: myPet, yourPet: yourPet };
