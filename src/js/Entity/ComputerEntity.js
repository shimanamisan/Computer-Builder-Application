class ComputerEntity {
	#cpu;
	#gpu;
	#memory;
	#storage;

	constructor(apiData, partsType) {
		if (partsType === 'cpu') this.#cpu = apiData;
		if (partsType === 'gpu') this.#gpu = apiData;
		if (partsType === 'memory') this.#memory = apiData;
		if (partsType === 'storage') this.#storage = apiData;
	}
}

export default ComputerEntity;
