import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@scss/style';
import CpuViews from './Viwes/CpuViews';
import GpuViews from './Viwes/GpuViews';
import MemoryViews from './Viwes/MemoryViews';
import StorageViews from './Viwes/StorageViews';
import Button from './Viwes/Button';
import InputChange from './Controller/EventController/InputChange';
import ButtonClick from './Controller/EventController/ButtonClick';
import StorageSectionController from './Controller/StorageSectionController';
import MemorySectionController from './Controller/MemorySectionController';
import CreateComputerController from './Controller/CreateComputerController';
import ComputerEntity from './Entity/ComputerEntity';
import CpuSectionController from './Controller/CpuSectionController';
import GpuSectionConttoller from './Controller/GpuSectionConttoller';

class App {
	static async createTopView() {
		window.ComputerEntity = new ComputerEntity();
		const container = document.createElement('div');
		container.classList.add('col-md-8', 'd-flex', 'flex-column', 'm-auto');
		container.innerHTML += CpuViews.createStringHTML();
		container.innerHTML += GpuViews.createStringHTML();
		container.innerHTML += MemoryViews.createStringHTML();
		container.innerHTML += StorageViews.createStringHTML();
		container.innerHTML += Button.createStringHTML();

		const target = document.getElementById('target');
		target.append(container);

		// cpuのAPIデータを取得して option 要素に追加する
		await CpuSectionController.cpuBrandElements();
		// cpuのBrandを切り替えたら同じブランドのgpuを取得する処理を登録する
		InputChange.addEvent(document.getElementById(CpuViews.cpuBrandId), CpuSectionController.cpuModelElements);
		// cpuのAPIデータを取得して option 要素に追加する
		await GpuSectionConttoller.gpuBrandElements();

		await StorageSectionController.strageTypeElement();

		InputChange.addEvent(document.getElementById(GpuViews.gpuBrandId), GpuSectionConttoller.gpuModelElements);
		InputChange.addEvent(document.getElementById(MemoryViews.memoryQuantityId), MemorySectionController.memoryBrandElements);
		InputChange.addEvent(document.getElementById(StorageViews.storageTypeId), StorageSectionController.strageSizeElements);

		ButtonClick.addEvent(document.getElementById(Button.addPcButtonId), CreateComputerController.create);
	}
}

await App.createTopView();
