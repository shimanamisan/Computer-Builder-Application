import GetApiData from '../Model/GetApiData';
import MemoryViews from '../Viwes/MemoryViews';
import ExtractMemoryModel from '../ValueObject/ExtractMemoryModel';
import InputChange from './EventController/InputChange';

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
		const models = new ExtractMemoryModel(apiData);
		const modelLists = models.getModel();

		const element = document.getElementById(MemoryViews.memoryModelId);
		element.innerHTML = `<option selected value="-">-</option>`;

		if (element.length === 0) return;

		for (let i = 0; i < modelLists.length; i++) {
			element.innerHTML += `<option value="${modelLists[i].Model}">${modelLists[i].Model}</option>`;
		}
	}
}

export default MemorySectionController;
