import GetApiData from '../Model/GetApiData';
import CpuViews from '../Viwes/CpuViews';
import InputChange from './EventController/InputChange';
import CpuEntity from '../Entity/CpuEntity';

class CpuSectionController {
	/**
	 *
	 */
	static async cpuBrandElements() {
		const apiData = await GetApiData.execution('cpu');
		const element = document.getElementById(CpuViews.cpuBrandId);

		// オブジェクトで重複した値を除去する
		const uniqueData = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

		element.innerHTML += `<option selected value="-">-</option>`;

		for (let i = 0; i < uniqueData.length; i++) {
			element.innerHTML += `<option value="${uniqueData[i].Brand}">${uniqueData[i].Brand}</option>`;
		}
	}

	/**
	 *
	 * @param {*} event
	 */
	static async cpuModelElements(event) {
		const brandName = event.target.value;
		const apiData = await GetApiData.execution('cpu');

		const cpuBrandData = apiData.filter(x => (x.Brand === brandName ? x : ''));

		const element = document.getElementById(CpuViews.cpuModelId);

		// Brandを切り替えた際に一旦初期化
		element.innerHTML = '<option selected value="-">-</option>';

		for (let i = 0; i < cpuBrandData.length; i++) {
			element.innerHTML += `<option value="${cpuBrandData[i].Model}">${cpuBrandData[i].Model}</option>`;
		}

		InputChange.addEvent(element, function (event) {
			CpuSectionController.addComputerEntity(cpuBrandData, event);
		});
	}

	/**
	 *
	 * @param {*} cpuBrandData
	 * @param {*} event
	 * @returns
	 */
	static addComputerEntity(cpuBrandData, event) {
		if (event.target.value === '-') return;

		const selectCpuData = cpuBrandData.filter(x => (x.Model === event.target.value ? x : ''));

		window.CpuEntity = new CpuEntity(selectCpuData, window.CpuEntity);
	}
}

export default CpuSectionController;
