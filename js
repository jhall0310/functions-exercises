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
//vowelcount
function countVowels(word) {
  var count = 0;
  word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
      if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
        count++;
    }
    return count;
}

countVowels("stealing");
//count
var result = countVowels("stealing");
console.log(result);
/// find array
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
// findWdi(['a','b','c']) // returns false
function findWdi(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'wdi'){
      return true;
    }
  }
  return false;
}
///
// displays 3

//note these last two i can use some help with I have a hard time understanding them
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var tier = '';

		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}
}

//pyramid

unction printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
		}
		for(var k = 0; k < i; k++) {
			tier += '* ';
		}
		console.log(tier);
	}
}
