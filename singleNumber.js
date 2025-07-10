//given a non-empty array of ints nums, every element appears twice except one. Which is it?
const singleNumber = function(nums) {
	const numsMap = new Map();
	for(let i = 0; i < nums.length; i++){
		if(numsMap.has(nums[i])) {
			numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
		}else{
			numsMap.set(nums[i], 1)
		}

	}
	for(const [key, value] of numsMap.entries()) {
		if(value === 1){
			return key;
		}
	}

}
console.log(singleNumber([2,2,1]))
