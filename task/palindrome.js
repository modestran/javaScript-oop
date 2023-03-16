/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/

/*    
    if (x < 0) return false;

  let item = x.toString().split("");

  for (let i = 0; i < Math.floor(item.length / 2); i++) {
    if (!(item[i] === item[item.length - 1 - i])) return false;
  }

  return true;
*/

var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
