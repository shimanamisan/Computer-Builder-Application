class ButtonClick {
  /**
   * button要素にクリックイベントを登録する
   * @param buttonElement
   * @param func
   */
  static addEvent(buttonElement: HTMLElement, func: (event: Event) => void) {
    buttonElement.addEventListener('click', func);
  }
}

export default ButtonClick;
