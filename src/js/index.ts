import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@scss/style';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CpuViews from './Viwes/CpuViews';
import GpuViews from './Viwes/GpuViews';
import MemoryViews from './Viwes/MemoryViews';
import StorageViews from './Viwes/StorageViews';
import ButtonViews from './Viwes/ButtonViews';
import InputChange from './Controller/EventController/InputChange';
import ButtonClick from './Controller/EventController/ButtonClick';
import StorageSectionController from './Controller/StorageSectionController';
import MemorySectionController from './Controller/MemorySectionController';
import CreateComputerController from './Controller/CreateComputerController';
import CpuSectionController from './Controller/CpuSectionController';
import GpuSectionConttoller from './Controller/GpuSectionConttoller';
import CpuEntity from './Entity/CpuEntity';
import GpuEntity from './Entity/GpuEntity';
import MemoryEntity from './Entity/MemoryEntity';
import StorageEntity from './Entity/StorageEntity';

class App {
  static async createTopView() {
    // window.CpuEntity = new CpuEntity();
    // window.GpuEntity = new GpuEntity();
    // window.MemoryEntity = new MemoryEntity();
    // window.StorageEntity = new StorageEntity();

    const container: HTMLElement = document.createElement('div');
    container.classList.add('col-md-8', 'd-flex', 'flex-column', 'm-auto');
    container.innerHTML += CpuViews.createStringHTML();
    container.innerHTML += GpuViews.createStringHTML();
    container.innerHTML += MemoryViews.createStringHTML();
    container.innerHTML += StorageViews.createStringHTML();
    container.innerHTML += ButtonViews.createStringHTML();

    const target: any | null = document.getElementById('target');
    target.append(container);

    // cpuのAPIデータを取得して option 要素に追加する
    await CpuSectionController.cpuBrandElements();
    // cpuのBrandを切り替えたら同じブランドのgpuを取得する処理を登録する
    InputChange.addEvent(document.getElementById(CpuViews.cpuBrandId), CpuSectionController.cpuModelElements);
    // cpuのAPIデータを取得して option 要素に追加する
    await GpuSectionConttoller.gpuBrandElements();

    await StorageSectionController.strageTypeElement();

    InputChange.addEvent(document.getElementById(GpuViews.gpuBrandId), GpuSectionConttoller.gpuModelElements);

    /* メモリー項目選択時のイベント */
    InputChange.addEvent(
      document.getElementById(MemoryViews.memoryQuantityId),
      MemorySectionController.addMemoryBrandElements
    );
    InputChange.addEvent(
      document.getElementById(MemoryViews.memoryBrandId),
      MemorySectionController.addMemoryModelElements
    );
    InputChange.addEvent(document.getElementById(MemoryViews.memoryModelId), MemorySectionController.addComputerEntity);
    /***************************/

    InputChange.addEvent(
      document.getElementById(StorageViews.storageTypeId),
      StorageSectionController.storageSizeElements
    );

    ButtonClick.addEvent(document.getElementById(ButtonViews.addPcButtonId), CreateComputerController.createHtml);
  }
}

await App.createTopView();
