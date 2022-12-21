import GetApiData from '../Model/GetApiData';
import GpuViews from '../Viwes/GpuViews';
import InputChange from './EventController/InputChange';
import GpuEntity from '../Entity/GpuEntity';

class GpuSectionConttoller {
  /**
   *
   */
  static async gpuBrandElements() {
    const apiData = await GetApiData.execution('gpu');
    const element = document.getElementById(GpuViews.gpuBrandId);

    // INFO: オブジェクトの重複を排除する方法
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://qiita.com/allJokin/items/28cd023335641e8796c5
    const uniqueData = Array.from(new Map(apiData.map(x => [x.Brand, x])).values());

    // プルダウンを選択し直した際に一旦初期化
    element.innerHTML += `<option selected value="-">-</option>`;

    for (let i = 0; i < uniqueData.length; i++) {
      element.innerHTML += `<option value="${uniqueData[i].Brand}">${uniqueData[i].Brand}</option>`;
    }
  }

  /**
   *
   */
  static async gpuModelElements(event) {
    const brandName = event.target.value;
    const apiData = await GetApiData.execution('gpu');

    const gpuBrandData = apiData.filter(x => (x.Brand === brandName ? x : ''));

    const element = document.getElementById(GpuViews.gpuModelId);

    // プルダウンを選択し直した際に一旦初期化
    element.innerHTML = '<option selected value="-">-</option>';

    for (let i = 0; i < gpuBrandData.length; i++) {
      element.innerHTML += `<option value="${gpuBrandData[i].Model}">${gpuBrandData[i].Model}</option>`;
    }

    InputChange.addEvent(element, function (event) {
      GpuSectionConttoller.addComputerEntity(gpuBrandData, event);
    });
  }

  /**
   *
   * @param {*} gpuBrandData
   * @param {*} event
   * @returns
   */
  static addComputerEntity(gpuBrandData, event) {
    if (event.target.value === '-') return;

    const selectGpuData = gpuBrandData.filter(x => (x.Model === event.target.value ? x : ''));

    window.GpuEntity = new GpuEntity(selectGpuData, window.GpuEntity);
  }
}

export default GpuSectionConttoller;
