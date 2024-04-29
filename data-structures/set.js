// Create HashSet
const setWithPredefinedValues = new Set([1, 2, 3, 4])
const set = new Set()

// Insert element - O(1)
set.add(1) // { 1 }
set.add(2) // { 1, 2 }
set.add(3) // { 1, 2, 3 }
set.add(1) // { 1, 2, 3 }

// Check element - O(1)
set.has(2) // true

// Delete element - O(1)
set.delete(3) // { 1, 2 }

// Size - O(1)
const size = set.size // 2

// Values - O(n)
const values = Array.from(set.values())
// same -> Array.from(set.keys())

// Clear
set.clear() // {}

// Traversal
for (const value of set) {
  console.log(value)
}

set.forEach(value => {
  console.log(value)
})
