import GetApiData from '../Model/GetApiData';
import MemoryViews from '../Viwes/MemoryViews';
import ExtractMemoryModel from '../ValueObject/ExtractMemoryModel';
import InputChange from './EventController/InputChange';
import MemoryEntity from '../Entity/MemoryEntity';

class MemorySectionController {

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
		const memoryModelData = memoryModel.getModel();

		const memoryModelEle = document.getElementById(MemoryViews.memoryModelId);
		memoryModelEle.innerHTML = `<option selected value="-">-</option>`;

		if (memoryModelEle.length === 0) return;

		for (let i = 0; i < memoryModelData.length; i++) {
			memoryModelEle.innerHTML += `<option value="${memoryModelData[i].Model}">${memoryModelData[i].Model}</option>`;
		}

		// InputChange.addEvent(memoryModelEle, { handleEvent: MemorySectionController.addComputerEntity });

		memoryModelEle.addEventListener('change', function (event) {
			MemorySectionController.addComputerEntity(memoryModelData, event);
		});
	}

	/**
   *
   * @param {*} memoryModelData
   * @param {*} event
   * @returns
   */
	static addComputerEntity(memoryModelData, event) {
		if (event.target.value === '-') return;
		if (memoryModelData.length === 0) return;

		const selectMemoryModelData = memoryModelData.filter(x => (x.Model === event.target.value ? x : ''));

		console.log(selectMemoryModelData);

		window.MemoryEntity = new MemoryEntity(selectMemoryModelData, window.MemoryEntity);
	}
}

export default MemorySectionController;
