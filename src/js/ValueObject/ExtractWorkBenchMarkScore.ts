class ExtractWorkBenchMarkScore {
  private WORK_CPU: number = 0.6;
  private WORK_GPU: number = 0.25;
  private WORK_MEMORY: number = 0.1;
  private WORK_STORAGE: number = 0.05;

  private cpu: apiData[];
  private gpu: apiData[];
  private memory: apiData[];
  private storage: apiData[];
  private totalScore: number;

  /**
   * コンストラクタ
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

    this.totalScore = Math.floor(this.cpu[0].Benchmark * this.WORK_CPU);
    this.totalScore += Math.floor(this.gpu[0].Benchmark * this.WORK_GPU);
    this.totalScore += Math.floor(this.memory[0].Benchmark * this.WORK_MEMORY);
    this.totalScore += Math.floor(this.storage[0].Benchmark * this.WORK_STORAGE);
  }

  /**
   * ゲッター
   */
  getScore(): number {
    return Math.floor(this.totalScore);
  }
}

export default ExtractWorkBenchMarkScore;
