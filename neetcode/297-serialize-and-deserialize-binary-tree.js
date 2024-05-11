/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  return serializeLevelOrder(root)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  return deserializeLevelOrder(data)
}

/**
 * Pre Order Serialization
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serializePreOrder(root) {
  if (!root) return '[]'
  const stack = [root],
    result = []
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      result.push(null)
    } else {
      result.push(node.val)
      stack.push(node.right)
      stack.push(node.left)
    }
  }
  return JSON.stringify(result)
}

/**
 * Pre Order DeSerialization
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserializePreOrder(data) {
  // console.log('Pre Order:', data)
  if (data === '[]') return null
  const arr = JSON.parse(data).reverse()
  function build() {
    if (arr.at(-1) === null) return arr.pop()
    const node = new TreeNode(arr.pop())
    node.left = build()
    node.right = build()
    return node
  }
  return build()
}

/**
 * Level Order Serialization
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serializeLevelOrder(root) {
  if (!root) return '[]'
  const queue = [root],
    result = []
  let hasNotNull = true,
    lastNonNull = 2,
    nextLastNonNull,
    nextLength
  while (queue.length && hasNotNull) {
    const length = queue.length
    hasNotNull = false
    nextLastNonNull = 0
    nextLength = 0
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i >= lastNonNull) continue
      if (!node) {
        result.push(null)
      } else {
        result.push(node.val)
        // Left
        queue.push(node.left)
        nextLength++
        if (node.left) nextLastNonNull = nextLength
        // Right
        queue.push(node.right)
        nextLength++
        if (node.right) nextLastNonNull = nextLength
        // Left/Right
        if (node.left || node.right) hasNotNull = true
      }
    }
    lastNonNull = nextLastNonNull
  }
  return JSON.stringify(result)
}

/**
 * Pre Order DeSerialization
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserializeLevelOrder(data) {
  // console.log('Level Order:', data)
  if (data === '[]') return null
  const arr = JSON.parse(data),
    n = arr.length
}
