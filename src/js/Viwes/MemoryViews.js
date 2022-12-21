class MemoryViews {
  // このViewクラスで使用しているID要素名
  static memoryQuantityId = 'memoryQuantity';
  static memoryBrandId = 'memoryBrand';
  static memoryModelId = 'memoryModel';

  /**
   * HTML要素の雛形を返す
   * @returns {string} - HTML要素を返す
   */
  static createStringHTML() {
    return `
    <div class="m-2 pt-3">
    <h4>step3: Select Your Memory Card <i class="fa-solid fa-memory"></i></h4>
    </div>
    <div class="d-md-flex justify-content-center">
      <div class="p-2">How many?</div>
      <!-- form-selectクラスでwidth:100%;が優先されるので、col-1とサイズを指定する場合はdivタグで囲む必要がある -->
      <div class="col-md-1 col-2">
        <select class="form-select ms-md-2" name="memoryQuantity" id="memoryQuantity">
          <option selected value="-">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="p-2 ms-md-3">Brand</div>
      <select class="col form-select ms-md-2" name="memoryBrand" id="memoryBrand">
        <option selected value="-">-</option>
      </select>
      <div class="p-2 ms-md-3">Model</div>
      <select class="col form-select ms-md-2" name="memoryModel" id="memoryModel">
        <option selected value="-">-</option>
      </select>
    </div>
    `;
  }
}

export default MemoryViews;
