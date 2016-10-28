function combineWords(word1, word2) {
  	var result = word1+word2;
  	return result;

}
console.log(result);
combineWords('dog', 'house');

//9th power
function toTheNthPower(num, power) {
  var result = 1;
  for(var i = num; i < power; i++);
   result *= num;
   return result;
}


console.log(result);

toTheNthPower(4,5);
//Area of Circle
function areaOfACircle(radius) {
   return Math.PI * (radius * radius);
   }

areaOfACircle(4);

var result = areaOfACircle(2);
console.log(result);

function repeatPhrase(phrase, n) {
  var length = n;
  for(var i = 0; i < length; i++);

  return phrase;
}

repeatPhrase("Hello", 5);
// pythagoreanTheorem
function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(pythagorean(4, 3));

//divisible by 3
function isXEvenlyDivisibleByY(x, y) {
    var result = ( x % y === 0);
      return result;
  }

  isXEvenlyDivisibleByY(99,3);

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
