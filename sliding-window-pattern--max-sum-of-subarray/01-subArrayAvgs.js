function avg_sub_arrays_naive(arr, k) {
  const averages = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    averages.push(sum / k);
  }

  return averages;
} // O(k * n) time

console.log(avg_sub_arrays_naive([1, 2, 3, 4, 5], 3)); // [2,3,4]
console.log(avg_sub_arrays_naive([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2,2.8,2.4,3.6,2.8]

function avg_sub_arrays(arr, k) {
  const averages = [];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      // add the average of the current window to averages array
      averages.push(windowSum / k);
      // subtract the integer at the windowStart from window Sum
      windowSum -= arr[windowStart];
      // move the window start one spot
      windowStart++;
    }
  }

  return averages;
} // O(n) time, O(n) space

console.log(avg_sub_arrays([1, 2, 3, 4, 5], 3)); // [2,3,4]
console.log(avg_sub_arrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2,2.8,2.4,3.6,2.8]