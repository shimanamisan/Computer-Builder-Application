import GetApiData from '../Model/GetApiData';
import MemoryViews from '../Viwes/MemoryViews';
import ExtractMemoryModel from '../ValueObject/ExtractMemoryModel';
import MemoryEntity from '../Entity/MemoryEntity';

class MemorySectionController {
	static #memoryModelData;

	/**
   * メモリの枚数の指定が変化したときに実行されるメソッド
   */
	static async addMemoryBrandElements() {
		const apiData = await GetApiData.execution('ram');

		// オブジェクトで重複した値を除去する
		const memoryBrandData = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

		const memoryBrandEle = document.getElementById(MemoryViews.memoryBrandId);

		memoryBrandEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < memoryBrandData.length; i++) {
			memoryBrandEle.innerHTML += `<option value="${memoryBrandData[i].Brand}">${memoryBrandData[i].Brand}</option>`;
		}
	}

	/**
   *
   * @returns
   */
	static async addMemoryModelElements() {
		const apiData = await GetApiData.execution('ram');
		const memoryModel = new ExtractMemoryModel(apiData);
		MemorySectionController.#memoryModelData = memoryModel.getModel();

		const memoryModelEle = document.getElementById(MemoryViews.memoryModelId);
		memoryModelEle.innerHTML = `<option selected value="-">-</option>`;

		for (let i = 0; i < MemorySectionController.#memoryModelData.length; i++) {
			memoryModelEle.innerHTML += `<option value="${MemorySectionController.#memoryModelData[i].Model}">${
				MemorySectionController.#memoryModelData[i].Model
			}</option>`;
		}
	}

	static addComputerEntity(event) {
		const memoryBrandValue = document.getElementById(MemoryViews.memoryBrandId).value;

		if (memoryBrandValue === '-') {
			alert('メモリーのBrandの値に不正な値が選択されています。');

			// Brandの値が不正値だった場合にModelのoptionを初期化
			const memoryModelEle = document.getElementById(MemoryViews.memoryModelId);
			memoryModelEle.innerHTML = `<option selected value="-">-</option>`;
			return;
		}

		if (event.currentTarget.value === '-') return;

		const selectMemoryModelData = MemorySectionController.#memoryModelData.filter(x =>
			x.Model === event.currentTarget.value ? x : ''
		);

		// 異なるPart Numberで複数の同じ名前のモデルが取得される場合があるので、重複した配列の要素を削除
		const notDuplicateData = Array.from(new Map(selectMemoryModelData.map(x => [x.Brand, x])).values());

		window.MemoryEntity = new MemoryEntity(notDuplicateData, window.MemoryEntity);
	}
}

export default MemorySectionController;
