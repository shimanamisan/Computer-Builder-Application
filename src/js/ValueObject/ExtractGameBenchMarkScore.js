class ExtractGameBenchMarkScore {
	static #GAME_CPU = 0.25;
	static #GAME_GPU = 0.6;
	static #GAME_MEMORY = 0.125;
	static #GAME_HDD_STORAGE = 0.025;
	static #GAME_SSD_STORAGE = 0.1;

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

		this.#totalScore = parseInt(this.#cpu[0].Benchmark * ExtractGameBenchMarkScore.#GAME_CPU);
		this.#totalScore += parseInt(this.#gpu[0].Benchmark * ExtractGameBenchMarkScore.#GAME_GPU);
		this.#totalScore += parseInt(this.#memory[0].Benchmark * ExtractGameBenchMarkScore.#GAME_MEMORY);
		this.#totalScore +=
      this.#storage[0].Type === 'SSD'
      	? parseInt(this.#storage[0].Benchmark * ExtractGameBenchMarkScore.#GAME_SSD_STORAGE)
      	: parseInt(this.#storage[0].Benchmark * ExtractGameBenchMarkScore.#GAME_HDD_STORAGE);
	}

	getScore() {
		return this.#totalScore;
	}
}

export default ExtractGameBenchMarkScore;
