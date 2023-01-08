class CpuEntity {
  private cpu: apiData[];

  /**
   * コンストラクタ
   * @param apiData api から取得したデータ
   * @param cpuEntity CpuEntity オブジェクト
   */
  constructor(apiData: apiData[], cpuEntity: CpuEntity) {
    // 型を定義しない場合、配列であることを判定しなければ length プロパティで判定出来ない
    // if (apiData instanceof Array) {
    //   if (apiData.length === 0) throw 'An invalid argument was assigned.';
    // }

    if (apiData.length === 0) throw 'An invalid argument was assigned.';

    // 上記の配列と同様
    // if (cpuEntity !== null && cpuEntity instanceof CpuEntity) {
    //   this.#cpu = apiData;
    // }

    if (cpuEntity === null) throw 'An invalid argument was assigned.';

    this.cpu = apiData;
  }

  /**
   * ゲッター
   * @returns apiData[]
   */
  getCpu(): apiData[] {
    return this.cpu;
  }
}

export default CpuEntity;
