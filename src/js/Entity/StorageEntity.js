class StorageEntity {
	#storage;

	constructor(apiData, storageEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (storageEntity !== null && storageEntity instanceof StorageEntity) {
			this.#storage = apiData;
		}
	}
}

export default StorageEntity;
