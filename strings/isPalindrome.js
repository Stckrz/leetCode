const isPalindrome = (s) => {
	const removedStuff = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
	return removedStuff === removedStuff.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))




