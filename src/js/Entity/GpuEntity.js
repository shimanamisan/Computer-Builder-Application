class GpuEntity {
  #gpu;

  constructor(apiData, gpuEntity) {
    if (apiData instanceof Array) {
      if (apiData.length === 0) throw 'An invalid argument was assigned.';
    }

    if (gpuEntity !== null && gpuEntity instanceof GpuEntity) {
      this.#gpu = apiData;
    }
  }

  getGpu() {
    return this.#gpu;
  }
}

export default GpuEntity;
