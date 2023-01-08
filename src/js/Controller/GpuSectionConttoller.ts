import GetApiData from '../Model/GetApiData';
import GpuViews from '../Views/GpuViews';
import InputChange from './EventController/InputChange';
import GpuEntity from '../Entity/GpuEntity';

class GpuSectionConttoller {
  /**
   * gpu Brand名を select 要素に追加する
   */
  static async gpuBrandElements(): Promise<void> {
    const apiData: apiData[] = await GetApiData.execution('gpu');
    const element: HTMLElement = document.getElementById(GpuViews.gpuBrandId)!;

    // INFO: オブジェクトの重複を排除する方法
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://qiita.com/allJokin/items/28cd023335641e8796c5
    const uniqueData: apiData[] = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

    // プルダウンを選択し直した際に一旦初期化
    element.innerHTML += `<option selected value="-">-</option>`;

    for (let i = 0; i < uniqueData.length; i++) {
      element.innerHTML += `<option value="${uniqueData[i].Brand}">${uniqueData[i].Brand}</option>`;
    }
  }

  /**
   * gpuModel の select 要素が選択されたときのイベントの処理
   * @param event イベントオブジェクト
   * @returns Promise<void>
   */
  static async gpuModelElements(event: Event): Promise<void> {
    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const brandName = currentValue;
    const apiData: apiData[] = await GetApiData.execution('gpu');

    // 選択したBrand名からapiDataと一致するものを検索する
    const gpuBrandLists: apiData[] = apiData.filter(x => (x.Brand === brandName ? x : ''));

    const element: HTMLElement = document.getElementById(GpuViews.gpuModelId)!;

    // プルダウンを選択し直した際に一旦初期化
    element.innerHTML = '<option selected value="-">-</option>';

    for (let i = 0; i < gpuBrandLists.length; i++) {
      // 絞り込んだ gpuBrandLists から Model を要素に追加する
      element.innerHTML += `<option value="${gpuBrandLists[i].Model}">${gpuBrandLists[i].Model}</option>`;
    }

    InputChange.addEvent(element, function (event: Event) {
      GpuSectionConttoller.addComputerEntity(gpuBrandLists, event);
    });
  }

  /**
   * GpuEntity に計算用のデータを登録
   * @param gpuBrandLists api から取得したデータ
   * @param event イベントオブジェクト
   * @returns void
   */
  static addComputerEntity(gpuBrandLists: apiData[], event: Event): void {
    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const selectGpuData: apiData[] = gpuBrandLists.filter(x => (x.Model === currentValue ? x : ''));

    window.GpuEntity = new GpuEntity(selectGpuData, window.GpuEntity);
  }
}

export default GpuSectionConttoller;
