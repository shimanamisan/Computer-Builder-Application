import CpuEntity from '../js/Entity/CpuEntity';
import GpuEntity from '../js/Entity/GpuEntity';
import MemoryEntity from '../js/Entity/MemoryEntity';
import StorageEntity from '../js/Entity/StorageEntity';

// INFO: https://dev.classmethod.jp/articles/typings-of-window-object/
// Windowにプロパティを追加する
declare global {
  interface Window {
    CpuEntity: CpuEntity;
    GpuEntity: GpuEntity;
    MemoryEntity: MemoryEntity;
    StorageEntity: StorageEntity;
  }
}
