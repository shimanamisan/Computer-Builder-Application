class CpuEntity {
	#cpu;

	constructor(apiData, cpuEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (cpuEntity !== null && cpuEntity instanceof CpuEntity) {
			cpuEntity.getCpu() === undefined ? this.#cpu = apiData : this.#cpu = cpuEntity.getCpu();
		}
	}

	getCpu() {
		return this.#cpu;
	}
}

export default CpuEntity;