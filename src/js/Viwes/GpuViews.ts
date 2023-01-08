class GpuViews {
  // このViewクラスで使用しているID要素名
  static gpuBrandId: string = 'gpuBrand';
  static gpuModelId: string = 'gpuModel';

  /**
   * HTML要素の雛形を返す
   * @returns HTMLの文字列を返す
   */
  static createStringHTML(): string {
    return `
    <div class="m-2 pt-3">
    <h4>step2: Select Your GPU <i class="fa-solid fa-microchip"></i></h4>
    </div>
    <div class="d-md-flex justify-content-center">
      <div class="p-2">Brand</div>
      <select class="form-select ms-md-2" name="gpuBrand" id="gpuBrand">
      </select>
      <div class="p-2 ms-md-3">Model</div>
      <select class="form-select ms-md-2" name="gpuModel" id="gpuModel">
        <option selected value="-">-</option>
      </select>
    </div>
    `;
  }
}

export default GpuViews;
