import GetApiData from '../Model/GetApiData';
import StorageViews from '../Viwes/StorageViews';
import StrageSize from '../ValueObject/StrageSize';
import InputChange from './EventController/InputChange';

class StrageSectionController {
	static async strageTypeElement() {
		const hddType = await GetApiData.execution('hdd');
		const ssdType = await GetApiData.execution('ssd');
		const mergeArry = hddType.concat(ssdType);
		const hashMap = {};

		for (let i = 0; i < mergeArry.length; i++) {
			if (hashMap[mergeArry[i].Type] === undefined) hashMap[mergeArry[i].Type] = mergeArry[i].Type;
			if (hashMap[mergeArry[i].Type] === undefined) hashMap[mergeArry[i].Type] = mergeArry[i].Type;
		}

		const strageTypeLists = Object.keys(hashMap);

		const element = document.getElementById(StorageViews.storageTypeId);

		element.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageTypeLists.length; i++) {
			element.innerHTML += `<option value="${strageTypeLists[i]}">${strageTypeLists[i]}</option>`;
		}

		InputChange.addEvent(document.getElementById(StorageViews.storageTypeId), StrageSectionController.strageSizeElements);
	}

	static async strageSizeElements() {
		const element = document.getElementById(StorageViews.storageSizeId);
		const strageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();

		if (strageType === '-') {
			element.innerHTML = `<option selected value="-">-</option>`;
			return;
		}

		const apiData = await GetApiData.execution(strageType);

		// ストレージのサイズの文字列を切り出した配列を格納したValueObject（ソート済み）
		const strageSizeValueObject = new StrageSize(apiData);

		const sizeLists = strageSizeValueObject.getStrageSize();

		element.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < sizeLists.length; i++) {
			element.innerHTML += `<option value="${sizeLists[i]}">${sizeLists[i]}</option>`;
		}

		InputChange.addEvent(element, StrageSectionController.strageBrandElement);
	}

	static async strageBrandElement() {
		const element = document.getElementById(StorageViews.storageBrandId);
		const strageSize = document.getElementById(StorageViews.storageBrandId).value.toLowerCase();

		if (strageType === '-') {
			element.innerHTML = `<option selected value="-">-</option>`;
			return;
		}

		console.log('change!');
	}
}

export default StrageSectionController;
