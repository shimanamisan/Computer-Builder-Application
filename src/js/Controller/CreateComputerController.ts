// エラー1
// Cannot find module 'swiper'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
// swiper.d.ts で swiper の定義ファイルを追加
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import CpuViews from '../Views/CpuViews';
import GpuViews from '../Views/GpuViews';
import MemoryViews from '../Views/MemoryViews';
import StorageViews from '../Views/StorageViews';
import BuildComputerViews from '../Views/BuildComputerViews';
import ExtractGameBenchMarkScore from '../ValueObject/ExtractGameBenchMarkScore';
import ExtractWorkBenchMarkScore from '../ValueObject/ExtractWorkBenchMarkScore';

class CreateComputerController {
  /**
   *
   * @returns
   */
  static async createHtml(): Promise<void> {
    const isValid = CreateComputerController.formValidation();

    if (isValid) return;

    const calcuGameScore: ExtractGameBenchMarkScore = new ExtractGameBenchMarkScore(
      window.CpuEntity.getCpu(),
      window.GpuEntity.getGpu(),
      window.MemoryEntity.getMemory(),
      window.StorageEntity.getStorage()
    );

    const calcuWrokScore: ExtractWorkBenchMarkScore = new ExtractWorkBenchMarkScore(
      window.CpuEntity.getCpu(),
      window.GpuEntity.getGpu(),
      window.MemoryEntity.getMemory(),
      window.StorageEntity.getStorage()
    );

    const target = document.getElementById('target')!;

    if (document.getElementById('buildComputerArea') === null) {
      const container = document.createElement('div');
      container.setAttribute('id', 'buildComputerArea');
      container.classList.add('mt-5');
      target.append(container);
    }

    const buildComputerArea = document.getElementById('buildComputerArea')!;
    buildComputerArea.innerHTML = ``;

    const sliderContainerHtml = BuildComputerViews.createSliderContainerHtml();
    buildComputerArea.innerHTML += sliderContainerHtml;

    BuildComputerViews.createStringInnerHTML(calcuGameScore, calcuWrokScore);

    // 指定した範囲で eslintのルールを無効化する
    /* eslint-disable */
    var swiper = new Swiper('.mySwiper', {
      // Install modules
      modules: [Navigation, Pagination, Scrollbar],
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    /* eslint-enable */
  }

  /**
   *
   * @returns
   */
  static formValidation(): boolean {
    // プロパティ '〇〇' は型 'HTMLElement' に存在しません。
    // INFO: https://www.azukipan.com/posts/typescript-error-htmlelement/
    // 型アサーションを指定する
    // <HTMLInputElement>document.getElementById か document.getElementById(CpuViews.cpuBrandId)! as HTMLInputElement; と記述する
    const cpuBrand = document.getElementById(CpuViews.cpuBrandId)! as HTMLInputElement;
    const cpuModel = document.getElementById(CpuViews.cpuModelId)! as HTMLInputElement;
    const gpuBrand = document.getElementById(GpuViews.gpuBrandId)! as HTMLInputElement;
    const gpuModel = document.getElementById(GpuViews.gpuModelId)! as HTMLInputElement;
    const memoryQuantity = document.getElementById(MemoryViews.memoryQuantityId)! as HTMLInputElement;
    const memoryBrand = document.getElementById(MemoryViews.memoryBrandId)! as HTMLInputElement;
    const memoryModel = document.getElementById(MemoryViews.memoryModelId)! as HTMLInputElement;
    const strageType = document.getElementById(StorageViews.storageTypeId)! as HTMLInputElement;
    const strageSize = document.getElementById(StorageViews.storageSizeId)! as HTMLInputElement;
    const strageBrand = document.getElementById(StorageViews.storageBrandId)! as HTMLInputElement;
    const strageModel = document.getElementById(StorageViews.storageModelId)! as HTMLInputElement;

    // 全ての入力フォームが入力されていたら結果を出力する
    if (
      !CreateComputerController.isFormEmpty(cpuBrand.value) ||
      !CreateComputerController.isFormEmpty(cpuModel.value) ||
      !CreateComputerController.isFormEmpty(gpuBrand.value) ||
      !CreateComputerController.isFormEmpty(gpuModel.value) ||
      !CreateComputerController.isFormEmpty(memoryQuantity.value) ||
      !CreateComputerController.isFormEmpty(memoryBrand.value) ||
      !CreateComputerController.isFormEmpty(memoryModel.value) ||
      !CreateComputerController.isFormEmpty(strageType.value) ||
      !CreateComputerController.isFormEmpty(strageSize.value) ||
      !CreateComputerController.isFormEmpty(strageBrand.value) ||
      !CreateComputerController.isFormEmpty(strageModel.value)
    ) {
      alert('全ての項目を入力して下さい。');
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param value
   * @returns
   */
  static isFormEmpty(value: string): boolean {
    if (value === '-' || value === '' || value === undefined) return false;
    return true;
  }
}

export default CreateComputerController;
