import CpuViews from '../Viwes/CpuViews';
import GpuViews from '../Viwes/GpuViews';
import MemoryViews from '../Viwes/MemoryViews';
import StorageViews from '../Viwes/StorageViews';

class CreateComputerController {
	static async create() {
		const cpuBrand = document.getElementById(CpuViews.cpuBrandId).value;
		const cpuModel = document.getElementById(CpuViews.cpuModelId).value;
		const gpuBrand = document.getElementById(GpuViews.gpuBrandId).value;
		const gpuModel = document.getElementById(GpuViews.gpuModelId).value;
		const memoryQuantity = document.getElementById(MemoryViews.memoryQuantityId).value;
		const memoryBrand = document.getElementById(MemoryViews.memoryBrandId).value;
		const memoryModel = document.getElementById(MemoryViews.memoryModelId).value;
		const strageType = document.getElementById(StorageViews.storageTypeId).value;
		const strageSize = document.getElementById(StorageViews.storageSizeId).value;
		const strageBrand = document.getElementById(StorageViews.storageBrandId).value;
		const strageModel = document.getElementById(StorageViews.storageModelId).value;

		// 全ての入力フォームが入力されていたら結果を出力する
		if (
			!CreateComputerController.isFormEmpty(cpuBrand) ||
      !CreateComputerController.isFormEmpty(cpuModel) ||
      !CreateComputerController.isFormEmpty(gpuBrand) ||
      !CreateComputerController.isFormEmpty(gpuModel) ||
      !CreateComputerController.isFormEmpty(memoryQuantity) ||
      !CreateComputerController.isFormEmpty(memoryBrand) ||
      !CreateComputerController.isFormEmpty(memoryModel) ||
      !CreateComputerController.isFormEmpty(strageType) ||
      !CreateComputerController.isFormEmpty(strageSize) ||
      !CreateComputerController.isFormEmpty(strageBrand) ||
      !CreateComputerController.isFormEmpty(strageModel)
		) {
			alert('全ての項目を入力して下さい。');
			return;
		}

		console.log(window.CpuEntity);
		console.log(window.GpuEntity);
		console.log(window.MemoryEntity);
		console.log(window.StorageEntity);

		return;
	}

	static isFormEmpty(value) {
		if (value === '-' || value === '' || value === undefined) return false;

		return true;
	}
}

export default CreateComputerController;
