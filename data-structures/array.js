// Create array
const emptyArr = []
const predefinedLengthArr = new Array(10) // [10 x empty]
const charArr = Array.from('abcd') // ['a', 'b', 'c', 'd']
const zeroArr = new Array(4).fill(0) // [0, 0, 0, 0]
const arr = [1, 2, 3, 4, 5, 6]

// Merge two arrays - O(n + m)
const mergedArray = arr.concat([7, 8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Random Access - O(1)
const firstElement = arr[0] // 1
const lastElement = arr.at(-1) // 6

// Pushing to End - O(1)
const pushNewLength = arr.push(7) // [1, 2, 3, 4, 5, 6, 7] -> 7

// Popping from End - O(1)
const poppedElement = arr.pop() // [1, 2, 3, 4, 5, 6] -> 7

// Unshifting to Begin - O(n)
const unshiftNewLength = arr.unshift(0) // [0, 1, 2, 3, 4, 5, 6] -> 7

// Shifting from Begin - O(n)
const shiftedElement = arr.shift() // [1, 2, 3, 4, 5, 6] -> 0

// Insertion - O(n)
arr.splice(1, 0, 1000) // [1, 1000, 2, 3, 4, 5, 6] -> []

/// Deletion - O(n)
const deletedElements = arr.splice(1, 1) // [1, 2, 3, 4, 5, 6] -> [1000]

// Modify - O(1)
arr[0] = 0 // [0, 2, 3, 4, 5, 6]

// Search - O(n)
const includes3 = arr.includes(3) // true

const indexOf3 = arr.indexOf(3) // 2
const greaterThan3 = arr.find(v => v > 3) // 4
const greaterThan3Index = arr.findIndex(v => v > 3) // 3

const lastIndexOf3 = arr.lastIndexOf(3) // 2
const greaterThan3FromEnd = arr.findLast(v => v > 3) // 6
const greaterThan3FromEndIndex = arr.findLastIndex(v => v > 3) // 5

const isAllGreaterThan3 = arr.every(v => v > 3) // false
const isAnyGreaterThan3 = arr.some(v => v > 3) // true

// Traversal - O(n)
for (let i = 0; i < arr.length; i++) console.log(arr[i], v)
for (const num of arr) console.log(num)
arr.forEach((v, i) => console.log(v, i))

// Copy part to itself - O(m)
arr.copyWithin(1, 3, 5) // [0, 4, 5, 4, 5, 6]

// Reverse - O(n)
arr.reverse() // [6, 5, 4, 5, 4, 0]
const copyReversed = arr.toReversed() // [0, 4, 5, 4, 5, 6]

// Other - O(n)
const mappedArr = arr.map(v => v + 1) // [7, 6, 5, 6, 5, 1]
const allGreaterThan3 = arr.filter(v => v > 3) // [6, 5, 4, 5, 4]
const slice = arr.slice(2, 4) // [4, 5]
const strArr = arr.join('-') // '6-5-4-5-4-0'

const sum = arr.reduce((sum, v) => sum + v, 0) // 24
const rightSum = arr.reduceRight((sum, v) => sum + v, 0) // 24

const flatArr = [1, 2, [3, 4, [5, 6]]].flat(Infinity) // [1, 2, 3, 4, 5, 6]
const flatMappedArr = arr.flatMap(v => (v === 0 ? [5, 4] : v)) // [6, 5, 4, 5, 4, 5, 4]

// Sort - TC: O(n log n) | SC: O(log n)
arr.sort((a, b) => a - b) // [0, 4, 4, 5, 5, 6]
const copySorted = arr.toSorted((a, b) => b - a) // [6, 5, 5, 4, 4, 0]
