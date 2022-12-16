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
import StrageSectionController from './Controller/StrageSectionController';
import AddOptionElement from './Controller/AddOptionElement';

class App {
	static async createTopView() {
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
		await AddOptionElement.cpuBrandElements();
		// cpuのBrandを切り替えたら同じブランドのgpuを取得する処理を登録する
		InputChange.addEvent(document.getElementById(CpuViews.cpuBrandId), AddOptionElement.cpuModelElements);
		// cpuのAPIデータを取得して option 要素に追加する
		await AddOptionElement.gpuBrandElements();

		await StrageSectionController.strageTypeElement();

		InputChange.addEvent(document.getElementById(GpuViews.gpuBrandId), AddOptionElement.gpuModelElements);
		InputChange.addEvent(document.getElementById(MemoryViews.memoryQuantityId), AddOptionElement.memoryBrandElements);
		InputChange.addEvent(document.getElementById(StorageViews.storageTypeId), StrageSectionController.strageSizeElements);
	}
}

await App.createTopView();
