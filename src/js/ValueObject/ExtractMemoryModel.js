import MemoryViews from '../Viwes/MemoryViews';

class ExtractMemoryModel {
  #value;

  constructor(values) {
    if (values.length === 0) {
      throw 'An invalid argument was assigned.';
    }

    const memoryNum = document.getElementById(MemoryViews.memoryQuantityId).value;
    const memoryBrand = document.getElementById(MemoryViews.memoryBrandId).value;

    const filterBrand = values.filter(x => (x.Brand === memoryBrand ? x : ''));

    const filterModel = filterBrand.filter(x => (x.Model.indexOf(`${memoryNum}x`) !== -1 ? x.Model : ''));

    this.#value = filterModel;
  }

  getModel() {
    return this.#value;
  }
}

export default ExtractMemoryModel;
