
function isPalindrome(str) {
   let start = 0;
   let end = str.length - 1;
   while (start <= end) {
      if (str[start] === str[end]) {
         start++;
         end--;
      } 
      else {
         return false;
      }
   }
   return true;
}



function firstPalindrome(array) {
   let str;
   for (let i = 0; i < array.length; i++) {
       str = array[i];
      let result = isPalindrome(str);
      if (result) return true;
   }
   return '';
}


console.log(firstPalindrome(['ada', 'djfkdj','what']));
