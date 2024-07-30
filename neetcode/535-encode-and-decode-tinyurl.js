const DOMAIN = 'https://tinyurl.com'
const nextID = (function () {
  let id = 0
  return () => id++
})()
const storage = new Map()

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
function encode(longUrl) {
  const ID = nextID()
  const URL = `${DOMAIN}/${ID}`
  storage.set(ID, longUrl)
  return URL
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
  const ID = Number(shortUrl.replace(`${DOMAIN}/`, ''))
  return storage.get(ID)
}
