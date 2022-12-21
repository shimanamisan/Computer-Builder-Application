class ExtractWorkBenchMarkScore {
  static #WORK_CPU = 0.6;
  static #WORK_GPU = 0.25;
  static #WORK_MEMORY = 0.1;
  static #WORK_STORAGE = 0.05;

  #cpu;
  #gpu;
  #memory;
  #storage;
  #totalScore;

  constructor(cpu, gpu, memory, storage) {
    if (cpu === null || gpu === null || memory === null || storage === null) {
      throw 'An invalid argument was assigned.';
    }

    this.#cpu = cpu;
    this.#gpu = gpu;
    this.#memory = memory;
    this.#storage = storage;

    this.#totalScore = parseInt(this.#cpu[0].Benchmark * ExtractWorkBenchMarkScore.#WORK_CPU);
    this.#totalScore += parseInt(this.#gpu[0].Benchmark * ExtractWorkBenchMarkScore.#WORK_GPU);
    this.#totalScore += parseInt(this.#memory[0].Benchmark * ExtractWorkBenchMarkScore.#WORK_MEMORY);
    this.#totalScore += parseInt(this.#storage[0].Benchmark * ExtractWorkBenchMarkScore.#WORK_STORAGE);
  }

  getScore() {
    return this.#totalScore;
  }
}

export default ExtractWorkBenchMarkScore;
