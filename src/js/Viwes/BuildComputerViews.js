class BuildComputerViews {
	static cpuBrandId = 'cpuBrand';
	static cpuModelId = 'cpuModel';
	static gpuBrandId = 'gpuBrand';
	static gpuModelId = 'gpuModel';
	static memoryBrandId = 'memoryBrand';
	static memoryModelId = 'memoryModel';
	static storageTypeId = 'storageType';
	static storageSizeId = 'storageSize';
	static storageBrandId = 'storageBrand';
	static storageModelId = 'storageModel';
	/**
   * HTML要素の雛形を返す
   * @returns {string} - HTML要素を返す
   */
	static createStringHTML(calcuGameScore, calcuWrokScore) {

		console.log(calcuGameScore, calcuWrokScore);

		return `
      <div id="build-computer-area">
        <div class="container mt-4 p-3 p-builder__container">
          <h1 class="text-center">Your PC1</h1>
          <div class="col-md-8 m-auto">
            <h1>CPU <i class="fa-solid fa-microchip"></i></h1>
            <h5>Brand: ${document.getElementById(this.cpuBrandId).value}</h5>
            <h5>Model: ${document.getElementById(this.cpuModelId).value}</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>GPU <i class="fa-solid fa-microchip"></i></h1>
            <h5>Brand: ${document.getElementById(this.gpuBrandId).value}</h5>
            <h5>Model: ${document.getElementById(this.gpuModelId).value}</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>RAM <i class="fa-solid fa-memory"></i></h1>
            <h5>Brand: ${document.getElementById(this.memoryBrandId).value}</h5>
            <h5>Model: ${document.getElementById(this.memoryModelId).value}</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>Storage <i class="fa-solid fa-hard-drive"></i></h1>
            <h5>Disk: ${document.getElementById(this.storageTypeId).value}</h5>
            <h5>Storage: ${document.getElementById(this.storageSizeId).value}</h5>
            <h5>Brand: ${document.getElementById(this.storageBrandId).value}</h5>
            <h5>Model: ${document.getElementById(this.storageModelId).value}</h5>
          </div>
          <div class="m-2 pt-3 d-flex justify-content-around align-items-center">
            <h1>Gaming <i class="fa-solid fa-gamepad"></i> : ${calcuGameScore.getScore()}%</h1>
            <h1>Work <i class="fa-solid fa-computer"></i> : ${calcuWrokScore.getScore()}%</h1>
          </div>
        </div>
      </div>
    `;
	}
}

export default BuildComputerViews;
