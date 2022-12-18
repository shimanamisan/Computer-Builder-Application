import GetApiData from '../Model/GetApiData';
import StorageViews from '../Viwes/StorageViews';
import ExtractStrageSize from '../ValueObject/ExtractStrageSize';
import InputChange from './EventController/InputChange';
import ExtractBrandFromSize from '../ValueObject/ExtractBrandFromSize';
import ExtractStrageModel from '../ValueObject/ExtractStrageModel';

class StorageSectionController {
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

		const storageTypeLists = Object.keys(hashMap);

		const storageTypeEle = document.getElementById(StorageViews.storageTypeId);

		storageTypeEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < storageTypeLists.length; i++) {
			storageTypeEle.innerHTML += `<option value="${storageTypeLists[i]}">${storageTypeLists[i]}</option>`;
		}

		InputChange.addEvent(document.getElementById(StorageViews.storageTypeId), StorageSectionController.storageSizeElements);
	}

	/**
   *
   * @returns
   */
	static async storageSizeElements() {
		const storageSizeEle = document.getElementById(StorageViews.storageSizeId);
		const storageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();

		if (storageType === '-') {
			storageSizeEle.innerHTML = `<option selected value="-">-</option>`;
			return;
		}

		const apiData = await GetApiData.execution(storageType);

		// ストレージのサイズの文字列を切り出した配列を格納したValueObject（ソート済み）
		const strageSizeValueObject = new ExtractStrageSize(apiData);
		const strageSizeLists = strageSizeValueObject.getStrageSize();

		storageSizeEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageSizeLists.length; i++) {
			storageSizeEle.innerHTML += `<option value="${strageSizeLists[i]}">${strageSizeLists[i]}</option>`;
		}

		InputChange.addEvent(storageSizeEle, StorageSectionController.addStorageBrandElement);
	}

	/**
   * ストレージのサイズが選択されたらBrand要素を追加する
   * @returns
   */
	static async addStorageBrandElement() {
		const storageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();
		const stoageSize = document.getElementById(StorageViews.storageSizeId).value;
		const storageBrandEle = document.getElementById(StorageViews.storageBrandId);

		const apiData = await GetApiData.execution(storageType);

		const brandValueObject = new ExtractBrandFromSize(stoageSize, apiData);
		const storageBrandLists = brandValueObject.getBrands();

		storageBrandEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < storageBrandLists.length; i++) {
			storageBrandEle.innerHTML += `<option value="${storageBrandLists[i]}">${storageBrandLists[i]}</option>`;
		}

		InputChange.addEvent(storageBrandEle, StorageSectionController.addStargeModelElement);
	}

	/**
   *
   */
	static async addStargeModelElement() {
		const storageType = document.getElementById(StorageViews.storageTypeId).value.toLowerCase();
		const storageSize = document.getElementById(StorageViews.storageSizeId).value;
		const storageBrand = document.getElementById(StorageViews.storageBrandId).value;
		const storageModelEle = document.getElementById(StorageViews.storageModelId);

		const apiData = await GetApiData.execution(storageType);
		const modelValueObject = new ExtractStrageModel(storageSize, storageBrand, apiData);

		const strageModelLists = modelValueObject.getModel();

		storageModelEle.innerHTML = `<option selected value="-">-</option>`;
		for (let i = 0; i < strageModelLists.length; i++) {
			storageModelEle.innerHTML += `<option value="${strageModelLists[i].Model}">${strageModelLists[i].Model}</option>`;
		}
	}
}

export default StorageSectionController;
