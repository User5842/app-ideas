class Status {
  constructor(statusSelector) {
    this._statusElement = document.querySelector(statusSelector);
  }

  updateStatus(statusText) {
    this._statusElement.textContent = statusText;
  }
}

export default Status;
