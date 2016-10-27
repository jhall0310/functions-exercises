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
console.log(result)
