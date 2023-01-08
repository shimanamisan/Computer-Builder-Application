class StorageEntity {
  private storage: apiData[];

  /**
   * コンストラクタ
   * @param apiData api から取得したデータ
   * @param storageEntity StorageEntity オブジェクト
   */
  constructor(apiData: apiData[], storageEntity: StorageEntity) {
    if (apiData.length === 0) throw 'An invalid argument was assigned.';

    if (storageEntity === null) throw 'An invalid argument was assigned.';

    this.storage = apiData;
  }

  /**
   * ゲッター
   * @returns apiData[]
   */
  getStorage(): apiData[] {
    return this.storage;
  }
}

export default StorageEntity;
