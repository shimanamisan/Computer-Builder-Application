class ButtonClick {
  /**
   * button要素にクリックイベントを登録する
   * @param {*} buttonElement
   * @param {*} func
   */
  static addEvent(buttonElement, func) {
    buttonElement.addEventListener('click', func);
  }
}
 
export default ButtonClick;
