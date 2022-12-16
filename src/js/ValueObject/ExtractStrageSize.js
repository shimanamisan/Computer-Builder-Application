class ExtractStrageSize {
	#values;

	// 考え方
	// 1. 特定の文字列が含まれているか検索する. 戻り値は配列
	// 2. ループさせて値を抽出する. 重複した値を含まないためにHashMapを使用
	// 3. キーにストレージのサイズが格納される. ここではまだソートされていない
	// 4. オブジェクトのキーを取り出し配列に格納
	// 5. TB, GB の文字列を除去して数字だけ取り出す
	// 6. 取り出した数字を数値に変換する. ここで小数点の値もあるので変換のフォーマットには注意する
	// 7. 変換した値を TB, GB の値で各種ソートして文字列を連結させる
	// 8. 最終的に2つの配列を結合させて要素に追加する
	constructor(values) {
		if (values.length === 0) {
			throw 'An invalid argument was assigned.';
		}

		const hashMap = {};

		for (let i = 0; i < values.length; i++) {
			const currentData = values[i].Model.split(' ').filter(str => str.includes('GB') || str.includes('TB'));

			if (currentData.length !== 0) {
				if (hashMap[currentData] === undefined) hashMap[currentData] = currentData;
			}
		}

		const stringSizeNumLists = Object.keys(hashMap);

		const tbNumLists = [];
		const gbNumLists = [];

		for (let i = 0; i < stringSizeNumLists.length; i++) {
			if (stringSizeNumLists[i].indexOf('TB') !== -1) tbNumLists.push(parseFloat(stringSizeNumLists[i].replace('TB', '')));
			if (stringSizeNumLists[i].indexOf('GB') !== -1) gbNumLists.push(parseFloat(stringSizeNumLists[i].replace('GB', '')));
		}

		tbNumLists.sort((a, b) => b - a);
		gbNumLists.sort((a, b) => b - a);

		const addUnitStrTB = tbNumLists.map(x => x.toString() + 'TB');
		const addUnitStrGB = tbNumLists.map(x => x.toString() + 'GB');

		this.values = addUnitStrTB.concat(addUnitStrGB);
	}

	getStrageSize() {
		return this.values;
	}
}

export default ExtractStrageSize;
