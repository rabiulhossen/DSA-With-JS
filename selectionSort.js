let arr = [3, 5, 67, 9, 1, 10, 6];

function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let minIndex = arr[i];
      for (let j = i; j < arr.length; j++) {
         if (arr[j] < minIndex) {
            minIndex = j;
         }
      }

      //swap indices
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
   }
}

selectionSort(arr)
console.log(arr)
