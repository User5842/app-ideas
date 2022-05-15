import languageCodes from "../data/data.js";

class ControlPanel {
  constructor(controlPanelSelector, { handleLogin, handleLogout }) {
    this._controlPanelElement = document.querySelector(controlPanelSelector);
    this._languageCodesElement =
      this._controlPanelElement.querySelector("#codes");

    this._handleLogin = handleLogin;
    this._handleLogout = handleLogout;

    this._generateLanguageCodes();
    this._setEventListeners();
  }

  getLanguageCode() {
    return this._languageCodesElement.value;
  }

  languageCodeSelected() {
    return this._languageCodesElement.value.length > 0;
  }

  _generateLanguageCodes() {
    const codesFragment = new DocumentFragment();

    languageCodes.forEach(({ English, alpha2 }) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = English;
      optionElement.value = alpha2;
      codesFragment.append(optionElement);
    });

    this._languageCodesElement.append(codesFragment);
  }

  _setEventListeners() {
    this._controlPanelElement.addEventListener("submit", (e) =>
      this._handlePanelSubmit(e)
    );
  }

  _handlePanelSubmit(e) {
    e.preventDefault();

    "login" in e.submitter.dataset ? this._handleLogin() : this._handleLogout();
  }
}

export default ControlPanel;
