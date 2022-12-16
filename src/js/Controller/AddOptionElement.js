import GetApiData from '../Model/GetApiData';
import CpuViews from '../Viwes/CpuViews';
import GpuViews from '../Viwes/GpuViews';
import MemoryViews from '../Viwes/MemoryViews';
import InputChange from './EventController/InputChange';
import MemoryMatch from './Regex/MemoryMatch';

class AddOptionElement {
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

		const result = apiData.filter(x => {
			if (x.Brand === brandName) return x;
		});

		const element = document.getElementById(CpuViews.cpuModelId);

		// Brandを切り替えた際に一旦初期化
		element.innerHTML = '<option selected value="-">-</option>';

		for (let i = 0; i < result.length; i++) {
			element.innerHTML += `<option value="${result[i].Model}">${result[i].Model}</option>`;
		}
	}

	/**
   *
   */
	static async gpuBrandElements() {
		const apiData = await GetApiData.execution('gpu');
		const element = document.getElementById(GpuViews.gpuBrandId);

		// INFO: オブジェクトの重複を排除する方法
		// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		// https://qiita.com/allJokin/items/28cd023335641e8796c5
		const uniqueData = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

		// プルダウンを選択し直した際に一旦初期化
		element.innerHTML += `<option selected value="-">-</option>`;

		for (let i = 0; i < uniqueData.length; i++) {
			element.innerHTML += `<option value="${uniqueData[i].Brand}">${uniqueData[i].Brand}</option>`;
		}
	}

	/**
   *
   */
	static async gpuModelElements(event) {
		const brandName = event.target.value;
		const apiData = await GetApiData.execution('gpu');

		const result = apiData.filter(x => {
			if (x.Brand === brandName) return x;
		});

		const element = document.getElementById(GpuViews.gpuModelId);

		// プルダウンを選択し直した際に一旦初期化
		element.innerHTML = '<option selected value="-">-</option>';

		for (let i = 0; i < result.length; i++) {
			element.innerHTML += `<option value="${result[i].Model}">${result[i].Model}</option>`;
		}
	}

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

		InputChange.addEvent(element, AddOptionElement.memoryModelElements);
	}

	/**
   *
   * @returns
   */
	static async memoryModelElements() {
		const apiData = await GetApiData.execution('ram');
		const models = MemoryMatch.isMatch(apiData);

		const element = document.getElementById(MemoryViews.memoryModelId);
		element.innerHTML = `<option selected value="-">-</option>`;

		if (element.length === 0) return;

		for (let i = 0; i < models.length; i++) {
			element.innerHTML += `<option value="${models[i].Model}">${models[i].Model}</option>`;
		}
	}
}

export default AddOptionElement;
