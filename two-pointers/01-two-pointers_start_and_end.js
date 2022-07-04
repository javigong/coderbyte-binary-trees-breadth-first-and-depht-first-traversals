/**
 * Given an array of sorted numbers and a
 * target sum, find a pair in the array whose
 * sum is equal to the given target.
 *
 * [1, 2, 3, 4, 5], target sum = 7
 *
 * answer: [5, 2]
 */

function findPair(arr, targetSum) {
  let leftPointer = 0,
    rightPointer = arr.length - 1,
    pair = null;

  // get the element at each pointer, and add to get a pairSum
  // is pairSum === targetSum? If yes, return it
  // is pairSum < targetSum? If yes, increment leftPointer
  // is pairSum > targetSum? If yes, decrement rightPointer

  while (leftPointer != rightPointer) {
    pairSum = arr[leftPointer] + arr[rightPointer];
    if (pairSum === targetSum) {
      pair = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (pairSum < targetSum) {
      leftPointer++;
    } else if (pairSum > targetSum) {
      rightPointer--;
    }
  }

  return pair;
}

console.log(findPair([1, 2, 3, 4, 5], 7)); // [2, 5]
console.log(findPair([1, 6, 8, 9, 10], 14)); // [6, 8]
console.log(findPair([1, 3, 4, 6, 8, 10], 12)); //  [4, 8]
console.log(findPair([1, 2, 3, 4, 5], 10)); // null
