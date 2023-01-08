import GetApiData from '../Model/GetApiData';
import MemoryViews from '../Views/MemoryViews';
import ExtractMemoryModel from '../ValueObject/ExtractMemoryModel';
import MemoryEntity from '../Entity/MemoryEntity';

class MemorySectionController {
  static memoryModelData: apiData[];

  /**
   * メモリの枚数の指定が変化したときに実行されるメソッド
   */
  static async addMemoryBrandElements(): Promise<void> {
    const apiData: apiData[] = await GetApiData.execution('ram');

    // オブジェクトで重複した値を除去する
    const memoryBrandData: apiData[] = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

    const memoryBrandEle: HTMLElement = document.getElementById(MemoryViews.memoryBrandId)!;

    memoryBrandEle.innerHTML = `<option selected value="-">-</option>`;
    for (let i = 0; i < memoryBrandData.length; i++) {
      memoryBrandEle.innerHTML += `<option value="${memoryBrandData[i].Brand}">${memoryBrandData[i].Brand}</option>`;
    }
  }

  /**
   * メモリの Brand を選択したときに Model を取得して option 要素を描画するための処理
   */
  static async addMemoryModelElements(): Promise<void> {
    const apiData: apiData[] = await GetApiData.execution('ram');
    const memoryModel: ExtractMemoryModel = new ExtractMemoryModel(apiData);
    MemorySectionController.memoryModelData = memoryModel.getModel();

    const memoryModelEle: HTMLElement = document.getElementById(MemoryViews.memoryModelId)!;
    memoryModelEle.innerHTML = `<option selected value="-">-</option>`;

    for (let i = 0; i < MemorySectionController.memoryModelData.length; i++) {
      memoryModelEle.innerHTML += `<option value="${MemorySectionController.memoryModelData[i].Model}">${MemorySectionController.memoryModelData[i].Model}</option>`;
    }
  }

  /**
   * MemoryEntity に計算用のデータを登録
   * @param event ]
   * @returns
   */
  static addComputerEntity(event: Event): void {
    const memoryBrandEle: HTMLSelectElement = document.getElementById(MemoryViews.memoryBrandId)! as HTMLSelectElement;
    const memoryBrandValue: string = memoryBrandEle.value;

    if (memoryBrandValue === '-') {
      alert('メモリーのBrandの値に不正な値が選択されています。');

      // Brandの値が不正値だった場合にModelのoptionを初期化
      const memoryModelEle: HTMLSelectElement = document.getElementById(
        MemoryViews.memoryModelId
      )! as HTMLSelectElement;
      memoryModelEle.innerHTML = `<option selected value="-">-</option>`;
      return;
    }

    // 必ずHTMLSelectElementが来るわけではないからType Guardを実装
    if (!(event.currentTarget instanceof HTMLSelectElement)) return;

    if (event.currentTarget.value === '-') return;

    const eventTarget: HTMLSelectElement = event.currentTarget!;
    const currentValue: string = eventTarget.value;

    const selectMemoryModelData = MemorySectionController.memoryModelData.filter(x =>
      x.Model === currentValue ? x : ''
    );

    // 異なるPart Numberで複数の同じ名前のモデルが取得される場合があるので、重複した配列の要素を削除
    const notDuplicateData: apiData[] = Array.from(new Map(selectMemoryModelData.map(x => [x.Brand, x])).values());

    window.MemoryEntity = new MemoryEntity(notDuplicateData, window.MemoryEntity);
  }
}

export default MemorySectionController;
