// Basic implementation of Two Sum problem in JS

// Given an UNSORTED array, return indices of two numbers that add up to target
// assumptions: array is unsorted, numbers are unique, a single answer exists for each input, elements cannot be reused

// potential edge cases to consider for problem variations: empty array, array of length 1, duplicates allowed, negative numbers allowed, sorted input

// approach: utilize space (hash table) for optimization on time

// iterate through array, checking at each index whether or not a complement(remainder) exists within storage
// IF there exists a complement, then return current index and index of the complement
// IF NOT, then store the current element to be used as a potential complement

// STORAGE WITHIN THE HASH
// for every element seen, store pairs as --> key(element) : value(index)

function twoSum(array, target) {
  let memo = {};

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let complement = target - array[i];
    if (!memo.hasOwnProperty(complement)) {
      memo[current] = i;
    } else {
      return [i, memo[complement]];
    }
  }

  //for troubleshooting if nothing returned after for loop
  return [-1, -1];
}
