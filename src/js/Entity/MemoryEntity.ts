class MemoryEntity {
  private memory: apiData[];

  /**
   * コンストラクタ
   * @param apiData api から取得したデータ
   * @param memoryEntity MemoryEntity オブジェクト
   */
  constructor(apiData: apiData[], memoryEntity: MemoryEntity) {
    if (apiData.length === 0) throw 'An invalid argument was assigned.';

    if (memoryEntity === null) throw 'An invalid argument was assigned.';

    this.memory = apiData;
  }

  /**
   * ゲッター
   * @returns apiData[]
   */
  getMemory(): apiData[] {
    return this.memory;
  }
}

export default MemoryEntity;
