/**
 * Two Pointers:
 *
 * In many problems involving arrays or linked lists
 * where you need to find a set of elements that fulfill
 * certain constrains, we can use the Two Pointers pattern to avoid looping
 * over the array multiples times.
 *
 * We are able to process two element per loop instead of
 * just one.
 *
 * - Here we use Two Pointer, each starting from the beginning
 * and the end until they both meet.
 *
 * - Here we use one pointer moving at a slow pace, while
 * the other pointer moves at twice the speed.
 *
 * Problem:
 *
 * Given an array of unsorted numbers, find the length of
 * the smallest subarray that when sorted will sort the
 * whole array.
 *
 * [1, 3, 2, 0, -1, 7, 10]
 *
 * answer: [1, 3, 2, 0, -1] -> 5
 *
 *
 * Two Pointer Approach
 *
 * 1. Initialize leftPointer at the start of the array and rightPointer at the end
 * 2. Walk leftPointer forward until you get to an element that is less that its prev
 * 3. Walk rightPointer backwards until you get to an element that is greater than its prev
 * 4. Find the maximum and minimum of this subarray
 * 5. Extend the subarray form the beginning to include any number greater than the
 *    minimum of the subarray
 * 6. Extend the subarray from the end to include any number less than the maximum of the subarray
 */

function findMinimumWindow(arr) {
  let leftPointer = 0,
    rightPointer = arr.length - 1;

  // increment the leftPointer until we get to an element
  // that is greater that its next number
  while (
    arr[leftPointer] < arr[leftPointer + 1] &&
    leftPointer < arr.length - 1
  ) {
    leftPointer++;
  }

  // denotes that the whole array is already sorted
  if (leftPointer === arr.length - 1) return 0

  // decrement the rightPointer until we get to an element that is less that its next number
  while (arr[rightPointer] > arr[rightPointer - 1] && rightPointer > -1) {
    rightPointer--;
  }

  const subArr = arr.slice(leftPointer, rightPointer + 1)

  const subArrMin = Math.min(...subArr);
  const subArrMax = Math.max(...subArr);

  // extend window to the left to include elements that are greater than the subArrMax
  while (arr[leftPointer - 1] > subArrMin  && leftPointer > 0) {
     leftPointer--
  }

  // extend window to the right to include elements that are less than the subArrMin
  while (arr[rightPointer + 1] < subArrMax && rightPointer < arr.length - 1) {
    rightPointer++;
  }

  return rightPointer - leftPointer + 1;
}

console.log(findMinimumWindow([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(findMinimumWindow([1, 2, 5, 7, 3, 10, 11, 12])); // 3
console.log(findMinimumWindow([1, 2, 3])); // 0
console.log(findMinimumWindow([4, 3, 2, 1])); // 4
console.log(findMinimumWindow([12, 7, 8, 1, 2, 0, 10, 11])); // 8
