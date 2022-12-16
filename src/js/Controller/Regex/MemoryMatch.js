import MemoryViews from '../../Viwes/MemoryViews';

class MemoryMatch {
	/**
   * メモリのモデルを選択した枚数とBrandから判定する
   * @param {Array} modelData
   * @returns
   */
	static isMatch(modelData) {
		const memoryNum = document.getElementById(MemoryViews.memoryQuantityId).value;
		const memoryBrand = document.getElementById(MemoryViews.memoryBrandId).value;
		// Modelのメモリの枚数の部分とパターンがマッチするか検索する
		const reg = new RegExp(`${memoryNum}x`);

		const result = modelData.filter(x => {
			if (x.Brand === memoryBrand) {
				return x.Model.match(reg);
			}
		});

		return result;
	}
}

export default MemoryMatch;
