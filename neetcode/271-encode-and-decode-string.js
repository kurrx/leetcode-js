/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  let result = ''
  for (const str of strs) result += str.replaceAll('/', '//') + '/:'
  return result
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
  const n = s.length,
    result = []
  let curr = '',
    i = 0
  while (i < n) {
    if (s[i] === '/') {
      if (s[i + 1] === ':') {
        result.push(curr)
        curr = ''
      } else if (s[i + 1] === '/') {
        curr += '/'
      }
      i += 2
    } else {
      curr += s[i++]
    }
  }
  return result
}
