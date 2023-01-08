class ExtractStrageModel {
  private values: apiData[];

  /**
   * コンストラクタ
   * @param storageSizeValue ストレージサイズ
   * @param storageBrandValue ブランド名
   * @param apiData api から取得したデータ
   */
  constructor(storageSizeValue: string, storageBrandValue: string, apiData: apiData[]) {
    if (storageSizeValue === '' || storageSizeValue === '' || apiData.length === 0) {
      throw 'An invalid argument was assigned.';
    }
    const matchDataForSize: apiData[] = [];
    const matchDataForBrand: apiData[] = [];

    // サイズ（TBかGB）の文字列を含んでいるModelのデータを抽出
    for (let i = 0; i < apiData.length; i++) {
      if (apiData[i].Model.indexOf(storageSizeValue) !== -1) matchDataForSize.push(apiData[i]);
    }

    for (let i = 0; i < matchDataForSize.length; i++) {
      if (matchDataForSize[i].Brand.indexOf(storageBrandValue) !== -1) matchDataForBrand.push(matchDataForSize[i]);
    }

    this.values = matchDataForBrand;
  }

  /**
   * ゲッター
   */
  getModel(): apiData[] {
    return this.values;
  }
}

export default ExtractStrageModel;
