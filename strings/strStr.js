const haystack = (haystack, needle) => {
	for (let i = 0; i < haystack.length; i++) {
		if(haystack[i] === needle[0]) {
			if(haystack.slice(i, i + needle.length) === needle){
				return i
			}
		}
	}
	return -1;
}
console.log(haystack("sadbutsad", "sad"))
console.log(haystack("leetcode", "leeto"))
console.log(haystack("hello", "ll"))

