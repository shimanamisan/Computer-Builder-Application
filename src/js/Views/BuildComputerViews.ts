import ExtractGameBenchMarkScore from '../ValueObject/ExtractGameBenchMarkScore';
import ExtractWorkBenchMarkScore from '../ValueObject/ExtractWorkBenchMarkScore';

class BuildComputerViews {
  // このViewクラスで使用しているID要素名
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
  // 作成したHTMLの文字列を格納するスタック
  static htmlStack: string[] = [];

  /**
   * HTML要素の雛形を返す
   */
  static createSliderContainerHtml(): string {
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

  /**
   * 計算結果のHTML文字列をスライダー要素のElementに格納する
   * @param calcuGameScore ExtractGameBenchMarkScore オブジェクト
   * @param calcuWrokScore ExtractWorkBenchMarkScore オブジェクト
   */
  static createStringInnerHTML(calcuGameScore: ExtractGameBenchMarkScore, calcuWrokScore: ExtractWorkBenchMarkScore) {
    const buildSliderArea: HTMLElement = document.getElementById(this.buildSliderAreaId)!;

    const cpuBrandEle: HTMLSelectElement = document.getElementById(this.cpuBrandId)! as HTMLSelectElement;
    const cpuModelEle: HTMLSelectElement = document.getElementById(this.cpuModelId)! as HTMLSelectElement;
    const gpuBrandEle: HTMLSelectElement = document.getElementById(this.gpuBrandId)! as HTMLSelectElement;
    const gpuModelEle: HTMLSelectElement = document.getElementById(this.gpuModelId)! as HTMLSelectElement;
    const memoryBrandEle: HTMLSelectElement = document.getElementById(this.memoryBrandId)! as HTMLSelectElement;
    const memoryModelEle: HTMLSelectElement = document.getElementById(this.memoryModelId)! as HTMLSelectElement;
    const storageTypeEle: HTMLSelectElement = document.getElementById(this.storageTypeId)! as HTMLSelectElement;
    const storageSizeEle: HTMLSelectElement = document.getElementById(this.storageSizeId)! as HTMLSelectElement;
    const storageBrandEle: HTMLSelectElement = document.getElementById(this.storageBrandId)! as HTMLSelectElement;
    const storageModelEle: HTMLSelectElement = document.getElementById(this.storageModelId)! as HTMLSelectElement;

    const htmlStr = `
      <div class="swiper-slide">
        <h1 class="text-center" id="pcNumber"></h1>
        <div class="col-md-8 m-auto">
          <h1>CPU <i class="fa-solid fa-microchip"></i></h1>
          <h5>Brand: ${cpuBrandEle.value}</h5>
          <h5>Model: ${cpuModelEle.value}</h5>
        </div>
        <div class="col-md-8 m-auto">
          <h1>GPU <i class="fa-solid fa-microchip"></i></h1>
          <h5>Brand: ${gpuBrandEle.value}</h5>
          <h5>Model: ${gpuModelEle.value}</h5>
        </div>
        <div class="col-md-8 m-auto">
          <h1>RAM <i class="fa-solid fa-memory"></i></h1>
          <h5>Brand: ${memoryBrandEle.value}</h5>
          <h5>Model: ${memoryModelEle.value}</h5>
        </div>
        <div class="col-md-8 m-auto">
          <h1>Storage <i class="fa-solid fa-hard-drive"></i></h1>
          <h5>Disk: ${storageTypeEle.value}</h5>
          <h5>Storage: ${storageSizeEle.value}</h5>
          <h5>Brand: ${storageBrandEle.value}</h5>
          <h5>Model: ${storageModelEle.value}</h5>
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
   * 何番目に作成したPCかカウントする
   */
  static computerNumberCount() {
    const pcNumberNodeList: NodeListOf<Element> = document.querySelectorAll(`#${this.pcNumberId}`);
    for (let i = 0; i < pcNumberNodeList.length; i++) {
      pcNumberNodeList[i].innerHTML += `Your PC${pcNumberNodeList.length - i}`;
    }
  }
}

export default BuildComputerViews;
