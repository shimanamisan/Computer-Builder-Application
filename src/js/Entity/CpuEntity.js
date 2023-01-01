class CpuEntity {
  #cpu;

  /**
   *
   * @param {*} apiData
   * @param {*} cpuEntity
   */
  constructor(apiData, cpuEntity) {
    if (apiData instanceof Array) {
      if (apiData.length === 0) throw 'An invalid argument was assigned.';
    }

    if (cpuEntity !== null && cpuEntity instanceof CpuEntity) {
      this.#cpu = apiData;
    }
  }

  /**
   *
   * @returns
   */
  getCpu() {
    return this.#cpu;
  }
}

export default CpuEntity;
