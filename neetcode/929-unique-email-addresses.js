/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  return new Set(emails.map(normalizeEmail)).size
}

/**
 * @param {string} email
 * @return {string}
 */
function normalizeEmail(email) {
  let normalized = '',
    atFound = false,
    afterPlus = false
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') atFound = true
    else if (email[i] === '+') afterPlus = true
    if ((!afterPlus && email[i] !== '.') || atFound) normalized += email[i]
  }
  return normalized
}
