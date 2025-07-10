//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.
 
const moveZeroes = function(nums) {
	let pointerPosition = 0;
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] !== 0) {
			nums[pointerPosition] = nums[i]
			pointerPosition += 1
		}
	}
	for(let i = pointerPosition; i < nums.length; i++) {
		nums[i] = 0;
	}
	return nums;

};
console.log("0,1,0,3,12", moveZeroes([0, 1, 0, 3, 12]))
