import GetApiData from '../Model/GetApiData';
import StorageViews from '../Viwes/StorageViews';
import ExtractStrageSize from '../ValueObject/ExtractStrageSize';
import InputChange from './EventController/InputChange';
import ExtractBrandFromSize from '../ValueObject/ExtractBrandFromSize';
import ExtractStrageModel from '../ValueObject/ExtractStrageModel';

class StrageSectionController {
	/**
   *
   */
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

		const strageTypeEle = document.getElementById(StorageViews.storageTypeId);

		strageTypeEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageTypeLists.length; i++) {
			strageTypeEle.innerHTML += `<option value="${strageTypeLists[i]}">${strageTypeLists[i]}</option>`;
		}

		InputChange.addEvent(document.getElementById(StorageViews.storageTypeId), StrageSectionController.strageSizeElements);
	}

	/**
   *
   * @returns
   */
	static async strageSizeElements() {
		const strageSizeEle = document.getElementById(StorageViews.storageSizeId);
		const strageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();

		if (strageType === '-') {
			strageSizeEle.innerHTML = `<option selected value="-">-</option>`;
			return;
		}

		const apiData = await GetApiData.execution(strageType);

		// ストレージのサイズの文字列を切り出した配列を格納したValueObject（ソート済み）
		const strageSizeValueObject = new ExtractStrageSize(apiData);
		const strageSizeLists = strageSizeValueObject.getStrageSize();

		strageSizeEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageSizeLists.length; i++) {
			strageSizeEle.innerHTML += `<option value="${strageSizeLists[i]}">${strageSizeLists[i]}</option>`;
		}

		InputChange.addEvent(strageSizeEle, StrageSectionController.addStrageBrandElement);
	}

	/**
   * ストレージのサイズが選択されたらBrand要素を追加する
   * @returns
   */
	static async addStrageBrandElement() {
		const strageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();
		const strageSize = document.getElementById(StorageViews.storageSizeId).value;
		const strageBrandEle = document.getElementById(StorageViews.storageBrandId);

		const apiData = await GetApiData.execution(strageType);

		const brandValueObject = new ExtractBrandFromSize(strageSize, apiData);
		const strageBrandLists = brandValueObject.getBrands();

		strageBrandEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageBrandLists.length; i++) {
			strageBrandEle.innerHTML += `<option value="${strageBrandLists[i]}">${strageBrandLists[i]}</option>`;
		}

		InputChange.addEvent(strageBrandEle, StrageSectionController.addStargeModelElement);
	}

	/**
   *
   */
	static async addStargeModelElement() {
		const strageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();
		const strageSize = document.getElementById(StorageViews.storageSizeId).value;
		const strageBrand = document.getElementById(StorageViews.storageBrandId).value;
		const strageModelEle = document.getElementById(StorageViews.storageModelId);

		const apiData = await GetApiData.execution(strageType);
		const modelValueObject = new ExtractStrageModel(strageSize, strageBrand, apiData);

		const strageModelLists = modelValueObject.getModel();

		strageModelEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageModelLists.length; i++) {
			strageModelEle.innerHTML += `<option value="${strageModelLists[i].Model}">${strageModelLists[i].Model}</option>`;
		}
	}
}

export default StrageSectionController;
