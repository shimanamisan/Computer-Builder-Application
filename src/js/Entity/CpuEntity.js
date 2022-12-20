class CpuEntity {
	#cpu;

	constructor(apiData, cpuEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (cpuEntity !== null && cpuEntity instanceof CpuEntity) {
			this.#cpu = apiData;
		}
	}
}

export default CpuEntity;
