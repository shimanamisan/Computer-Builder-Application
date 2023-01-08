class ExtractGameBenchMarkScore {
  /**
   * ベンチマークの計算レート
   */
  private GAME_CPU: number = 0.25;
  private GAME_GPU: number = 0.6;
  private GAME_MEMORY: number = 0.125;
  private GAME_HDD_STORAGE: number = 0.025;
  private GAME_SSD_STORAGE: number = 0.1;

  /**
   * 各種 api データ
   */
  private cpu: apiData[];
  private gpu: apiData[];
  private memory: apiData[];
  private storage: apiData[];
  private totalScore: number;

  /**
   * コンストラクター
   * @param cpu api から取得したデータ
   * @param gpu api から取得したデータ
   * @param memory api から取得したデータ
   * @param storage api から取得したデータ
   */
  constructor(cpu: apiData[], gpu: apiData[], memory: apiData[], storage: apiData[]) {
    if (cpu === null || gpu === null || memory === null || storage === null) {
      throw 'An invalid argument was assigned.';
    }

    this.cpu = cpu;
    this.gpu = gpu;
    this.memory = memory;
    this.storage = storage;

    this.totalScore = Math.floor(this.cpu[0].Benchmark * this.GAME_CPU);
    this.totalScore += Math.floor(this.gpu[0].Benchmark * this.GAME_GPU);
    this.totalScore += Math.floor(this.memory[0].Benchmark * this.GAME_MEMORY);
    // SSDだった場合は計算スコアを変更する
    this.totalScore +=
      this.storage[0].Type === 'SSD'
        ? this.storage[0].Benchmark * this.GAME_SSD_STORAGE
        : this.storage[0].Benchmark * this.GAME_HDD_STORAGE;
  }

  /**
   * ゲッター
   */
  getScore(): number {
    return Math.floor(this.totalScore);
  }
}

export default ExtractGameBenchMarkScore;
