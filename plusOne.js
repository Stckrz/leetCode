//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

//Increment the large integer by one and return the resulting array of digits.

const plusOne = function(digits) {
	let carriedDigits = 1;

	for(let i = digits.length - 1; i >= 0; i--){
		if(carriedDigits === 0) {
			return digits
		}
		if(digits[i] < 9) {
			digits[i] += carriedDigits
			carriedDigits -= 1;
		} else if (digits[i] === 9) {
		if(i === 0 && carriedDigits > 0) {
			digits[i] = 0;
			digits.unshift(1)
			return digits;
		}
			digits[i] = 0
		}
	}
	return digits;
}
console.log('9', plusOne([8]))
console.log('1235', plusOne([1, 2, 3, 4]))
console.log('1240', plusOne([1, 2, 3, 9]))
console.log('1300', plusOne([1, 2, 9, 9]))
console.log('2000', plusOne([1, 9, 9, 9]))
console.log('10000', plusOne([9, 9, 9, 9]))
