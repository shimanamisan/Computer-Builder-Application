class StorageEntity {
  #storage;

  /**
   *
   * @param {*} apiData
   * @param {*} storageEntity
   */
  constructor(apiData, storageEntity) {
    if (apiData instanceof Array) {
      if (apiData.length === 0) throw 'An invalid argument was assigned.';
    }

    if (storageEntity !== null && storageEntity instanceof StorageEntity) {
      this.#storage = apiData;
    }
  }

  /**
   *
   * @returns
   */
  getStorage() {
    return this.#storage;
  }
}

export default StorageEntity;
