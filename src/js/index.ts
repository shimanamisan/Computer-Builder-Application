import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@scss/style.scss';
import '@iamge/ogp.png';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CpuViews from './Views/CpuViews';
import GpuViews from './Views/GpuViews';
import MemoryViews from './Views/MemoryViews';
import StorageViews from './Views/StorageViews';
import ButtonViews from './Views/ButtonViews';
import InputChange from './Controller/EventController/InputChange';
import ButtonClick from './Controller/EventController/ButtonClick';
import StorageSectionController from './Controller/StorageSectionController';
import MemorySectionController from './Controller/MemorySectionController';
import CreateComputerController from './Controller/CreateComputerController';
import CpuSectionController from './Controller/CpuSectionController';
import GpuSectionConttoller from './Controller/GpuSectionConttoller';

class App {
  /**
   * アプリケーションを起動させる
   */
  static async createTopView(): Promise<void> {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('col-md-8', 'd-flex', 'flex-column', 'm-auto');
    container.innerHTML += CpuViews.createStringHTML();
    container.innerHTML += GpuViews.createStringHTML();
    container.innerHTML += MemoryViews.createStringHTML();
    container.innerHTML += StorageViews.createStringHTML();
    container.innerHTML += ButtonViews.createStringHTML();

    // INFO: https://stackoverflow.com/questions/55588968/type-error-object-is-possibly-null-ts2531-for-window-document/55589638
    // document.getElementByIdがnullを返すかもしれないので !演算子をつけて回避する
    const target: HTMLElement = document.getElementById('target')!; // ← #target が確実に存在している場合は ! 演算子でTS認識させるようにする
    target.append(container);

    // cpuのAPIデータを取得して option 要素に追加する
    await CpuSectionController.cpuBrandElements();
    // cpu の Brand の seletc 要素を切り替えたら同じブランドの cpu を取得する処理を登録する
    InputChange.addEvent(document.getElementById(CpuViews.cpuBrandId)!, CpuSectionController.cpuModelElements);
    // cpu の APIデータを取得して option 要素に追加する
    await GpuSectionConttoller.gpuBrandElements();
    // storage の APIデータを取得して option 要素に追加する
    await StorageSectionController.strageTypeElement();

    // gpuModel の select 要素を選択したとき発火するイベントの処理を追加
    InputChange.addEvent(document.getElementById(GpuViews.gpuBrandId)!, GpuSectionConttoller.gpuModelElements);

    /* メモリー項目選択時のイベント */
    InputChange.addEvent(
      document.getElementById(MemoryViews.memoryQuantityId)!,
      MemorySectionController.addMemoryBrandElements
    );
    InputChange.addEvent(
      document.getElementById(MemoryViews.memoryBrandId)!,
      MemorySectionController.addMemoryModelElements
    );
    InputChange.addEvent(
      document.getElementById(MemoryViews.memoryModelId)!,
      MemorySectionController.addComputerEntity
    );
    /***************************/

    InputChange.addEvent(
      document.getElementById(StorageViews.storageTypeId)!,
      StorageSectionController.storageSizeElements
    );

    ButtonClick.addEvent(document.getElementById(ButtonViews.addPcButtonId)!, CreateComputerController.createHtml);
  }
}

/**
 * トップレベルの 'await' 式は、'module' オプションが 'es2022'、'esnext'、'system'、'node16'　または 'nodenext' に設定されていて、
 * 'target' オプションが 'es2017' 以上に設定されている場合にのみ使用できます。
 */
await App.createTopView();
