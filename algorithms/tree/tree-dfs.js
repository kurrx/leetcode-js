/**
 * Time Complexity: O(nk) Where `k` is work done at each step
 * Space Complexity: O(n)
 */

/**
 * Tree DFS Recursive Pre/In/Post-Order Traversal
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeRecursiveDFS(root) {
  if (!root) return 0
  let answer = 0
  // Pre-order logic here
  treeRecursiveDFS(root.left)
  // In-order logic here
  treeRecursiveDFS(root.right)
  // Post-order logic here
  return answer
}

/**
 * Tree DFS Iterative Pre-Order Traversal
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeIterativePreOrderDFS(root) {
  if (!root) return 0
  const stack = [root]
  let answer = 0
  while (stack.length) {
    const node = stack.pop()
    // Do logic here
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return answer
}

/**
 * Tree DFS Iterative In-Order Traversal
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeIterativeInOrderDFS(root) {
  if (!root) return 0
  const stack = []
  let answer = 0,
    curr = root
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    // Do logic here
    curr = curr.right
  }
  return answer
}

/**
 * Tree DFS Iterative Post-Order Traversal
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeIterativePostOrderDFS(root) {
  if (!root) return 0
  const stack1 = [root],
    stack2 = []
  let answer = 0
  while (stack1.length) {
    const node = stack1.pop()
    stack2.push(node)
    if (node.left) stack1.push(node.left)
    if (node.right) stack1.push(node.right)
  }
  while (stack2.length) {
    const node = stack2.pop()
    // Do logic here
  }
  return answer
}
