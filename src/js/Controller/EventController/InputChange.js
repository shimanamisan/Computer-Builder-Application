class InputChange {
	/**
   * input要素にchangeイベント登録する
   * @param {*} inputElement
   * @param {*} func
   */
	static addEvent(inputElement, func) {
		inputElement.addEventListener('change', func);
	}
}

export default InputChange;
