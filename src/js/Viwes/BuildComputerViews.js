class BuildComputerViews {
  /**
   * HTML要素の雛形を返す
   * @returns {string} - HTML要素を返す
   */
  static createStringHTML() {
    return `
      <div id="build-computer-area">
        <div class="mt-4 p-3 p-builder__container">
          <h1 class="text-center">Your PC1</h1>
          <div class="col-md-8 m-auto">
            <h1>CPU <i class="fa-solid fa-microchip"></i></h1>
            <h5>Brand: Intel</h5>
            <h5>Model: Core i9-9900KS</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>GPU <i class="fa-solid fa-microchip"></i></h1>
            <h5>Brand: Nvidia</h5>
            <h5>Model: Quadro RTX A6000</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>RAM <i class="fa-solid fa-memory"></i></h1>
            <h5>Brand: Crucial</h5>
            <h5>Model: Ballistix Sport LT DDR4 2666 C16 1x8GB</h5>
          </div>
          <div class="col-md-8 m-auto">
            <h1>Storage <i class="fa-solid fa-hard-drive"></i></h1>
            <h5>Disk: HDD</h5>
            <h5>Storage: 12TB</h5>
            <h5>Brand: WD</h5>
            <h5>Model: Gold 12TB (2017)</h5>
          </div>
          <div class="m-2 pt-3 d-flex justify-content-around align-items-center">
            <h1>Gaming <i class="fa-solid fa-gamepad"></i> : 165%</h1>
            <h1>Work <i class="fa-solid fa-computer"></i> : 121%</h1>
          </div>
        </div>
      </div>
    `;
  }
}

export default BuildComputerViews;
