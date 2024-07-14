"use strict";
/* 1. Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz". */

const printNumbersAndWords = function () {
	for (let i = 1; i < 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
			continue;
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};
printNumbersAndWords();

/* 2. Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result. */

function evaluate(expression) {
	expression = expression.replace(/\s+/g, "");
	let arithmaticArr = [];
	let numberCounter = 0;
	let j = 0;

	// Creating an array with numbers datatype and operators
	for (let i = 0; i < expression.length; i++) {
		if (expression[i] != "+" && expression[i] != "-") {
			numberCounter = numberCounter * 10 + (expression[i] - 0);
		} else {
			arithmaticArr[j++] = numberCounter;
			numberCounter = 0;
			arithmaticArr[j++] = expression[i];
		}
	}
	arithmaticArr[j] = numberCounter;

	// Evaluating expression

	for (let i = 1; i <= arithmaticArr.length; i += 2) {
		if (arithmaticArr[i] === "+") {
			arithmaticArr[i + 1] = arithmaticArr[i - 1] + arithmaticArr[i + 1];
		}
		if (arithmaticArr[i] === "-") {
			arithmaticArr[i + 1] = arithmaticArr[i - 1] - arithmaticArr[i + 1];
		}
	}

	return arithmaticArr[arithmaticArr.length - 1];
}
console.log(evaluate("65536-536+1"));

/* 3. Write a function that takes a nested array and returns a flattened array.*/

function flattenArray(array) {
	let flattenedArr = [];
	for (let i of array) {
		if (Array.isArray(i)) {
			i.map((item) => flattenedArr.push(item));
		} else {
			flattenedArr.push(i);
		}
	}
	return flattenedArr;
}

console.log(flattenArray([[12, 45], -4, "nisarg", ["vishal", "ramesh"]]));

/* 4. Write a function that checks if two given strings are anagrams of each other.*/

function isAnagrams(str1, str2) {
	str1 = str1.replace(/\s+/g, "");
	str2 = str2.replace(/\s+/g, "");

	if (str1.length === str2.length) {
		for (let i = 0; i < str1.length; i++) {
			if (!str2.includes(str1[i])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
console.log(isAnagrams("dormitory", "dirty room"));

/* 5. Write a function that takes an array and returns a new array with duplicates removed.*/
function condensedArray(arr) {
	let newArr = [];
	arr.map((item) => {
		if (!newArr.includes(item)) {
			newArr.push(item);
		}
	});
	return newArr;
}
console.log(condensedArray([1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4]));

/* 6. Write a function that takes a string and capitalizes the first letter of each word in the string. */
function capitalizeFirstLetter(str) {
	let newStr = "";
	newStr = str
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");

	return newStr;
}
console.log(capitalizeFirstLetter("hELlo WoRld"));

/* 7. Write a function that generates the first n numbers of the Fibonacci sequence. */
function fibonacci(n) {
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	let b = 1;
	let c = 1;
	let d = 0;

	let sequence = [0, 1, 1];
	if (n > 0 && n >= 3) {
		for (let i = 1; i <= n - 3; i++) {
			d = b + c;
			sequence.push(d);
			b = c;
			c = d;
		}
	}
	return sequence;
}

console.log(fibonacci(12));

/* 8. Implement a simple HashMap class with put, get, and remove methods. */
class HashMap {
	constructor() {
		this.map = {};
	}

	// Hash function to generate a unique key for any given key
	hash(key) {
		let hash = 0;
		const strKey = key.toString();
		for (let i = 0; i < strKey.length; i++) {
			hash = (hash << 5) - hash + strKey.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	}

	// Put a key-value pair into the HashMap
	put(key, value) {
		const hashedKey = this.hash(key);
		this.map[hashedKey] = value;
	}

	// Get the value for a given key from the HashMap
	get(key) {
		const hashedKey = this.hash(key);
		return this.map.hasOwnProperty(hashedKey) ? this.map[hashedKey] : undefined;
	}

	// Remove a key-value pair from the HashMap
	remove(key) {
		const hashedKey = this.hash(key);
		if (this.map.hasOwnProperty(hashedKey)) {
			delete this.map[hashedKey];
		}
	}
}

const hashMap = new HashMap();
hashMap.put("name", "Nisarg");
console.log(hashMap.get("name"));
hashMap.remove("name");
console.log(hashMap.get("name"));

/* 9. Write a function that filters out even numbers from an array. */

function evenNumbersArray(array) {
	return array.filter((item) => item % 2 === 0);
}
console.log(evenNumbersArray([1, 2, 3, 4, 5, 6, "nisarg", "ramesh", 45, 46]));

/* 10. Write a function that converts a given string to title case (capitalizing the first letter of each word). */
function titleCase(str) {
	let newStr = "";
	newStr = str
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");

	return newStr;
}
console.log(titleCase("hELlo WoRld"));
