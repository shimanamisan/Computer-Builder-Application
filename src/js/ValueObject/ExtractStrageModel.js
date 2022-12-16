class ExtractStrageModel {
	#values;

	constructor(size, brand, array) {
		if (size === '' || brand === '' || array.length === 0) {
			throw 'An invalid argument was assigned.';
		}

		const matchDataForSize = [];
		const matchDataForBrand = [];

		// サイズ（TBかGB）の文字列を含んでいるModelのデータを抽出
		for (let i = 0; i < array.length; i++) {
			if (array[i].Model.indexOf(size) !== -1) matchDataForSize.push(array[i]);
		}

		for (let i = 0; i < matchDataForSize.length; i++) {
			if (matchDataForSize[i].Brand.indexOf(brand) !== -1) matchDataForBrand.push(matchDataForSize[i]);
		}

		this.#values = matchDataForBrand;
	}

	getModel() {
		return this.#values;
	}
}

export default ExtractStrageModel;
