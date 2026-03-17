function getUniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

const numbers = [10, 2, 5, 2, 10, 1, 8, 5];
console.log(getUniqueSorted(numbers));
