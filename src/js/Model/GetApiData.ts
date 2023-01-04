import config from '../config';

class GetApiData {
  /**
   *
   * @param {*} partsName
   * @returns
   */
  static async execution(partsName) {
    const apiData = await fetch(`${config.api}?type=${partsName}`).then(res => res.json());
    return apiData;
  }
}

export default GetApiData;
