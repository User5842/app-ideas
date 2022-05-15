class Info {
  constructor(infoSelector) {
    this._infoElement = document.querySelector(infoSelector);
  }

  clear() {
    this._infoElement.innerHTML = "";
  }

  updateInfo(data) {
    this._infoElement.textContent = JSON.stringify(data, null, 2);
  }
}

export default Info;
