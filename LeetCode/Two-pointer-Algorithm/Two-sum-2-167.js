let array = [10, 40, 50, 60, 100];
target = 50;

// function twoSum(array, target) {
//    let start = 0;
//    let end = array.length - 1;
//    while (start <= end) {
//       let sum = array[start] + array[end];

//       if(sum=== target){
//           return[start+1, end+1];
//       }

//       else if(sum>target){
//           end--;
//       }
//       else{
//           start++;
//       }
//    }

// }
// console.log(twoSum(array,target))



function twoSum(array, target) {
     let start = 0;
     let end = array.length - 1;
     while (start <= end) {
         array[start] + array[end];
  
        if(array[start] + array[end]=== target){
            return[start+1, end+1];
        }
  
        else if(array[start] + array[end]>target){
            end--;
        }
        else{
            start++;
        }
     }
  
  }
  console.log(twoSum(array,target))
  