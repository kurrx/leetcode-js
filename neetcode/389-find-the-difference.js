/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  let xor = 0
  for (let i = 0; i <= s.length; i++) {
    if (i !== s.length) {
      xor ^= s.charCodeAt(i)
    }
    xor ^= t.charCodeAt(i)
  }
  return String.fromCharCode(xor)
}
