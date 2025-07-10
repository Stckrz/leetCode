//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.
//
const reverseString = function(s) {
	if(s.length === 0) return s;
	let reversePointer = s.length - 1;
		for(let i = 0; i < s.length; i++){
		if(i >= reversePointer) return s;
				let holder;
				holder = s[i]
				s[i] = s[reversePointer]
				s[reversePointer] = holder
				reversePointer -= 1
		}
};
const reverseStringButWithABrain = function(s) {
	s.reverse();
	console.log(s)
};

console.log(reverseString(["h", "e", "l", "l", "o"]))
reverseStringButWithABrain(["h", "e", "l", "l", "o"])
