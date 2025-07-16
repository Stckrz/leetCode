const longestCommonPrefix = (arr) => {
	let longestPrefix = [];
	arr.sort((a, b) => b.length - a.length)
	for(let i = 0; i < arr[0].length; i++) {
		for(let j = 1; j < arr.length; j++) {
			if(arr[j][i] !== arr[0][i]){
				return longestPrefix.join('');
			}
		}
		longestPrefix.push(arr[0][i])
	}
	return longestPrefix.join('');
}

console.log(longestCommonPrefix(["flower","flow","flightless"]))

[ 'f', 'l' ]
