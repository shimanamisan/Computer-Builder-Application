class CpuViews {
  // このViewクラスで使用しているID要素名
  static cpuBrandId = 'cpuBrand';
  static cpuModelId = 'cpuModel';

  /**
   * HTML要素の雛形を返す
   * @returns HTMLの文字列を返す
   */
  static createStringHTML(): string {
    return `
    <div class="m-2 pt-3">
      <h4>step1: Select Your CPU <i class="fa-solid fa-microchip"></i></h4>
    </div>
    <div class="d-md-flex justify-content-center">
      <div class="p-2">Brand</div>
      <select class="form-select ms-md-2" name="cpuBrand" id="cpuBrand">
      </select>
      <div class="p-2 ms-md-3">Model</div>
      <select class="form-select ms-md-2" name="cpuModel" id="cpuModel">
        <option selected value="-">-</option>
      </select>
    </div>
    `;
  }
}

export default CpuViews;
