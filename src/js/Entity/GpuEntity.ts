class GpuEntity {
  private gpu: apiData[];

  /**
   * コンストラクタ
   * @param apiData api から取得したデータ
   * @param gpuEntity GpuEntity オブジェクト
   */
  constructor(apiData: apiData[], gpuEntity: GpuEntity) {
    if (apiData.length === 0) throw 'An invalid argument was assigned.';

    if (gpuEntity === null) throw 'An invalid argument was assigned.';

    this.gpu = apiData;
  }

  /**
   * ゲッター
   * @returns apiData[]
   */
  getGpu(): apiData[] {
    return this.gpu;
  }
}

export default GpuEntity;
