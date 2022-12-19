class GpuEntity {
	#gpu;

	constructor(apiData, gpuEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (gpuEntity !== null && gpuEntity instanceof GpuEntity) {
			gpuEntity.getGpu() === undefined ? this.#gpu = apiData : this.#gpu = gpuEntity.getGpu();
		}
	}

	getGpu() {
		return this.#gpu;
	}
}

export default GpuEntity;