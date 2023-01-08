import GetApiData from '../Model/GetApiData';
import StorageViews from '../Views/StorageViews';
import ExtractStrageSize from '../ValueObject/ExtractStrageSize';
import InputChange from './EventController/InputChange';
import ExtractBrandFromSize from '../ValueObject/ExtractBrandFromSize';
import ExtractStrageModel from '../ValueObject/ExtractStrageModel';
import StorageEntity from '../Entity/StorageEntity';

class StorageSectionController {
  /**
   * ストレージのタイプを描画する
   */
  static async strageTypeElement(): Promise<void> {
    const hddType: apiData[] = await GetApiData.execution('hdd');
    const ssdType: apiData[] = await GetApiData.execution('ssd');
    const mergeArry: apiData[] = hddType.concat(ssdType);
    // INFO: https://qiita.com/coa00/items/3be7f1237a1628ec3eb4
    // HashMapの書き方
    const hashMap: { [key: string]: string } = {};

    for (let i = 0; i < mergeArry.length; i++) {
      if (hashMap[mergeArry[i].Type] === undefined) hashMap[mergeArry[i].Type] = mergeArry[i].Type;
      if (hashMap[mergeArry[i].Type] === undefined) hashMap[mergeArry[i].Type] = mergeArry[i].Type;
    }

    const storageTypeLists: string[] = Object.keys(hashMap);

    const storageTypeEle: HTMLElement = document.getElementById(StorageViews.storageTypeId)!;

    storageTypeEle.innerHTML = `<option selected value="-">-</option>`;
    for (let i = 0; i < storageTypeLists.length; i++) {
      storageTypeEle.innerHTML += `<option value="${storageTypeLists[i]}">${storageTypeLists[i]}</option>`;
    }

    // ストレージタイプの select 要素を選択したら発火するイベントを登録
    InputChange.addEvent(
      document.getElementById(StorageViews.storageTypeId)!,
      StorageSectionController.storageSizeElements
    );
  }

  /**
   * storageSizeElement の select 要素が選択されたときのイベントの処理
   * @returns Promise<void>
   */
  static async storageSizeElements(): Promise<void> {
    const storageSizeEle: HTMLElement = document.getElementById(StorageViews.storageSizeId)!;
    const storageTypeEle: HTMLSelectElement = document.getElementById(StorageViews.storageTypeId)! as HTMLSelectElement;
    const strageTypeValue: string = storageTypeEle.value.toLowerCase();

    if (strageTypeValue === '-') {
      storageSizeEle.innerHTML = `<option selected value="-">-</option>`;
      return;
    }

    const apiData: apiData[] = await GetApiData.execution(strageTypeValue);

    // ストレージのサイズの文字列を切り出した配列を格納したValueObject（ソート済み）
    const strageSizeValueObject: ExtractStrageSize = new ExtractStrageSize(apiData);
    const strageSizeLists: string[] = strageSizeValueObject.getStrageSize();

    storageSizeEle.innerHTML = `<option selected value="-">-</option>`;
    for (let i = 0; i < strageSizeLists.length; i++) {
      storageSizeEle.innerHTML += `<option value="${strageSizeLists[i]}">${strageSizeLists[i]}</option>`;
    }

    InputChange.addEvent(storageSizeEle, StorageSectionController.addStorageBrandElement);
  }

  /**
   * addStorageBrandElement の select 要素が選択されたときのイベントの処理
   */
  static async addStorageBrandElement(): Promise<void> {
    const storageTypeEle: HTMLSelectElement = document.getElementById(StorageViews.storageTypeId) as HTMLSelectElement;
    const storageTypeValue: string = storageTypeEle.value.toLowerCase();

    const stoageSizeEle: HTMLSelectElement = document.getElementById(StorageViews.storageSizeId) as HTMLSelectElement;
    const stoageSizeValue = stoageSizeEle.value;

    const storageBrandEle: HTMLElement = document.getElementById(StorageViews.storageBrandId)!;

    const apiData: apiData[] = await GetApiData.execution(storageTypeValue);

    const brandValueObject: ExtractBrandFromSize = new ExtractBrandFromSize(stoageSizeValue, apiData);
    const storageBrandLists: string[] = brandValueObject.getBrands();

    storageBrandEle.innerHTML = `<option selected value="-">-</option>`;
    for (let i = 0; i < storageBrandLists.length; i++) {
      storageBrandEle.innerHTML += `<option value="${storageBrandLists[i]}">${storageBrandLists[i]}</option>`;
    }

    InputChange.addEvent(storageBrandEle, StorageSectionController.addStargeModelElement);
  }

  /**
   * storageModel の select 要素が選択されたときのイベントの処理
   */
  static async addStargeModelElement(): Promise<void> {
    const storageTypeEle: HTMLSelectElement = document.getElementById(StorageViews.storageTypeId)! as HTMLSelectElement;
    const storageTypeValue: string = storageTypeEle.value.toLowerCase();

    const storageSizeEle: HTMLSelectElement = document.getElementById(StorageViews.storageSizeId)! as HTMLSelectElement;
    const storageSizeValue: string = storageSizeEle.value;

    const storageBrandEle: HTMLSelectElement = document.getElementById(
      StorageViews.storageBrandId
    )! as HTMLSelectElement;
    const storageBrandValue: string = storageBrandEle.value;

    const storageModelEle: HTMLElement = document.getElementById(StorageViews.storageModelId)!;

    const apiData: apiData[] = await GetApiData.execution(storageTypeValue);
    const storageModelValueObject = new ExtractStrageModel(storageSizeValue, storageBrandValue, apiData);

    const strageModels: apiData[] = storageModelValueObject.getModel();

    storageModelEle.innerHTML = `<option selected value="-">-</option>`;
    for (let i = 0; i < strageModels.length; i++) {
      storageModelEle.innerHTML += `<option value="${strageModels[i].Model}">${strageModels[i].Model}</option>`;
    }

    InputChange.addEvent(storageModelEle, function (event: Event) {
      StorageSectionController.addComputerEntity(strageModels, event);
    });
  }

  /**
   * StorageEntity に計算用のデータを登録
   * @param storageModelData api から取得したデータ
   * @param event イベントオブジェクト
   * @returns void
   */
  static addComputerEntity(storageModelData: apiData[], event: Event): void {
    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const selectStorageModelData: apiData[] = storageModelData.filter(x => (x.Model === currentValue ? x : ''));

    window.StorageEntity = new StorageEntity(selectStorageModelData, window.StorageEntity);
  }
}

export default StorageSectionController;
