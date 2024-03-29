var searchInsert = function (nums, target) {
   let start = 0;
   let end = nums.length - 1;
   let mid;
   while (start <= end) {
      mid = Math.floor(start + end) / 2;
      if (nums[mid] === target) {
         return mid;
      } else if (nums[mid] < target) {
         start = mid + 1;
      } else {
         end = mid - 1;
      }
   }
   return{
     ceiling : mid,
     floor : mid-1,
   }
};

console.log(searchInsert([1,2,3,45,6],3))
