// Create string
const doubleQuoteStr = "I'm string"
const templateStr = `Hello World! ${1000}`
const str = 'This is string'

// Merge two strings - O(n + m)
const mergedStr = 'ABC' + 'DEF' // 'ABCDEF'
const concatStr = 'ABC'.concat(' ', 'DEF') // 'ABC DEF'

// String Builder - O(n)
const arr = []
for (const char of str) arr.push(char)
arr.join('')

// This method is more efficient
let result = ''
for (const char of str) result += char

// Random Access - O(1)
str[0] // 'T'
str.at(-1) // 'g'
str.charAt(2) // 'i'
str.charCodeAt(0) // 84

// Other
const A = String.fromCharCode(65) // 'A'
const startsWith = str.startsWith('This') // true
const endsWithString = str.endsWith('string') // true
const includesIs = str.includes('is') // true
const indexOfIs = str.indexOf('is') // 2
const lastIndexOfIs = str.lastIndexOf('is') // 5
const matchUpper = str.match(/[A-Z]/g) // ['T']
const padEndDots = str.padEnd(20, '.') // 'This is string......'
const padStartDots = str.padStart(20, '.') // '......This is string'
const repeatedA = 'A'.repeat(4) // 'AAAA'
const replaceThis = str.replace('This', 'That') // 'That is string
const replaceAllIs = str.replaceAll('is', '0') // 'Th0 0 string'
const sliced = str.slice(5) // 'is string'
const split = str.split(' ') // ['This' 'is' 'string']
const sub = str.substring()
const trimmed = '  T  '.trim() // 'T'
