class StorageEntity {
	#storage;

	constructor(apiData, storageEntity) {
		if (apiData instanceof Array) {
			if (apiData.length === 0) throw 'An invalid argument was assigned.';
		}

		if (storageEntity !== null && storageEntity instanceof StorageEntity) {
			storageEntity.getStorage() === undefined ? this.#storage = apiData : this.#storage = storageEntity.getStorage();
		}
	}

	getStorage() {
		return this.#storage;
	}
}

export default StorageEntity;