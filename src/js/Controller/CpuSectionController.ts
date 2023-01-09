import GetApiData from '../Model/GetApiData';
import CpuViews from '../Views/CpuViews';
import InputChange from './EventController/InputChange';
import CpuEntity from '../Entity/CpuEntity';

class CpuSectionController {
  /**
   * cpu Brand名を select 要素に追加する
   */
  static async cpuBrandElements() {
    const apiData: apiData[] = await GetApiData.execution('cpu');
    const element: HTMLElement = document.getElementById(CpuViews.cpuBrandId)!;

    // オブジェクトで重複した値を除去する
    const uniqueData: apiData[] = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

    element.innerHTML += `<option selected value="-">-</option>`;

    for (let i = 0; i < uniqueData.length; i++) {
      const brandName: string = uniqueData[i].Brand;
      element.innerHTML += `<option value="${brandName}">${brandName}</option>`;
    }
  }

  /**
   * cpuBrand の select 要素が選択されたときのイベントの処理
   * @param event イベントオブジェクト
   */
  static async cpuModelElements(event: Event): Promise<void> {
    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const brandName = currentValue;
    const apiData: apiData[] = await GetApiData.execution('cpu');

    // 選択されている要素と同じ名前のBrand名を取得する
    const cpuBrandData: apiData[] = apiData.filter(x => (x.Brand === brandName ? x : ''));

    const cpuModelEle: HTMLElement = document.getElementById(CpuViews.cpuModelId)!;

    // Brandを切り替えた際に一旦初期化
    cpuModelEle.innerHTML = '<option selected value="-">-</option>';

    for (let i = 0; i < cpuBrandData.length; i++) {
      cpuModelEle.innerHTML += `<option value="${cpuBrandData[i].Model}">${cpuBrandData[i].Model}</option>`;
    }

    InputChange.addEvent(cpuModelEle, function (event: Event) {
      CpuSectionController.addComputerEntity(cpuBrandData, event);
    });
  }

  /**
   * CpuEntity に計算用のデータを登録
   * @param cpuBrandData api から取得したデータ
   * @param event イベントオブジェクト
   * @returns void
   */
  static addComputerEntity(cpuBrandData: apiData[], event: Event): void {
    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const selectCpuData: apiData[] = cpuBrandData.filter(x => (x.Model === currentValue ? x : ''));

    window.CpuEntity = new CpuEntity(selectCpuData, window.CpuEntity);
  }
}

export default CpuSectionController;
