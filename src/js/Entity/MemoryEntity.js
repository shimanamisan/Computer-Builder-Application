class MemoryEntity {
  #memory;

  /**
   *
   * @param {*} apiData
   * @param {*} memoryEntity
   */
  constructor(apiData, memoryEntity) {
    if (apiData instanceof Array) {
      if (apiData.length === 0) throw 'An invalid argument was assigned.';
    }

    if (memoryEntity !== null && memoryEntity instanceof MemoryEntity) {
      this.#memory = apiData;
    }
  }

  /**
   *
   * @returns
   */
  getMemory() {
    return this.#memory;
  }
}

export default MemoryEntity;
