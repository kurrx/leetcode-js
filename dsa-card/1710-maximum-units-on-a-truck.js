/**
 * https://leetcode.com/problems/maximum-units-on-a-truck
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
  const n = boxTypes.length
  boxTypes.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]))
  let units = 0
  for (let i = 0; i < n; i++) {
    const boxes = Math.min(truckSize, boxTypes[i][0])
    units += boxes * boxTypes[i][1]
    truckSize -= boxes
    if (!truckSize) break
  }
  return units
}
