// Given a string, find the length of the longest substring
// that contains no more than k distinct characters

// acccpbbebi, k = 3
// answer: cccpbb ->  6

/**
 * Algorithm Summary:
 *
 * 1. Initialize windowStart and windowEnd at the oth index
 * 2. Add character in window to letterFrequencyTracker if it doesn't exist there already
 * 3. Increment character frequency in letterFrequencyTRacker
 * 4. Is the number of letters in the letterFrequencyTracker greater than k?
 *  - If yes:
 *    A. Shrink window until the letters in the letters in the letterFrequencyTracker are <= k
 *    B. Repeat from Step 2
 *  - If no:
 *    A. Grow sliding window to next element by incrementing windowEnd
 *    B. Capture window length in longestSubstrSofar
 *    C. Repeat from Step 2
 */

function longest_substr_with_k_distinct_chars(str, k) {
  let windowStart = 0,
    letterFrequencies = {},
    longestSubstrSoFar = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let windowEndChar = str[windowEnd];

    // if the letter hasn't ben seen yet
    // initialize it in the letterFrequenciesTracker
    if (!letterFrequencies[windowEndChar]) {
      letterFrequencies[windowEndChar] = 0;
    }
    letterFrequencies[windowEndChar]++;

    // this code is only run if we need to shrink our window
    while (Object.keys(letterFrequencies).length > k) {
      let windowStartChar = str[windowStart];
      // removing a character from the window
      letterFrequencies[windowStartChar]--;
      if (letterFrequencies[windowStartChar] === 0) {
        delete letterFrequencies[windowStartChar];
      }
      windowStart++;
    }

    // we have the correct amount of letters in our window
    longestSubstrSoFar = Math.max(
      longestSubstrSoFar,
      windowEnd - windowStart + 1
    );
  }

  return longestSubstrSoFar;
}

console.log(longest_substr_with_k_distinct_chars("acccpbbebi", 3)); // 6
console.log(longest_substr_with_k_distinct_chars("aaaabbcccd", 1)); // 4
console.log(longest_substr_with_k_distinct_chars("abcdefg", 10)); // 7
