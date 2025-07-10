// var containsDuplicate = function(nums) {
// 	const numsSet = new Set(nums);
//
// 	if(numsSet.size === nums.length){
// 		return 'false'
// 	}else{
// 		return 'true'
// 	}
// }
// console.log(containsDuplicate([1, 2, 3, 4]))

//this was too slow
// var containsDuplicate = function(nums) {
// 	const numberSet = [];
// 	for(let i = 0; i < nums.length; i++) {
// 		if(numberSet.includes(nums[i])) {
// 			return true
// 		}else{
// 			numberSet.push(nums[i])
// 		}
// 	}
// 	return false
// }
// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))


var containsDuplicate = function(nums) {
	const numsSet = new Set(nums);
	return numsSet.size === nums.length ? false : true;
}
