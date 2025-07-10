//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//

// const twoSum = function(nums, target) {
// 	let secondPointer = 1;
// 	while(secondPointer <= nums.length) {
// 		for(let i = secondPointer - 1; i < nums.length; i++) {
// 			if(nums[i] + nums[secondPointer] === target && i !== secondPointer){
// 				return [i, secondPointer]
// 			} 
// 		}
// 			secondPointer++
// 	}
// }
const twoSum = function(nums, target) {
	const diffMap = new Map();
	for(let i = 0; i < nums.length; i++) {
		if(!diffMap.has(target - nums[i])) {
			diffMap.set(nums[i], i)
		}else{
			return [diffMap.get(target - nums[i]), i]
		}
	}
}
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 3], 6))
console.log(twoSum([2, 5, 5, 11], 10))
