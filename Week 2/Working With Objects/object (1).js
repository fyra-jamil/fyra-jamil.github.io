/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/

function getProduct(productId) {

  var obj = {
    id : productId,
    serialNumber : 'WS579000',
    manufacturer : 'Apple',
    price : 1500
  };
  return obj;
}
//open your browser console to check the results
console.log('result: ' + JSON.stringify(getProduct(1)));


if (typeof module !== 'undefined') {
  module.exports = getProduct;
}
