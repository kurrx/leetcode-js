// Create HashMap
const mapWithPredefinedValues = new Map([
  [1, 1],
  [2, 4],
  [3, 9],
])
const map = new Map()

// Insert element - O(1)
map.set('a', 1) // { a:1 }
map.set('b', 2) // { a:1, b:2 }
map.set('c', 3) // { a:1, b:2, c:3 }
map.set('a', 4) // { a:4, b:2, c:3 }

// Get element - O(1)
const a = map.get('a') // 4

// Check element - O(1)
const hasB = map.has('b') // true

// Delete element - O(1)
map.delete('c') // { a:4, b:2 }

// Size - O(1)
const size = map.size // 2

// Keys - O(n)
const keys = Array.from(map.keys()) // ['a', 'b']

// Values - O(n)
const values = Array.from(map.values()) // [4, 2]

// Entries - O(n)
const entries = Array.from(map.entries()) // [['a', 4], ['b', 2]]

// Clear
map.clear() // {}

// Traversal
for (const [key, value] of map) {
  console.log(key, value)
}

map.forEach((value, key) => {
  console.log(key, value)
})
