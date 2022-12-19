class MemoryEntity {
	#memory;

	constructor(apiData, memoryEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (memoryEntity !== null && memoryEntity instanceof MemoryEntity) {
			memoryEntity.getMemory() === undefined ? this.#memory = apiData : this.#memory = memoryEntity.getMemory();
		}
	}

	getMemory() {
		return this.#memory;
	}
}

export default MemoryEntity;