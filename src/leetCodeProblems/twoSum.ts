// function twoSum(nums: number[], target: number): any {
//   let tempSum: number = nums[0] + nums[1]
//   console.log(nums)
//   if (tempSum === target) {
//     return [0, 1]
//   };

//   for (let i = 1; i < nums.length - 1; i++) {
//     console.log('tempSum ', tempSum);
//     console.log(nums[i - 1])
//     console.log(nums[i])
//     console.log(nums[i + 1])
//     tempSum = tempSum - nums[i - 1] + nums[i + 1]
//     debugger
//     if (tempSum === target) return [i, i + 1]
//   }
// };


function twoSum(nums: number[], target: number): any {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) return [i, j]
    }
  }
};
export { twoSum };