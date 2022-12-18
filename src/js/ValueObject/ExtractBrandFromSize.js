class ExtractBrandFromSize {
	#values;

	constructor(value, array) {
		if (value === '' || array.length === 0) {
			throw 'An invalid argument was assigned.';
		}

		const hashMap = {};

		for (let i = 0; i < array.length; i++) {
			// モデルに記載されているストレージのサイズと前項で選択したストレージのサイズとマッチしている要素を抽出
			const isMatch = array[i].Model.split(' ').filter(x => x.includes(value));

			if (isMatch.length !== 0) {
				if (hashMap[array[i].Brand] === undefined) hashMap[array[i].Brand] = array[i].Brand;
			}
		}

		this.#values = Object.keys(hashMap);
	}

	getBrands() {
		return this.#values;
	}
}

export default ExtractBrandFromSize;
