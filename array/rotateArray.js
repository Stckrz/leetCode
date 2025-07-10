// var rotate = function(nums, k) {
// 	const numsMap = new Map();
// 	for(let i = 0; i < nums.length; i++) {
// 		numsMap.set((i + k) % nums.length, nums[i]);
// 	}
// 	for(let i = 0; i < nums.length; i++){
// 		nums[i] = numsMap.get(i);
// 	}
// 	return nums;
// }
var rotate = function(nums, k) {
	const copy = [...nums]
	for(let i = 0; i < nums.length; i++) {
		let newIdx = (i + k) % nums.length;
		nums[newIdx] = copy[i];
	}
}
