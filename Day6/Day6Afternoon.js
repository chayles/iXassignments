
// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
  var oneString = sentence.split("").sort().join('').trim();
  for (var i=0; i < oneString.length; i++){
  	if (oneString[i] === oneString[i+1]){
  		return "no";
  	}
  } 
  return "yes";
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var list = [1,2,3,4,5,6,7,8,9,10];
	var numSort = numbers.sort(function(a,b){return a - b});
	for (var i=0; i<numbers.length; i++){
		if (numbers[i]!==list[i]){
			return i+1;
		}
	}
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function getPrime(n){
	for(var i=2; i < n; i++){
		if (n%i == 0)
			return false;
	}
	return true;
}

function nPrimeNums(n) {
	var num= 2;
	var string = "";
	var count = 0;
	while (n > count){
		if (getPrime(num) === true){
			string += (num + ",");
			count++;
		}
		num++
	}
	return string.substring(0,string.length -1);
}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {

}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {

    }
    return person;
}


// Return the number of "children" obj has
function numChildren(obj) {

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {

}