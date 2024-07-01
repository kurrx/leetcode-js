/**
 * @param {TreeNode} root
 * @return {string}
 */
function tree2str(root) {
  let str = root.val.toString()
  if (root.left) str += `(${tree2str(root.left)})`
  else if (root.right) str += '()'
  if (root.right) str += `(${tree2str(root.right)})`
  return str
}
