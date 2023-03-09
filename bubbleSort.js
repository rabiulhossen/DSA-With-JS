let arr = [1, 4, 6, 3, 8, 70, 65, 50];

function bubbleSort(arr) {
     // ascending order
   let temp;
   for (var i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
         if (arr[i] > arr[j]) {
          //swap array
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
         }
      }
   }
}
bubbleSort(arr);
console.log(arr);
