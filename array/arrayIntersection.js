//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
var intersect = function(nums1, nums2) {
	const countMap = new Map();
	const overlappingArray = [];
	for(num of nums1) {
		if(countMap.get(num)){
			countMap.set(num, countMap.get(num) + 1);
		}else{
			countMap.set(num, 1);
		}
	}
	for(num of nums2) {
		if (countMap.has(num) && countMap.get(num) > 0){
			overlappingArray.push(num);
			countMap.set(num, countMap.get(num) - 1);
		}
	}
	return overlappingArray;
}
console.log(intersect([1, 2, 2, 1], [2, 2]))
