import config from '../config';

class GetApiData {
  /**
   * apiからデータを取得するメソッド
   * @param partsName apiに渡すパラメーター
   * @returns Promise<apiData[]>
   */
  static async execution(partsName: string): Promise<apiData[]> {
    const apiData: apiData[] = await fetch(`${config.api}?type=${partsName}`).then(res => res.json());
    return apiData;
  }
}

export default GetApiData;
