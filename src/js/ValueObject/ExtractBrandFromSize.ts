class ExtractBrandFromSize {
  private values: string[];

  /**
   * コンストラクター
   * @param value model の文字列
   * @param apiData api から取得したデータ
   */
  constructor(value: string, apiData: apiData[]) {
    if (value === '') throw 'An invalid argument was assigned.';

    if (apiData.length === 0) throw 'An invalid argument was assigned.';

    const hashMap: { [key: string]: string } = {};

    for (let i = 0; i < apiData.length; i++) {
      // モデルに記載されているストレージのサイズと前項で選択したストレージのサイズとマッチしている要素を抽出
      const isMatch: string[] = apiData[i].Model.split(' ').filter(x => x.includes(value));

      if (isMatch.length !== 0) {
        // マッチしている要素のBrand名をHashMapへ格納
        if (hashMap[apiData[i].Brand] === undefined) hashMap[apiData[i].Brand] = apiData[i].Brand;
      }
    }

    this.values = Object.keys(hashMap);
  }

  /**
   * ゲッター
   */
  getBrands(): string[] {
    return this.values;
  }
}

export default ExtractBrandFromSize;
