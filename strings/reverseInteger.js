const reverse = (x) => {
	const isNegative = x < 0;
	const reversedString = Math.abs(x).toString().split('').reverse().join('')
	const reversedNumber = parseInt(reversedString)
	if(reversedNumber > 2 ** 31 - 1) {
		return 0;
	}
	return isNegative ? -reversedNumber : reversedNumber;
}

console.log(reverse(123))
console.log(reverse(-123))



