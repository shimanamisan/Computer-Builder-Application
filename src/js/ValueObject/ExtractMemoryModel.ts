import MemoryViews from '../Views/MemoryViews';

class ExtractMemoryModel {
  private value: apiData[];

  /**
   * コンストラクター
   * @param values api から取得したデータ
   */
  constructor(values: apiData[]) {
    if (values.length === 0) throw 'An invalid argument was assigned.';

    const memoryNumEle = document.getElementById(MemoryViews.memoryQuantityId)! as HTMLSelectElement;
    const memoryBrandEle = document.getElementById(MemoryViews.memoryBrandId)! as HTMLSelectElement;

    // select要素で選択したBrand名がapiDataに含まれているか検索
    const filterBrand: apiData[] = values.filter(x => (x.Brand === memoryBrandEle.value ? x : ''));

    // Model名にmemoryQuantityIdで選択したメモリモジュールが含まれているモノを検索する
    const filterModel = filterBrand.filter(x => (x.Model.indexOf(`${memoryNumEle.value}x`) !== -1 ? x.Model : ''));

    this.value = filterModel;
  }

  /**
   * ゲッター
   */
  getModel(): apiData[] {
    return this.value;
  }
}

export default ExtractMemoryModel;
