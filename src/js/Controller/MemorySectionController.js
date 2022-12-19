import GetApiData from '../Model/GetApiData';
import MemoryViews from '../Viwes/MemoryViews';
import ExtractMemoryModel from '../ValueObject/ExtractMemoryModel';
import InputChange from './EventController/InputChange';
import MemoryEntity from '../Entity/MemoryEntity';

class MemorySectionController {
	/**
	 *
	 */
	static async memoryBrandElements() {
		const apiData = await GetApiData.execution('ram');

		// オブジェクトで重複した値を除去する
		const uniqueData = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

		const element = document.getElementById(MemoryViews.memoryBrandId);

		element.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < uniqueData.length; i++) {
			element.innerHTML += `<option value="${uniqueData[i].Brand}">${uniqueData[i].Brand}</option>`;
		}

		InputChange.addEvent(element, MemorySectionController.memoryModelElements);
	}

	/**
	 *
	 * @returns
	 */
	static async memoryModelElements() {
		const apiData = await GetApiData.execution('ram');
		const memoryModel = new ExtractMemoryModel(apiData);
		const memoryModelData = memoryModel.getModel();

		const element = document.getElementById(MemoryViews.memoryModelId);
		element.innerHTML = `<option selected value="-">-</option>`;

		if (element.length === 0) return;

		for (let i = 0; i < memoryModelData.length; i++) {
			element.innerHTML += `<option value="${memoryModelData[i].Model}">${memoryModelData[i].Model}</option>`;
		}

		InputChange.addEvent(element, function (event) {
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

		const selectMemoryModelData = memoryModelData.filter(x => (x.Model === event.target.value ? x : ''));

		console.log(selectMemoryModelData);

		window.MemoryEntity = new MemoryEntity(selectMemoryModelData, window.MemoryEntity);
	}
}

export default MemorySectionController;
