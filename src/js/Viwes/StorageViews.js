class StorageViews {
	static storageTypeId = 'storageType';
	static storageSizeId = 'storageSize';
	static storageBrandId = 'storageBrand';
	static storageModelId = 'storageModel';

	/**
   * HTML要素の雛形を返す
   * @returns {string} - HTML要素を返す
   */
	static createStringHTML() {
		return `
      <div class="d-md-flex d-flex flex-column">
        <div class="m-2 pt-3">
          <h4>step4: Select Your Storage <i class="fa-solid fa-hard-drive"></i></h4>
        </div>
        <div class="d-md-flex justify-content-center">
          <div class="p-2">HDD or SSD</div>
          <div class="col-md-1 col-2">
            <select class="form-select ms-md-2" name="storageType" id="storageType">
            </select>
          </div>
          <div class="p-2 ms-md-3">Storage</div>
          <select class="col-md form-select ms-md-2" name="storageSize" id="storageSize">
            <option selected value="-">-</option>
          </select>
          <div class="p-2 ms-md-3">Brand</div>
          <select class="col-md form-select ms-md-2" name="storageBrand" id="storageBrand">
            <option selected value="-">-</option>
          </select>
          <div class="p-2 ms-md-3">Model</div>
          <select class="col-md form-select ms-md-2" name="storageModel" id="storageModel">
            <option selected value="-">-</option>
          </select>
        </div>
      </div>
    `;
	}
}

export default StorageViews;
