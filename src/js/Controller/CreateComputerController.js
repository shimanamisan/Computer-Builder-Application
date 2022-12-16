import CpuViews from '../Viwes/CpuViews';
import GpuViews from '../Viwes/GpuViews';
import MemoryViews from '../Viwes/MemoryViews';
import StorageViews from '../Viwes/StorageViews';

class CreateComputerController {
  static create() {
    const cpuBrand = document.getElementById(CpuViews.cpuBrandId).value
    const cpuModel = document.getElementById(CpuViews.cpuModelId).value
    const gpuBrand = document.getElementById(GpuViews.gpuBrandId).value
    const gpuModel = document.getElementById(GpuViews.gpuModelId).value
    const memoryQuantity = document.getElementById(MemoryViews.memoryQuantityId).value
    const memoryBrand = document.getElementById(MemoryViews.memoryBrandId).value
    const memoryModel = document.getElementById(MemoryViews.memoryModel).value
    const strageType = document.getElementById(StorageViews.storageTypeId).value
    const strageSize = document.getElementById(StorageViews.strageSizeId).value
    const strageBrand = document.getElementById(StorageViews.strageBrandId).value
    const strageModel = document.getElementById(StorageViews.strageModelId).value
  }
}

export default CreateComputerController