class InputChange {
	/**
   * input要素にchangeイベント登録する
   * @param {*} inputElement
   * @param {*} func
   */
	static addEvent(inputElement, func) {
		inputElement.addEventListener('change', func);
	}

	/**
   * input要素に登録されたchangeイベントを削除する
   * @param {*} inputElement
   * @param {*} func
   */
	static removeEvent(inputElement, func) {
		inputElement.removeEventListener('change', func);
	}
}

export default InputChange;
