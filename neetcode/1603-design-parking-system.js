class ParkingSystem {
  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, medium, small) {
    this.space = [big, medium, small]
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    if (this.space[carType - 1] === 0) {
      return false
    }
    this.space[carType - 1]--
    return true
  }
}
