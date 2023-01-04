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

  static buildSliderAreaId = 'buildSliderArea';
  static pcNumberId = 'pcNumber';
  static htmlStack = [];

  /**
   *
   * @returns
   */
  static createSliderContainerHtml() {
    const htmlStr = `
      <div class="swiper mySwiper">
        <div id="buildSliderArea" class="swiper-wrapper container-md mt-4 p-md-3 p-builder__container">
        </div>
        <div class="swiper-pagination"></div>
        <div class="p-arrow-hide swiper-button-prev"></div>
        <div class="p-arrow-hide swiper-button-next"></div>
      </div>
    `;

    return htmlStr;
  }

  static createStringInnerHTML(calcuGameScore, calcuWrokScore) {
    const buildSliderArea = document.getElementById(this.buildSliderAreaId);

    const htmlStr = `
      <div class="swiper-slide">
        <h1 class="text-center" id="pcNumber"></h1>
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
    `;

    this.htmlStack.push(htmlStr);

    for (let i = this.htmlStack.length - 1; i >= 0; i--) {
      if (this.htmlStack.length === 0) break;
      buildSliderArea.innerHTML += this.htmlStack[i];
    }

    BuildComputerViews.computerNumberCount();
  }

  /**
   *
   */
  static totalPageCount() {
    const buildSliderCount = document.getElementById(this.buildSliderCountId);
    buildSliderCount.innerHTML += `1/${this.htmlStack.length}`;
  }

  /**
   *
   */
  static computerNumberCount() {
    const pcNumberNodeList = document.querySelectorAll(`#${this.pcNumberId}`);
    for (let i = 0; i < pcNumberNodeList.length; i++) {
      pcNumberNodeList[i].innerHTML += `Your PC${pcNumberNodeList.length - i}`;
    }
  }
}

export default BuildComputerViews;
