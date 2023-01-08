class InputChange {
  /**
   * input要素にchangeイベント登録する
   * @param inputElement
   * @param func
   */
  static addEvent(inputElement: HTMLElement, func: (event: Event) => void) {
    inputElement.addEventListener('change', func);
  }
}

export default InputChange;
