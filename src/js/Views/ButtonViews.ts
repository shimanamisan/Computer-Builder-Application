class ButtonViews {
  // このViewクラスで使用しているID要素名
  static addPcButtonId = 'add-pc-button';

  /**
   * HTML要素の雛形を返す
   * @returns HTMLの文字列を返す
   */
  static createStringHTML(): string {
    return `
      <div class="col-md-2 mt-4">
        <button class="btn btn-primary btn-container--full" id="add-pc-button">Add PC</button>
      </div>
    `;
  }
}

export default ButtonViews;
