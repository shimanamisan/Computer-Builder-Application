class MemoryEntity {
	#memory;

	constructor(apiData, memoryEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (memoryEntity !== null && memoryEntity instanceof MemoryEntity) {
			this.#memory = apiData;
		}
	}
}

export default MemoryEntity;
