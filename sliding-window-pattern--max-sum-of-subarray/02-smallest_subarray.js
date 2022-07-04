function smallestContiguousSubArray(arr, s) {
  let windowStart = 0;
  let windowSum = 0;
  let minLengthSofar = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    // grow the window
    windowSum += arr[windowEnd]
    // is windowSum >= s?
    // if not, continue iteration, grow the window

    // if yes... shrink the window (until windowSum < s again)
    while (windowSum >= s){
      // shrink the window, decrement windowStart, remove that first element in window from new shrunken window
      let currentWindowLength = windowEnd - windowStart + 1;
      minLengthSofar = Math.min(minLengthSofar, currentWindowLength);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLengthSofar === Infinity){
    return 0;
  } 

  return minLengthSofar;
}

console.log(smallestContiguousSubArray([1, 3, 2, 2, 4, 5], 6));
console.log(smallestContiguousSubArray([2, 1, 5, 2, 8, 7], 7));
