/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
function construct(grid) {
  function dfs(startR, startC, endR, endC) {
    const halfSize = Math.floor((endR - startR) / 2)
    if (halfSize === 0) {
      return new _Node(!!grid[startR][startC], true)
    }
    const topLeft = dfs(startR, startC, endR - halfSize, endC - halfSize)
    const topRight = dfs(startR, startC + halfSize, endR - halfSize, endC)
    const bottomLeft = dfs(startR + halfSize, startC, endR, endC - halfSize)
    const bottomRight = dfs(startR + halfSize, startC + halfSize, endR, endC)
    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      return new _Node(topLeft.val, true)
    }
    return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
  }
  const n = grid.length
  return dfs(0, 0, n, n)
}
