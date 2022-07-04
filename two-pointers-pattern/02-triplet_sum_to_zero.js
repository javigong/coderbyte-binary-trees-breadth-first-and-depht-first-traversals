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
 * - Here we use one pointer moving at a slow pace, while
 * the other pointer moves at twice the speed.
 *
 * Problem:
 *
 * Given an array of unsorted numbers, find all unique
 * triplets in it that add up to zero.
 *
 * [-3, 0, 1, 2, -1, 1, -2]
 *
 * answer: [[-3, 1, 2], [-2, 0, 2],[-2, 1, 1],[-1, 0, 1]]
 *
 *
 * Two Pointer Approach
 *
 * 1. Sort the array
 * 2. Loop over the array
 *  a. Take the negative of the array[i] as a targetSum
 *  b. Look for the pair of ints that add to the targetSum
 *    using two pointers as we did in the previous video
 */

function tripletsToZero(arr) {
  arr.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let targetSum = -arr[i];

    // we want to avoid duplicate triplets
    // if the element we're looking at is the
    // same as the element we just looked at,
    // its triplet will be identical, skip it.
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    searchPair(arr, targetSum, i + 1, triplets);
  }

  return triplets;
}

function searchPair(arr, targetSum, leftPointer, triplets) {
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = arr[leftPointer] + arr[rightPointer];
    // we found a triplet!
    if (currentSum == targetSum) {
      triplets.push([-targetSum, arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
      rightPointer--;
      // move the left pointer up until we get an integer that is different
      while (
        leftPointer < rightPointer &&
        arr[leftPointer] === arr[leftPointer - 1]
      ) {
        leftPointer++;
      }
      while (
        leftPointer < rightPointer &&
        arr[rightPointer] === arr[rightPointer + 1]
      ) {
        rightPointer++;
      }
    } else if (targetSum > currentSum) {
      leftPointer++;
    } else if (targetSum < currentSum) {
      rightPointer--;
    }
  }
}

console.log(tripletsToZero([-3, 0, 1, 2, -1, 1, -2])); // [[-3, 1, 2], [-2, 0, 2],[-2, 1, 1],[-1, 0, 1]]
console.log(tripletsToZero([-5, 2, -1, -2, 3])); // [[-5, 2, 3], [-2, -1, 3]]
