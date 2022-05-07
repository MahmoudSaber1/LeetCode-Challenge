/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let checkObj = {};
    
  for(let i = 0; i < nums.length; i++){

      let addedVal = target-nums[i];
      
      if(checkObj[addedVal] !== undefined){
          
        return [checkObj[target-nums[i]],i];
          
      }else{
          
        checkObj[nums[i]] = i;
      };
  };
};